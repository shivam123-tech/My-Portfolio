import React, { useRef, useState } from "react";
import "./styles/NavBar.css";
import { gsap } from "gsap";
import { useLayoutEffect } from "react";

const NavBar = () => {
  const navRef = useRef(null);
  const gsapUtilsSelector = gsap.utils.selector(navRef);
  const [activeMenu, setActiveMenu] = useState(false);
  const [isNavAnimationPlaying, setIsNavAnimationPlaying] = useState(false);

  const linksName = [
    {
      name: "home",
    },
    {
      name: "about",
    },
    {
      name: "resume",
    },
    {
      name: "services",
    },
    {
      name: "project",
    },
    {
      name: "contact",
    },
  ];

  useLayoutEffect(() => {
   
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) === false
    ) {
      navLoadAnimation();
    }
  }, []);

  const toggleMenu = () => {
    document.querySelector(".nav_left").classList.toggle("translate-x-[200%]");
    setActiveMenu((prev) => !prev);
    // Only play the animation if the previous animation is not playing .
    if (!activeMenu) linksLoadAnimationMobile();
  };

  const navLoadAnimation = () => {
    gsap.from(gsapUtilsSelector([".logo", ".nav_link"]), {
      duration: 0.7,
      stagger: 0.2,
      y: "random(-20,20)",
      opacity: 0,
      ease: "back",
    });
  };

  const linksLoadAnimationMobile = () => {
    !isNavAnimationPlaying &&
      gsap.from(gsapUtilsSelector(".nav_link"), {
        duration: 0.2,
        stagger: 0.1,
        x: "100%",
        opacity: 0,
        onStart() {
          setIsNavAnimationPlaying(true);
        },
        onComplete() {
          setIsNavAnimationPlaying(false);
        },
      });
  };

  
  document.addEventListener("click", (event) => {
    if (
      !event.target.classList.contains("menu") &&
      !event.target.classList.contains("nav_wrapper")
    ) {
      document.querySelector(".nav_left").classList.add("translate-x-[200%]");
      setActiveMenu(false);
    }
  });

  return (
    <>
      <header
        className="nav_wrapper flex justify-between pt-4 container mx-auto md:items-center fixed text-white bg-black md:p-3 p-2"
        ref={navRef}
      >
        <div className="logo px-3 ">
          <a href="#home">
            <h1 className="text-2xl font-bold tracking-wider px-2 border border-red-100 rounded">
              Shivam 
            </h1>
          </a>
        </div>

        <nav className="nav_left fixed top-0 right-0 h-[100vh] pt-16 px-14 ease-in duration-300 translate-x-[200%] md:translate-x-0 md:static md:pt-0 md:px-4 md:h-auto bg-black">
          <ul className="nav_links flex flex-col gap-3 md:flex-row md:gap-5">
            {linksName.map(({ name }) => {
              return (
                <a href={`#${name}`} key={name}>
                  <li
                    className={`nav_link text-center cursor-pointer text-lg 
                  capitalize hover:text-[#FF0077]`}
                  >
                    {name}
                  </li>
                </a>
              );
            })}
          </ul>
        </nav>

        {/* Menu bar  */}
        <div
          className="menu w-10 flex flex-col justify-between items-center md:hidden relative"
          onClick={toggleMenu}
        >
          {activeMenu ? (
            <>
              <span className="menu_line h-1 w-9 bg-[#FF0077] rotate-45 absolute top-1/2 translate-y-1/2 duration-75 transition-all"></span>
              <span className="menu_line h-1 w-9 bg-[#FF0077] hidden duration-75 transition-all"></span>
              <span className="menu_line h-1 w-9 bg-[#FF0077] rotate-[-45deg] absolute top-1/2 translate-y-1/2 transli duration-75 transition-all"></span>
            </>
          ) : (
            <>
              <span className="menu_line h-1 w-9 bg-[#FF0077] duration-75 transition-all"></span>
              <span className="menu_line h-1 w-9 bg-[#FF0077] duration-75 transition-all"></span>
              <span className="menu_line h-1 w-9 bg-[#FF0077] duration-75 transition-all"></span>
            </>
          )}
        </div>
      </header>
    </>
  );
};

export default NavBar;
