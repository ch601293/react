import React from "react";
import { motion } from "framer-motion";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className=" relative w-full h-screen mx-auto">
      <div className="sm:px-16 px-6 absolute inset-0 top-[120px] mx-auto flex flex-row items-center gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-violet-500"></div>
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>
        <div>
          <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
            Hi, I'm
            <span className=" text-violet-400 "> Mr.Chen</span>
          </h1>
          <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">
            The page is built using React <br />
            and the Three.js 3D engine.
          </p>
        </div>
      </div>
      <ComputersCanvas></ComputersCanvas>
    </section>
  );
};

export default Hero;
