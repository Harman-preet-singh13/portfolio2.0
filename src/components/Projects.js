import React from "react";
import ProjectContent from "./ProjectContent";

export default function Projects() {
  return (
    <div className="project-wrapper ">
      <div className="max-w-[1024px] mx-auto mt-5">
      <div className="mx-4">
        <header>
          <h1>Projects</h1>
        </header>
        <section className="project-container mb-5 p-5">
          {ProjectContent.map((projects) => {
            return (
              <div id={projects.id} className="py-5 md:py-20">
                <div className="my-5 w-full h-[1px] bg-slate-900"></div>
                <h3 className="mb-5">
                  <span>{projects.id}. </span>
                  {projects.name}
                </h3>
                <div className=" flex flex-col-reverse md:flex-row justify-between">
                  <p className="project-content self-center ">
                    <a
                      className="underline"
                      href={projects.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live
                    </a>
                    <br></br>
                    {projects.content}
                  </p>
                  <img
                    src={projects.projectImg}
                    className="max-w-[200px] md:max-w-[350px] rounded-sm"
                    alt={projects.name}
                  />
                </div>
                
              </div>
            );
          })}
        </section>
      </div>
    </div>
    </div>
    
  );
}
