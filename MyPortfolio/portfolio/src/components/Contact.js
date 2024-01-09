import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocation,
  faMailBulk,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const inputFormData = [
    {
      type: "text",
      name: "name",
      id: "name",
      placeholder: "Name",
    },
    {
      type: "email",
      name: "email",
      id: "email",
      placeholder: "Email",
    },
    {
      type: "text",
      name: "subject",
      id: "subject",
      placeholder: "Subject",
    },
  ];
  const footerData = [
    {
      icon: faLocation,
      title: "WHERE TO FIND ME",
      body: "I live in Khagaria, Bihar. ZipCode : 851214. For further details please message me on my social media accounts given above.",
    },
    {
      icon: faMailBulk,
      title: "EMAIL ME",
      body: "Hey need my help ? You can contact Me on my Email : shivamroy096@gmail.com It may take a while to reply sometimes but I will help you at any cost",
    },
    {
      icon: faPhone,
      title: "CALL ME AT",
      body: "You can contact me through my Phone No. 8935928697 .Do not hesitate to ask me for any kind of help.",
    },
  ];
  return (
    <section className="contact bg-black px-4" id="contact">
      <h3 className="font-bold tracking-wider text-[#ff0077] text-center pt-20">
        CONTACT
      </h3>
      <h1 className="text-2xl font-bold text-white text-center leading-10 py-2">
        I'd Love To Hear From You
      </h1>

      <p className="text-slate-400 px-6 max-w-xl text-center mx-auto">
        Feel free to send a comment , questions, or collaboration ideas
      </p>

      <form
        className="pb-20"
        action="https://formspree.io/f/xayrwqpa"
        method="POST"
      >
        {inputFormData.map(({ type, name, id, placeholder }) => {
          return (
            <input
              type={type}
              name={name}
              id={id}
              placeholder={placeholder}
              key={id}
              required
              autoComplete="off"
              className="outline-none block w-full pl-8 mx-auto max-w-screen-sm mb-5 py-2 bg-black border-b-2 text-gray-400"
            />
          );
        })}
        {/* Message input  */}
        <textarea
          name="message"
          id="message"
          rows="8"
          required
          placeholder="message"
          minLength={5}
          className="outline-none block w-full pl-8 mx-auto max-w-screen-sm mb-5 py-2 bg-black border-b-2 text-gray-400"
        ></textarea>

        <button
          className="bg-[#ff0077]  py-3 mb-10 text-white font-bold block mx-auto w-full max-w-sm mt-10"
          type="submit"
        >
          SUBMIT
        </button>
      </form>
      <div className="flex justify-center"></div>

      {/* Footer  */}
      <div className="grid gap-4 grid-cols-1  md:grid-cols-3 pb-10">
        {footerData.map(({ icon, title, body }) => {
          return (
            <div className="max-w-lg mx-auto py-2" key={title}>
              <FontAwesomeIcon
                icon={icon}
                className="text-[#ff0077] text-4xl text-center py-2 w-full mx-auto"
              />
              <h3 className="text-[#ff0077] text-center py-2">{title}</h3>
              <p className="text-slate-400 font-light leading-6 py-2 text-center">
                {body}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Contact;
