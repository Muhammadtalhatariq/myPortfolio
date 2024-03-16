import React from "react";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const page = () => {
  return (
    <>
      <div className=" min-h-screen">
        <div className="flex flex-col flex-wrap items-center justify-center gap-6">
          <p className="font-bold text-3xl sm:text-4xl">About Me</p>
          <p className="w-72 sm:w-2/3 text-xl sm:text2xl leading-10 tracking-tight sm:text-center">
            I'm a MERN Stack Developer specializing in React, Node, Express,
            MongoDB and Tailwind. My coding wand crafts enchanting, user-focused
            web experiences, blending innovation and functionality into seamless
            interaction. Driven by a passion for the extraordinary, every line
            of code I write is a step towards redefining the ordinary.
          </p>
          <div className=" flex flex-wrap gap-3 items-center">
            <IoLogoJavascript
              className="cursor-pointer m-3 rounded-[50%] border-solid border-8 border-white hover:scale-150"
              size={50}
            />
            <FaReact
              className="cursor-pointer m-3 rounded-[50%] border-solid border-8 border-white hover:scale-150"
              size={50}
            />
            <FaNodeJs
              className="cursor-pointer m-3 rounded-[50%] border-solid border-8 border-white hover:scale-150"
              size={50}
            />
            <SiExpress
              className="cursor-pointer m-3 rounded-[50%] border-solid border-8 border-white hover:scale-150 "
              size={50}
            />
            <DiMongodb
              className="cursor-pointer m-3 rounded-[50%] border-solid border-8 border-white hover:scale-150"
              size={50}
            />
            <SiTailwindcss
              className="cursor-pointer m-3 rounded-[50%] border-solid border-8 border-white hover:scale-150"
              size={50}
            />
            <FaGithub
              className="cursor-pointer m-3 rounded-[50%] border-solid border-8 border-white hover:scale-150 "
              size={50}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
