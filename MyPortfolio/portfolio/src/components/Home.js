import React, { useRef, useLayoutEffect } from "react";
import "./styles/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import Typed from "typed.js";

const Home = () => {
  const socialMediaIcons = [
    {
      icon: faFacebook,
      href: "https://www.facebook.com/shivam.roy.9406417",
    },
    {
      icon: faGithub,
      href: "https://github.com/shivam123-tech",
    },
    {
      icon: faInstagram,
      href: "https://www.instagram.com/shivam_roy5550/",
    },
    {
      icon: faLinkedin,
      href: "https://www.linkedin.com/in/shivam-bhardwaj-87162a205/",
    },
  ];
  // Social media load animation Effect.
  useLayoutEffect(() => {
    gsap.from(".social_icons", {
      y: 40,
      duration: 0.6,
      stagger: 0.1,
      opacity: 0,
    });
  }, []);

  // reference to the line which should be animated
  const animateText = useRef(null);
  // reference for type.js
  const typed = useRef(null);
  useLayoutEffect(() => {
    document.querySelector("#animateText_line").innerText = "";
    const options = {
      strings: ["I'am Shivam Bhardwaj", "I'am a Developer", "I'am a Student"],
      typeSpeed: 50,
      backSpeed: 50,
      showCursor: false,
      loop: true,
    };
    typed.current = new Typed(animateText.current, options);
    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <>
      <section className="intro relative text-white" id="home">
        <div className="intro_overlay absolute top-0 bottom-0 right-0 left-0 bg-black opacity-70 "></div>
        <article className="intro_content relative w-full h-full flex flex-col justify-center items-center">
          <h4 className=" text-[#FF0077] h4_intro text-xl md:text-3xl">
            HELLO, Everyone
          </h4>
          <h1
            className="h1_intro font-extrabold text-center md:text-[5rem] sm:text-5xl text-4xl md:py-5 py-3"
            id="animateText_line"
            ref={animateText}
          >
            I'm Shivam Bhardwaj.
          </h1>

          <div className="md:flex md:gap-3 pt-1 text-center md:pt-3">
            {/* left */}
            <span
              className="h5_intro  tracking-wide font-thin md:text-2xl py-0 md:py-1 text-lg block md:inline 
            intro_partition"
            >
              FRONT-END DEVELOPER
            </span>
            {/* right */}
            <span className="h5_intro  tracking-widest font-thin md:text-2xl py-1 text-lg block md:inline intro_partition  ">
              FULLSTACK-WEB DEVELOPER
            </span>
            <span className="h5_intro  tracking-widest font-thin md:text-2xl py-1 text-lg block md:inline ">
              JAVA DEVELOPER
            </span>
          </div>

          <div className="pt-10">
            <a href="#about">
              <button className="h4_intro py-3 px-6 border border-[#ffffff] rounded-md">
                MORE ABOUT ME
                <span className="mx-2">
                  <FontAwesomeIcon icon={faArrowDown} />
                </span>
              </button>
            </a>
          </div>

          {/* Links to my Social media Accounts. */}
          <div className="intro_social absolute bottom-24">
            {socialMediaIcons.map(({ icon, href }) => {
              return (
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  key={href}
                  className="social_icons inline-block"
                >
                  <FontAwesomeIcon
                    icon={icon}
                    className="hover:text-[#cc005f] text-2xl md:text-4xl px-3 cursor-pointer"
                  />
                </a>
              );
            })}
          </div>
        </article>
      </section>
    </>
  );
};

export default Home;
