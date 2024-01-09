import React from "react";
import "./styles/Project.css"; // Import your project-specific styles if needed
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils,faPizzaSlice,faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';


const Project = () => {
  const projectsData = [
    {
      icon:faUtensils,
      title: "Restaurant Website",
      description: [
        "• Designed and developed a restaurant website using HTML, CSS, and JavaScript. Successfully implemented features, enhanced menu display, advanced table booking, detailed chef profiles, and latest news articles.",
        "• Crafted a user-friendly interface with responsive design, improving navigation efficiency across various devices.",
      ],
      link: "https://shivamhoneyresturant.netlify.app/ ",
    },
    {
      icon:faPizzaSlice ,
      title: "Food Ordering Website",
      description: ["• Engineered a responsive and interactive food ordering website using HTML, CSS, and JavaScript. Executed pivotal features, including the implementation of Our Services, Our Happy Client section, and a Feedback Form.",
      "• Successfully executed pivotal features, resulting in increased client satisfaction and active engagement."
    ],
      link: "https://shivamonlinemeal.netlify.app/",
    },
    // Add more projects as needed
    {
      icon:faPlaneDeparture,
      title: "Travel Website",
      description: ["• Designed a personalized trip planning feature, enabling users to search and customize their favorite destination with activities,attractions, and accommodations .",
          "• Implemented a real-time tracking feature showcasing the number of trip plans created on the website for the current day, contributing to improved user engagement and site activity",
    ],
      link: "https://shivamtravel.netlify.app/",
    },
  ];

  return (
    <section className="projects pt-10 px-4" id="project">
      <h3 className="text-[#FF0077] font-bold tracking-widest text-center">
        PROJECTS
      </h3>
      <h2 className="text-3xl font-bold leading-10 text-white text-center py-2">
        Check Out My Projects
      </h2>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-11 pb-20">
        {projectsData.map(({ icon,title, description, link }) => (
          <div key={title} className="project_card">
            <FontAwesomeIcon
                icon={icon}
                className=" w-full mx-auto text-[#ff0077] text-3xl"
              />
            <h2 className="font-bold text-2xl text-white text-center py-3">
              {title}
            </h2>
            <div className="text-slate-400 text-justify">
              {description.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
            <div className="text-center mt-4">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff0077] hover:underline"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
