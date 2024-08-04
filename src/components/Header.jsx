import React from "react";
import Logo from "../assets/logo.png";
import { motion } from "framer-motion";

function Header() {
  return (
    <header className="flex w-full px-4 py-2 absolute bg-gray-950 bg-opacity-10 items-center flex-wrap   h-12 overflow-x-hidden">
      <div className=" bg-slate-800 relative  duration-700 ease-linear  min-w-[88%]  flex flex-row gap-4 items-start justify-start  mx-auto">
        <motion.img
          // initial={{ x: 1 }}
          animate={{ left: ["0%", "100%", "0%"] }}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity,
            
          }}
          src={Logo}
          alt="logo"
          className="absolute -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </header>
  );
}

export default Header;
