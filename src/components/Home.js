import React, { useState, useEffect } from "react";
import starImg from "../images/star-pattern.png";
import lineImg from "../images/line-pattern.png";
import resumeFile from "../file/resume.pdf";


const intialStackArr = ["Front-End", "Back-End", "Full-Stack"];

export default function Home() {

  const [activeItem, setActiveItem] = useState(0);
  const [stackArr, setStackArr] = useState([intialStackArr[activeItem]]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveItem((prevItem) => (prevItem < intialStackArr.length - 1 ? prevItem + 1 : 0));
    }, 2000);

    return () => clearTimeout(timer);
  }, [activeItem]);

  useEffect(() => {
    setStackArr([intialStackArr[activeItem]]);
  }, [activeItem]);

  const handleClick = () => {
    const fileUrl = resumeFile;

    const link = document.createElement("a");

    link.href = fileUrl;

    link.download = `Harmanpreet Singh's Resume.pdf`;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  return (
    <main className="max-w-[1024px] mx-auto h-[75vh]" >
      <div className="mx-2 mt-[20vh] flex justify-center">
        <div className="home">
          <h3>Hello,</h3>
          <h3>I am Harmanpreet Singh</h3>

  
            <div>
              {stackArr.map((arr, index) => (
                <h1
                key={index}
                className={`home-heading`}>
                  {arr}
                </h1>
              ))}
            </div>
      

          <h1 className="home-heading">Developer</h1>
          <h3>From Punjab, India</h3>
          <button onClick={handleClick} className="home-resume-btn mt-3">
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
