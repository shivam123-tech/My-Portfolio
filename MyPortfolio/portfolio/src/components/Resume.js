import React from "react";
import "./styles/Resume.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const Resume = () => {
  const workExperienceData = [
    {
      title: "Bachelor Degree",
      duration: "Aug 2020 - Now",
      subTitle: "Computer Science",
      body:"Right now I am doing my B.tech in computer science and engineering from Lovely Professional University, Punjab and learning new things every day. Current CGPA: 7.51 "
    },
    {
      title: "InterMediate",
      duration: "July 2017 - 2019",
      subTitle: "PCM",
      body: "I completed my 12th  standard from Holy Mission Sr. Sec School , Muzaffarpur , Bihar in the year 2019 and secured 74%",
    },
    {
      title: "SSC",
      duration: "July 2017",
      subTitle: "School",
      body: "I completed my 10th  standard from St. Judes Vidalaya, Barauni ,Bihar in year 2017 and my CGPA was 8.0",
    },
  ];
  return (
    <section className="resume pt-6 px-4 md:px-10" id="resume">
      <h1 className="tracking-wider font-bold text-3xl mb-3 text-center">
        More of my credentials
      </h1>
      <h4 className="tracking-widest text-[#FF0077] font-bold text-center mb-3 text-3xl">
        Education
      </h4>
      <div className="bg-[#ebebeb] py-16 overflow-hidden mb-10">
        <div className="resume_education_container h-auto relative ">
          {workExperienceData.map(({ title, duration, subTitle, body }) => {
            return (
              <article
                className="pl-16 pr-2 relative lg:flex lg:justify-between"
                key={title}
              >
                <div className="left_side py-2 text-left pb-4   mr-auto lg:mr-0 md:w-[30%] max-w-[300px]">
                  <h3 className="text-xl font-bold tracking-wider">{title}</h3>
                  <p className="opacity-80 font-light tracking-wide">
                    {duration}
                  </p>
                  <FontAwesomeIcon
                    icon={faGraduationCap}
                    className="text-lg px-3 py-4 bg-black text-white rounded-full absolute left-0 cap_icon "
                  />
                </div>
                <div className="w-14 h-1 bg-slate-300 lg:hidden"></div>
                <div className="right_side text-left pt-3 pb-10 md:w-[75%]">
                  <h3 className="text-xl font-bold tracking-wider lg:mb-5">
                    {subTitle}
                  </h3>
                  <p className=" font-light tracking-wide opacity-80 lg:pr-11 text-justify pr-4">
                    {body}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Resume;
