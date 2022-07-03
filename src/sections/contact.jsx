import React from "react";
import { Icon } from "@iconify/react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <section className="lg:pt-32 pt-8" id="contact">
      <div className="container mx-auto lg:px-0 px-6">
        <h2 className="section-heading">Contact</h2>

        <div className="flex items-center lg:flex-row flex-col mt-8">
          <div className="flex-1 pb-16">
            <p className="font-semibold text-[2rem]">
              I'm available for freelance work.
              <br /> Drop me a line if you fancy a chat.
            </p>
            <p className="my-2 text-[1.2rem] cursor-pointer">
              ericricky200@gmail.com
            </p>
            <div className="flex items-center gap-6 text-[1.8rem] mt-8">
              <span className="cursor-pointer">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/erick-otieno-7532b01b9"
                >
                  <Icon icon="logos:linkedin-icon" />
                </a>
              </span>
              <span>
                <a target="_blank" href="https://github.com/eric-ricky">
                  <Icon icon="logos:github-icon" color="blue" />
                </a>
              </span>
              <span>
                <a
                  target="_blank"
                  href="https://wa.me/254710752939?text=Hi,%20Erick"
                >
                  <Icon icon="logos:whatsapp" />
                </a>
              </span>
            </div>
          </div>

          <div className="flex-1 bg-[#1F4690] rounded-xl">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
