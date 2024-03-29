"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
const Header = () => {
  const navItems = [
    {
      name: "Talha",
      path: "#Talha",
    },
    {
      name: "About",
      path: "#About",
    },
    {
      name: "Project",
      path: "#Project",
    },
    {
      name: "Skills",
      path: "#Skills",
    },
    {
      name: "Contact",
      path: "#Contact",
    },
  ];

  return (
    <motion.div
    initial={{x:-1000}}
    animate={{x:0}}
    className="flex items-center justify-center m-10">
      <div className="bg-white w-96 p-2 rounded-2xl fixed">
        <ul className="flex list-none">
          {navItems.map((item) => (
            <li className="ml-auto" key={item.path}>
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Header;
