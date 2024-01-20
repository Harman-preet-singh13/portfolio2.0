import React, { useEffect, useState } from "react";
import Modal from "react-modal";

import gitIcon from "../images/icons/icons8-github-64.png";
import instaIcon from "../images/icons/icons8-instagram-48.png";
import linkedinIcon from "../images/icons/icons8-linkedin-48.png";
import menuIcon from "../images/icons/icons8-menu-50.png";

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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [path, setPath] = useState(window.location.hash);

  console.log(path);

  useEffect(() => {
    const handleHashChange = () => {
      setPath(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <>
      <nav className="max-w-[1440px] mx-auto mt-4">
        <section className="desktop-nav mx-10 flex justify-between">
          <header id="home" className="nav-link self-center">
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
          <header id="home" className="nav-link">
            Harmanpreet Singh
          </header>

          <button
            onClick={openModal}
            className="hover:bg-slate-500 hover:rounded-full p-1"
          >
            <img src={menuIcon} alt="menu-icon" className="w-9" />
          </button>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            overlayClassName="modal-overlay"
            className="modal-content"
          >
            <ul className="mt-20 flex flex-col gap-8">
              {NavTag.map((tag) => (
                <li key={tag.id} className="nav-link">
                  <a
                    href={tag.navTo}
                    onClick={closeModal}
                    className="nav-link"
                  >
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
