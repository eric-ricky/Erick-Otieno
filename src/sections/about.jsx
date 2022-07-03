import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const techStack = [
  {
    label: "JavaScript",
    icon: "logos:javascript",
  },
  {
    label: "React JS",
    icon: "vscode-icons:file-type-reactjs",
  },
  {
    label: "Next JS",
    icon: "cib:next-js",
  },
  {
    label: "NodeJs",
    icon: "logos:nodejs",
  },
  {
    label: "MongoDB",
    icon: "logos:mongodb",
  },
  {
    label: "Typscript",
    icon: "logos:typescript-icon",
  },
  {
    label: "Firebase",
    icon: "logos:firebase",
  },
  {
    label: "Express JS",
    icon: "logos:express",
  },
  {
    label: "Material UI",
    icon: "logos:material-ui",
  },
  {
    label: "Tailwind CSS",
    icon: "logos:tailwindcss-icon",
  },
  {
    label: "Figma",
    icon: "logos:figma",
  },
  {
    label: "Strapi",
    icon: "logos:strapi-icon",
  },
];

const About = () => {
  return (
    <section className="lg:pt-16 pt-8 lg:pb-32 pb-16" id="about" >
      <div className="container mx-auto lg:px-0 px-4">
        <h2 className="section-heading">About Me</h2>

        <div className="flex items-center lg:flex-row flex-col justify-between gap-16 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}
            className="row-col w-full flex flex-1"
          >
            <span className="row-message font-normal text-[1.4rem] w-full">
              Hi there 👋 , I'm Eric.
              <p className="mt-2 mb-6">
                Looking for the longer version? I'm a software developer with a
                strong technical background as a Fullstack engineer. I have more
                than 2 years of experience in building web applications. Some of
                my skills include{" "}
                <span className="underline text-orange-400 font-light">
                  Node JS, Express JS, Mongo DB and firebase for backend ,
                  material UI, Tailwind CSS for UI designs and responsive
                  layouts, Figma for UI wireframing and prototyping, React JS
                  with Next JS for frontend, and STRAPI as a CMS.
                </span>{" "}
              </p>
              <span className="mt-2">
                Short version? I'm a{" "}
                <span className="underline italic text-orange-400">
                  problem-solver
                </span>
                . To me, every software development project is an opportunity to
                solve a problem. An opportunity to fill a gap, to come up with
                creative solutions to a specific problem- with code.
              </span>
            </span>
          </motion.div>

          <div className="flex-1 lg:ml-16">
            <p className="text-[2rem] font-medium">My Tech Stack</p>
            <div className="flex flex-wrap  gap-4 mt-4">
              {techStack.map((el, i) => (
                <span
                  key={i}
                  className="text-black p-2 outline outline-2 outline-black"
                >
                  <Icon icon={el.icon} />
                  {el.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
