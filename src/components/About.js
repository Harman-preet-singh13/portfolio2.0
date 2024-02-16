import React, { useRef, useEffect } from "react";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import gsap from "gsap";

const btnTech = [
  {
    name: "ReactJs",
    icon: <FaReact />,
  },
  {
    name: "NextJs",
    icon: <TbBrandNextjs />,
  },
  {
    name: "NodeJs",
    icon: <FaNodeJs />,
  },
  {
    name: "Redux",
    icon: <FaNodeJs />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
  },
  {
    name: "MUI",
    icon: <SiMui />,
  },
  {
    name: "Figma",
    icon: <FaFigma />,
  },
  {
    name: "CSS",
    icon: <FaCss3 />,
  },
];

export default function About() {
  const spanRef = useRef(null);

  useEffect(() => {
    const animation = gsap.to(spanRef.current, {
      backgroundSize: '100% 100%',
      duration: 2,
      ease: 'power2.inOut',
      paused: true,
    });

    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      animation.progress(scrollPercentage / 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <div className="max-w-[1024px] mx-auto mt-5 h-[90vh]">
      <div className="mx-4">
        <header>
          <h1>About</h1>
        </header>
        <section className="mt-5 about-page-content">
          <p>
            <span ref={spanRef}>
              
                As a Full Stack Developer, I bring a passion for crafting
                seamless web experiences.
             
                My expertise spans both front-end and back-end technologies,
                including React and Node.js, allowing me to contribute
                effectively to a variety of projects.
              <br/>
                I specialize in designing and implementing user-friendly
                interfaces, creating and maintaining Restful API, and working
                with databases.
              
                Proficient in CSS, Tailwind, and MUI, I ensure applications not
                only function well but also look great.
              
            </span>
          </p>
        </section>

        <section className="mt-5 md:mt-28">
          <h1>Skills</h1>

          <div className="about-btns">
            {btnTech.map((btn, index) => (
              <button
                key={index}
                className={`btn-style flex gap-1 justify-center`}
              >
                <span className="btn-icon self-center ">{btn.icon}</span>
                {btn.name}
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
