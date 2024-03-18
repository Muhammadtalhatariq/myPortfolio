import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

const page = () => {
  return (
    <div className="py-10">
      <div className="flex flex-wrap  ">
        <div className="sm:w-[55%] p-4 m-auto">
          <p className="font-bold text-3xl sm:text-4xl p-2 text-center sm:text-start ">Contacts Me</p>
          <p className="text-center  sm:text-start text-xl sm:text2xl leading-10 tracking-tight">
            Currently, I am looking for new opportunities to apply my skills and
            experience in different domains. My inbox is always open for any
            inquiries, feedback, or collaboration requests. You can reach me at
            my email address or follow me on my social media accounts. I would
            love to hear from you and explore new possibilities together.
          </p>
          <div className="flex justify-center sm:justify-start">
            <FaLinkedin
              className="cursor-pointer m-2 rounded-[50%] border-solid border-8 border-white hover:scale-125"
              size={40}
            />
            <FaGithub
              className="cursor-pointer m-2 rounded-[50%]  border-solid border-8 border-white  hover:scale-125"
              size={40}
            />
          </div>
        </div>

        <div className="sm:w-[45%] w-full  px-2 sm:py-16">
          <form className="flex flex-col gap-4 p-4" action="">
            <input
              className="p-2 border-gray-300 border-dotted border-4"
              placeholder="Enter Your G-mail"
              type="text"
            />
            <input
              className="p-2 border-gray-300 border-dotted border-4"
              placeholder="Enter Your Message"
              type="text-area"
              value=""
            />
            <button
              className=" flex gap-2 bg-gray-200 items-center w-24 hover:bg-slate-400 rounded-lg px-2"
              type="button"
            >
              Submit <IoIosSend size={40} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
