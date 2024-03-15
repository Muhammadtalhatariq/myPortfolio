"use client"
import React, {useState} from "react";
import Link from "next/link";

const Header = () => {
  const navItems = [
    {
      name: "Talha",
      path: "Talha",
    },
    {
      name: "About",
      path: "About",
    },
    {
      name: "Project",
      path: "Project",
    },
    {
      name: "Skills",
      path: "Skills",
    },
    {
      name: "Contact",
      path: "Contact",
    },
  ];

 
 
  return (
   
 <div className="flex items-center justify-center m-10">
      <div className="bg-white w-96 p-2 rounded-2xl fixed">
        <ul className="flex list-none ">
          {navItems.map((item) => (
            <li className="ml-auto" key={item.name}>
              <Link  href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
       
      </div>
    </div>
   
   
  );
};

export default Header;
