import React from "react";
import Image from "next/image";
import logo from "../../public/logo.jpg";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";

const page = () => {
  return (
    <div className="m-6 mt-16">
      <div className="flex flex-col flex-wrap items-center justify-center gap-6">
        <Image
          className="rounded-[50%] items-center justify-center flex border-solid border-8 border-white "
          src={logo}
          width={150}
          height={150}
          alt="logo"
        />
        <p className="font-bold text-2xl sm:text-4xl">
          Muhammad <strong className="text-green-700">Talha</strong>
        </p>

        <p className="  text-red-900 text-2xl sm:text-4xl ">
          MERN Stack Developer.
        </p>

        <p className="px-3 text-center text-xl">
          Passionate coder redefining ordinary with innovative code.
        </p>
        <p className="px-3 text-center text-xl items-center ">
          My main stack includes React, Node.js, Express.js, MongoDB, Tailwind
          and among other key technologies.
        </p>
        <div className=" flex flex-wrap justify-center">
          <Stack spacing={2} direction={"row"}>
            <Button className="text-black gap-5" variant="contained">
              Downlord CV
              <HiOutlineDownload size={20} />
            </Button>
            <Button className="gap-5" variant="outlined">
              Contact me here
              <FaArrowRight size={20} />
            </Button>
          </Stack>

          <FaLinkedin
            className="cursor-pointer m-3 rounded-[50%] border-solid border-8 border-white hover:scale-125"
            size={50}
          />
          <FaGithub
            className="cursor-pointer m-3 rounded-[50%]  border-solid border-8 border-white  hover:scale-125"
            size={50}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
