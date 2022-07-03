import React from "react";

import Medihos from "../assets/images/medi1.png";
import Lopa from "../assets/images/lopa1.png";
import Food from "../assets/images/food1.png";

const projects = [
  {
    id: 1,
    title: "Lopa, assingment assistant application",
    github: "https://github.com/eric-ricky/peer-to-peer",
    link: "https://peer-to-peer.vercel.app/",
    image: Lopa,
  },
  {
    id: 1,
    title: "Online food delivery application",
    github: "https://github.com/eric-ricky/food-delivery-concept",
    link: "https://food-delivery-concept.vercel.app/",
    image: Food,
  },
  {
    id: 1,
    title: "Medihos hospital marketing website",
    github: "https://github.com/eric-ricky/MediHos",
    link: "https://ricky-medihos.netlify.app/",
    image: Medihos,
  },
];

const Portfolio = () => {
  return (
    <section id="projects" className="pt-16 lg:pb-52 pb-16">
      <div className="container mx-auto ">
        <h3 className="section-heading pl-4 lg:pl-0">Projects</h3>

        <div className="flex items-center flex-col lg:flex-row w-full mt-16 justify-between lg:gap-6 gap-16 px-4 lg:px-0">
          {projects?.map((project, i) => (
            <div
              key={i}
              className="lg:w-[420px] w-full rounded-lg shadow-lg cursor-pointer hover:scale-105 ease-in duration-300 "
            >
              <div className="overflow-hidden w-full h-full rounded-lg">
                <img
                  src={`${project.image.src}`}
                  alt="project1"
                  className="w-full -hover:scale-50"
                />
              </div>

              <div className="flex flex-col justify-between mt-4 w-full  text-black pb-6 px-4  rounded-lg">
                <p className="text-[1.6rem] mb-2 font-medium">
                  {project.title}
                </p>
                <div className="flex justify-between items-center">
                  <a target="_blank" href={`${project.github}`}>
                    Github
                  </a>
                  <a target="_blank" href={`${project.link}`}>
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* <div className="lg:w-[420px] w-full  rounded-lg bg-green-400 relative">
            <div className="overflow-hidden w-full h-[450px] rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1607799131608-9a22dd60e25e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fHNvZnR3YXJlJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
                alt="project1"
                className="w-full -hover:scale-50"
              />
            </div>
            <div className="flex flex-col justify-between mt-4 w-full absolute bottom-0 left-0 text-white p-2 px-4 bg-[rgba(0,0,0,0.4)] rounded-lg">
              <p className="text-[2rem] font-medium">
                Redesign of Armstrong Women Empowerment Website
              </p>
              <div className="flex gap-2">
                <button>Github</button>
                <button>Demo</button>
              </div>
            </div>
          </div>

          <div className="lg:w-[420px] w-full  rounded-lg bg-green-400 relative">
            <div className="overflow-hidden w-full h-[450px] rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHNvZnR3YXJlJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
                alt="project1"
                className="w-full -hover:scale-50"
              />
            </div>
            <div className="flex flex-col justify-between mt-4 w-full absolute bottom-0 left-0 text-white p-2 px-4 bg-[rgba(0,0,0,0.4)] rounded-lg">
              <p className="text-[2rem] font-medium">
                Redesign of Armstrong Women Empowerment Website
              </p>
              <div className="flex gap-2">
                <button>Github</button>
                <button>Demo</button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
