import React from "react";
import bgImg from "../assets/bg_assets/bg.png";
import Container from "../components/Container";
import star from "../assets/bg_assets/bg_stars.webp";
import star2 from "../assets/bg_assets/bg_stars4.webp";
import crown from "../assets/bg_assets/crown.webp";
import wave from "../assets/wave.svg";

import { motion } from "framer-motion";
import Paragraph from "../components/Paragraph";

const gridContainerVarients = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.25 } },
};
const gridBoxVarients = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

function Home() {
  return (
    <div className="w-full relative h-screen">
      <div className="fixed bottom-0 left-0 w-full z-10  ">
        <img
          src={bgImg}
          alt=""
          srcset=""
          className=" w-full h-full object-center object-cover"
        />
      </div>

      <motion.div
        animate={{ opacity: [1, 0, 1] }}
        transition={{
          duration: 3,
          delay: 1,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="fixed bottom-0 left-0 w-full  "
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
        className="fixed bottom-0 left-0 w-full  "
      >
        <img
          src={star2}
          alt=""
          srcset=""
          className=" w-full h-full object-center object-cover "
        />
      </motion.div>
      <div className=" top-0 left-0 w-full fixed  ">
        <motion.img
          animate={{
            rotate: [1, 90, 180, 60, 1],
            x: [1, 90, 180, 60, 1],
            y: [1, 90, 180, 60, 1],
            z: [1, 90, 180, 60, 1],
            scale: [1.5, 1.5, 2, 1.5, 1.5],
          }}
          transition={{
            duration: 60,
            delay: 0.4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1,
          }}
          src={crown}
          alt=""
          srcset=""
          className=" w-20   object-center object-cover "
        />
      </div>
      <Container
        classname={
          "flex items-center h-full justify-center z-50 relative flex-col min-h-screen   "
        }
      >
        <motion.div
          variants={gridContainerVarients}
          initial="hidden"
          animate="show"
          className="lg:w-3/5 md:w-full sm:w-full flex flex-col items-center justify-center gap-4 p-20 py-40 "
        >
          <motion.h1
            variants={gridBoxVarients}
            className="font-sans font-normal lg:text-4xl md:text-4xl sm:text-4xl text-6xl text-white uppercase text-center"
          >
            {" "}
            imagine a place
          </motion.h1>
          <Paragraph variants={gridBoxVarients} />
          <motion.a
            href="https://discord.gg/mHr7xrw6"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 1 }}
            variants={gridBoxVarients}
            className="px-6 duration-300 py-4 bg-secondry border-1  border-transparent hover:border-sky-950 shadow-2xl hover:bg-slate-950  font-mono font-semibold text-lg rounded-full text-slate-900 hover:text-secondry cursor-pointer"
          >
            Join DIscord
          </motion.a>
        </motion.div>
      </Container>

      <div className="z-50 relative bg-white ">
        <div className="w-full -translate-y-6   h-10  bg-gradient-to-t from-white to-transparent "></div>
        <Container classname={``}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere totam
          voluptatibus perferendis! Eum maxime delectus, ipsam consequatur
          aperiam labore, velit eius error, omnis repudiandae quaerat
          perferendis non eveniet officia architecto! Nesciunt sunt quo, dolorum
          suscipit perferendis sed error tenetur quia aliquid? Qui quisquam
          excepturi voluptates maxime laborum deserunt cumque, porro temporibus
          error id suscipit eaque? Neque impedit nesciunt, ab unde tempore sit
          quibusdam ullam alias deleniti repellendus maiores, cupiditate totam
          tenetur placeat cum quidem quam eaque, quaerat quos accusantium
          repudiandae. Adipisci mollitia facere iste aut. Fugit voluptatum
          libero provident dignissimos accusamus delectus, ut quos, iusto, illum
          officia tempore eligendi obcaecati? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Ea consequuntur totam autem, laborum
          sed cumque quaerat odio. Consequuntur aliquid sequi ab eligendi
          voluptas sit, quis perferendis, tempore vel eos soluta libero
          necessitatibus, magni mollitia. Ducimus deserunt esse officia et optio
          ex! Nesciunt officia quisquam non deserunt accusantium omnis in
          placeat minima accusamus tempore deleniti, incidunt voluptas libero
          dolorem, expedita eum explicabo ducimus molestiae. Dolor beatae
          laborum impedit tenetur quibusdam distinctio deserunt quis, velit
          nihil perspiciatis. Quaerat doloremque facilis magni similique
          cupiditate officiis aspernatur exercitationem debitis ea cumque
          impedit alias nemo dolor dicta unde dolorem, dignissimos perferendis.
          Quibusdam eaque excepturi adipisci!
        </Container>
      </div>
    </div>
  );
}

export default Home;
