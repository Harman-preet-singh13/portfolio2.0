import React from "react";
import starImg from "../images/star-pattern.png"
import lineImg from "../images/line-pattern.png"
import resumeFile from "../file/resume.pdf"

export default function Home() {

  const handleClick = () =>{

    const fileUrl = resumeFile;

    const link = document.createElement('a');

    link.href = fileUrl;

    link.download = `Harmanpreet Singh's Resume.pdf`;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

  }

  return (
    <main className="max-w-[1024px] mx-auto h-[75vh]">
      <div className="mx-2 mt-[20vh] flex justify-center">
        <div className="home">
          <h3>Hello,</h3>
          <h3>I am Harmanpreet Singh</h3>
          <h1 className="home-heading">Full Stack</h1>
          <h1 className="home-heading">Developer</h1>
          <h3>From Punjab, India</h3>
          <button
          onClick={handleClick}
          className="home-resume-btn mt-3"
          >
            Resume
          </button>
          <div className="">
            <img
            src={starImg}
            alt="star pattern"
            className="home-star-pattern"
            />
            <img
            src={lineImg}
            alt="line pattern"
            className="home-line-pattern"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
