"use client"
import React from 'react';
import Menu from './Menu/Menu'
import { motion } from "framer-motion"
const page = () => {
  return (
    <div >
      <motion.p
      initial={{y:-1000}}
      animate={{y:0}}
      className='font-bold text-3xl sm:text-4xl flex justify-center  pb-8' id="Project" >My Project</motion.p>
      <Menu/>
    </div>
  );
}

export default page;
