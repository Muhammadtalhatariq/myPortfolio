"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const page = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r9juise",
        "template_57rdqrp",
        form.current,
        "o7hb0h-ldQpKt_uGV"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="pt-10 " id="Contact">
      <div className="flex flex-wrap  ">
        <div className="sm:w-[55%] p-4 m-auto">
          <p className="font-bold text-3xl sm:text-4xl p-2 text-center sm:text-start ">
            Contacts Me
          </p>
          <p className="text-center  sm:text-start text-xl sm:text2xl leading-10 tracking-tight">
            Currently, I am looking for new opportunities to apply my skills and
            experience in different domains. My inbox is always open for any
            inquiries, feedback, or collaboration requests. You can reach me at
            my email address or follow me on my social media accounts. I would
            love to hear from you and explore new possibilities together.
          </p>
          <div className="flex justify-center sm:justify-start">
            <a
              href="https://www.linkedin.com/in/muhammad-talha-708166284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              className="cursor-pointer m-3 rounded-[50%] border-solid border-8 border-white hover:scale-125"
            >
              <FaLinkedin size={30} />
            </a>

            <a
              href="https://github.com/Muhammadtalhatariq/"
              target="_blank"
              className="cursor-pointer m-3 rounded-[50%] border-solid border-8 border-white hover:scale-125"
            >
              <FaGithub size={30} />
            </a>
          </div>
        </div>

        <div className="sm:w-[45%] w-full  px-4 sm:pt-32">
          <form
            className="flex flex-col gap-4 p-4 "
            ref={form}
            onSubmit={sendEmail}
          >
            <label>Name</label>
            <input
              className="p-2 border-gray-300 border-dotted border-4"
              type="text"
              name="user_name"
            />
            <label>Email</label>
            <input
              className="p-2 border-gray-300 border-dotted border-4"
              type="email"
              name="user_email"
            />
            <label>Message</label>
            <textarea
              className="p-2 border-gray-300 border-dotted border-4"
              name="message"
            />
            <input
              className=" bg-gray-200 items-center w-24 hover:bg-slate-400 rounded-lg p-2"
              type="submit"
              value="Send"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
