import React from "react";
import star from "../assets/bg_assets/bg_stars.webp";
import star2 from "../assets/bg_assets/bg_stars4.webp";
import bannerImg from "../assets/discordBanner.webp";
import sheep from "../assets/sheepProp.webp";
import leaf from "../assets/leafCap.webp";
import robot from "../assets/robotProp.svg";
import { motion } from "framer-motion";

function Banner() {
  return (
    <div className="bg-primary relative z-10 pt-6 flex flex-col items-center justify-center">
      <div className=" sm:translate-y-0 md:translate-y-20 lg:translate-y-20 xl:translate-y-20 w-full flex items-center flex-col ">
        <h1 className="font-serif font-bold text-white uppercase w-3/4 sm:text-sm md:text-4xl lg:text-4xl xl:text-6xl text-center">
          {" "}
          YOU CAN'T SCROLL ANYMORE. BETTER GO CHAT.
        </h1>
        <a
          href="https://discord.gg/mHr7xrw6"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 1 }}
          className="px-6 duration-300 py-4 my-6 bg-secondry border-1  border-transparent hover:border-sky-950 shadow-2xl hover:bg-slate-950  font-mono font-semibold text-lg rounded-full text-slate-900 hover:text-secondry cursor-pointer z-30"
        >
          Join DIscord
        </a>
      </div>
      <div className="relative  w-full z-10  ">
        <img
          src={bannerImg}
          alt=""
          srcset=""
          className=" w-full  object-center object-contain"
        />
        {/* SHeep prop */}
        <img
          src={sheep}
          alt=""
          srcset=""
          className="absolute w-[10%] bottom-0 left-[48%] -translate-x-1/2  object-center object-contain"
        />

        {/* leaf prop */}
        <motion.img
          animate={{
            rotateZ: [1, 3, 1],
            rotateX: [1, 3, 1],
            rotateY: [1, 3, 1],
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          src={leaf}
          alt=""
          srcset=""
          className="absolute w-[3%] bottom-1/2 left-[46%] -translate-x-1/2  object-center object-contain"
        />
        {/* robot prop */}
        <motion.img
          animate={{
            rotateZ: [1, 3, 1],
            rotateX: [1, 3, 1],
            rotateY: [1, 3, 1],
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          src={robot}
          alt=""
          srcset=""
          className="absolute w-[10%] bottom-1/2 left-[74%] -translate-x-1/2  object-center object-contain"
        />
      </div>
      <div>
        <motion.div
          animate={{ opacity: [1, 0, 1] }}
          transition={{
            duration: 3,
            delay: 1,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="absolute bottom-0 left-0 w-full  "
        >
          <img
            src={star}
            alt=""
            srcset=""
            className=" w-full h-full object-center object-cover "
          />
        </motion.div>
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 3,
            delay: 1,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="absolute bottom-0 left-0 w-full  "
        >
          <img
            src={star2}
            alt=""
            srcset=""
            className=" w-full h-full object-center object-cover "
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Banner;
