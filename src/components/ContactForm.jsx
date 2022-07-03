import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const ContactForm = () => {
  const [state, setState] = useState("");

  const RegisterSchema = Yup.object({
    fullName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Full name is required"),
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    message: Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      message: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: async () => {
      setState("loading");

      const payload = {
        fullName: values.fullName,
        email: values.email,
        message: values.message,
      };

      try {
        console.log(payload);
        await setDoc(
          doc(db, "portfolio-contact-form", `${Date.now()}`),
          payload,
          { merge: true }
        );

        setState("success");
      } catch (error) {
        console.log(error);
      }

      setTimeout(() => {
        setState("");
        formik.resetForm({ fullName: "", email: "", message: "" });
      }, 3000);
    },
  });

  const { errors, touched, handleSubmit, values, getFieldProps } = formik;

  return (
    <>
      {state === "error" && (
        <div className="text-red-400">
          Something went wrong! Try again later
        </div>
      )}

      {state === "success" ? (
        <div className="text-green-400">Submitted successfully!</div>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <div className=" overflow-hidden sm:rounded-md p-4">
              <div className="px-0 py-5 bg-transparent sm:p-6">
                <div className="grid grid-cols-12 gap-6 text-white">
                  <div className="col-span-12 lg:col-span-6">
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium "
                    >
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      placeholder="James Kyalo"
                      {...getFieldProps("fullName")}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-sm p-2 text-black"
                    />
                    {touched.fullName && errors.fullName ? (
                      <div className="text-sm text-red-400">
                        {formik.errors.fullName}
                      </div>
                    ) : null}
                  </div>

                  <div className="col-span-12 lg:col-span-6">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium"
                    >
                      Email address*
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="you@example.com"
                      autoComplete="email"
                      {...getFieldProps("email")}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 text-black"
                    />
                    {touched.email && errors.email ? (
                      <div className="text-sm text-red-400">
                        {formik.errors.email}
                      </div>
                    ) : null}
                  </div>

                  <div className="col-span-12 sm:col-span-12">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium "
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="3"
                      value={values.message}
                      {...getFieldProps("message")}
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2 text-black"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="px-4 py-3 text-left sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-start py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-sm text-white bg-[#FF9F29] hover:opacity-[0.8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF9F29]"
                >
                  {state === "loading" ? "Sending..." : "Submit"}
                </button>
              </div>
            </div>
          </form>
        </>
      )}
    </>
  );
};

export default ContactForm;
