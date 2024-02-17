import React, { useEffect, useRef, useState } from "react";
import ProjectContent from "./ProjectContent";
import bgImg from "../images/icons/Screenshot_3.jpg";


export default function Projects() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState([]);
  const [isImgVisible, setIsImgVisible] = useState([]);

  const headerRef = useRef(null);
  const contentRefs = useRef([]);
  const imgRefs = useRef([]);

  useEffect(()=>{

    const observerOptions = {
      root:null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observers = contentRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if(entry.isIntersecting){
            setIsContentVisible((prevVisibilty) => {
              const updatedVisibility = [...prevVisibilty];
              updatedVisibility[index] = true;
              return updatedVisibility;
            });
            observer.disconnect();
          }
        },
        observerOptions
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    }
  },[]);

  useEffect(()=>{

    const observerOptions = {
      root:null,
      rootMargin: "0px",
      threshold: 0.01,
    };

    const observers = imgRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if(entry.isIntersecting){
            setIsImgVisible((prevVisibilty) => {
              const updatedVisibility = [...prevVisibilty];
              updatedVisibility[index] = true;
              return updatedVisibility;
            });
            observer.disconnect();
          }
        },
        observerOptions
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    }
  },[]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry, observer]) => {
        if (entry.isIntersecting) {
          setIsHeaderVisible(true);
          if (observer) {
            observer.disconnect();
          }
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1,
      }
    );

    const currentRef = headerRef.current;

    if (currentRef) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);



  return (
    <div className="project-wrapper ">
      <header className="project-header-wrapper bg-white">
        <img
          src={bgImg}
          alt="project backgroung"
          className={`project-header-img mx-auto ${
            isHeaderVisible ? "show" : "hide"
          }`}
          ref={headerRef}
        />
        <h1 className="project-heading">Projects</h1>
      </header>
      <div className="max-w-[1024px] mx-auto  bg-white">
        <div className="mx-4">
          <section className="project-container p-5 ">
            {ProjectContent.map((projects, index) => {
              return (
                <div key={index} className="border rounded-md shadow-inner my-10 p-2 md:p-0">
                  <div className="py-5  md:py-20 mx-0 md:mx-5">
                    <h3 className="mb-5">
                      <span>{projects.id}.{" "}</span>
                      {projects.name}
                    </h3>
                    <div className=" flex flex-col-reverse md:flex-row justify-between">
                      <div 
                      
                      ref={(ref) => (contentRefs.current[index] = ref)}
                      className={`self-center mt-4 md:mt-0 max-w-[350px]
                      ${
                        isContentVisible[index]
                          ? "project-content-original"
                          : "project-content-transform"
                      }
                      `}
                      >
                        <a
                          className="underline text-sm"
                          href={projects.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live
                        </a>
                        <br></br>
                          <span className=" project-content">{projects.content}</span>
                      </div>
                      <div
                      
                      ref={(ref) => (imgRefs.current[index] = ref)}
                      className={`
                      ${
                        isImgVisible[index]
                          ? "project-img-original"
                          : "project-img-transform"
                      }
                      `}
                      >
                         <a
                        href={projects.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                        src={projects.projectImg}
                        className={`mx-auto max-w-[200px] md:max-w-[350px] rounded-sm shadow-xl
                      hover:-translate-y-4 transition-transform ease-in-out 
                      `}
                        alt={projects.name}
                        
                      />
                      </a>
                      </div>
                     
                      
                    </div>
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
