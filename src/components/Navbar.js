import React, { useState } from "react";
import Modal from "react-modal";

import gitIcon from "../images/icons/icons8-github-64.png";
import instaIcon from "../images/icons/icons8-instagram-48.png";
import linkedinIcon from "../images/icons/icons8-linkedin-48.png";

import { IoClose } from "react-icons/io5";

const NavTag = [
  {
    id: 1,
    name: "Home",
    navTo: "#home12",
  },
  {
    id: 2,
    name: "About",
    navTo: "#about",
  },
  {
    id: 3,
    name: "Projects",
    navTo: "#projects",
  },
  // {
  //   id: 4,
  //   name: "Contact",
  //   navTo: "#contact",
  // },
];

const SocailIcon = [
  {
    id: 0,
    name: "Github",
    icon: gitIcon,
    link: "https://github.com/Harman-preet-singh13",
  },
  {
    id: 1,
    name: "Instagram",
    icon: instaIcon,
    link: "https://www.instagram.com/psycho_quoter/",
  },
  {
    id: 2,
    name: "LinkedIn",
    icon: linkedinIcon,
    link: "https://www.linkedin.com/in/harman-preet-singh13/",
  },
];

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  
  const handleClose = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
      closeModal();
    }, 100);
  };

  const handleOpen = () => {
    setTimeout(() => {
      openModal();
    }, 150);

  }

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // const [path, setPath] = useState(window.location.hash);


  // useEffect(() => {
  //   const handleHashChange = () => {
  //     setPath(window.location.hash);
  //   };

  //   window.addEventListener("hashchange", handleHashChange);

  //   return () => {
  //     window.removeEventListener("hashchange", handleHashChange);
  //   };
  // }, []);

  return (
    <>
      <nav className="max-w-[1440px] mx-auto mt-4">
        <section className="desktop-nav mx-10 flex justify-between">
          <header id="home" className={`nav-link self-center`}>
            Harmanpreet Singh
          </header>

          <div className="self-center flex gap-8">
            {NavTag.map((tag) => (
              <a
                href={tag.navTo}
                key={tag.id}
                // className={`nav-link ${tag.navTo === path ? 'active-nav':''}`}
                className="nav-link"
              >
                {tag.name}
              </a>
            ))}
          </div>

          <ul className=" flex gap-5">
            {SocailIcon.map((icon) => (
              <li key={icon.id} aria-label={icon.name} className="">
                <a href={icon.link} target="_blank" rel="noopener noreferrer">
                  <img src={icon.icon} alt={icon.name} className="w-10" />
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="mobile-nav flex justify-between">
          <header
            id="home"
            className={`nav-link  my-3 ${isModalOpen ? "hidden" : ""}`}
          >
            Harmanpreet Singh
          </header>

          <button
            onClick={handleOpen}
            className={`hover:bg-slate-500 hover:rounded-full p-1 ${
              isModalOpen ? "hidden" : ""
            } `}
          >
            
            <div id="nav-menu-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            overlayClassName="modal-overlay"
            className="modal-content"
          >
            <ul className="mt-20 flex flex-col gap-8">
              <li className="mt-[-80px] ml-[120px] mb-10">
                <button
                  onClick={handleClose}
                  className={`nav-close-btn ${isClicked ? "close-clicked" : ""}`}
                >
                  <IoClose className="text-[2.25rem]" />
                </button>
              </li>

              {NavTag.map((tag) => (
                <li key={tag.id} className="nav-link">
                  <a href={tag.navTo} onClick={closeModal}>
                    {tag.name}
                  </a>
                </li>
              ))}
            </ul>

            <ul className="mt-10 flex justify-center gap-5">
              {SocailIcon.map((icon) => (
                <li key={icon.id} aria-label={icon.name} className="">
                  <a href={icon.link} target="_blank" rel="noopener noreferrer">
                    <img src={icon.icon} alt={icon.name} className="w-10" />
                  </a>
                </li>
              ))}
            </ul>
          </Modal>
        </section>
      </nav>
    </>
  );
}
