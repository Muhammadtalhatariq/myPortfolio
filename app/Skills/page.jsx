import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNodejs } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaGithub } from "react-icons/fa";

const page = () => {
  return (
    <div className="p-10">
      <div className="flex flex-col flex-wrap items-center ">
        <p className="font-bold text-3xl sm:text-4xl">MY Skills</p>
        <div className="flex flex-wrap gap-2 sm:gap-4 pt-10 rounded-3xl justify-center  sm:w-1/2">
          <button className="flex gap-2 rounded-3xl p-4 bg-slate-200 text-lg">
            <FaHtml5 size={30} />  HTMl
          </button>
          <button className="flex gap-2 rounded-3xl p-4 bg-slate-200 text-lg">
          <FaCss3 size={30} />   CSS
          </button>
          <button className="flex gap-2 rounded-3xl p-4 bg-slate-200 text-lg">
          <IoLogoJavascript size={30} /> Javascript
          </button>
          <button className="flex gap-2 rounded-3xl p-4 bg-slate-200 text-lg">
          <FaReact  size={30}/> React
          </button>
          <button className="flex gap-2 rounded-3xl p-4 bg-slate-200 text-lg">
          <SiTailwindcss  size={30}/>   Tailwind
          </button>
          <button className="flex gap-2 rounded-3xl p-4 bg-slate-200 text-lg">
          <TbBrandNodejs  size={30}/> NodeJs
          </button>
          <button className="flex gap-2 rounded-3xl p-4 bg-slate-200 text-lg">
          <SiExpress  size={30}/> Express
          </button>
          <button className="flex gap-2 rounded-3xl p-4 bg-slate-200 text-lg">
          <DiMongodb  size={20}/> MongoDB
          </button>
          <button className="flex gap-2 rounded-3xl p-4 bg-slate-200 text-lg">
          <FaGithub size={30} /> Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
