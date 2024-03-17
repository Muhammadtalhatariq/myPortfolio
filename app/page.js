import Image from "next/image";
import Header from "@/Components/Header/Header";
import Talha from "./Talha/page";
import About from "./About/page";
import Project from "./Project/page";
import Skills from "./Skills/page";

export default function page() {
  return (
    <>
      <Header />
      <Talha />
      <About />
  
      <Project />
      {/* <Skills /> */}
    
      
    </>
  );
}
