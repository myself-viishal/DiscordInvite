import React from "react";
import bgImg from "../assets/bg_assets/bg.png";
import crown from "../assets/bg_assets/crown.webp";

function Background() {
  return (
    <div className="w-full h-screen min-w-full min-h-full relative ">
      <img
        src={bgImg}
        alt=""
        srcset=""
        className="w-full h-full object-center object-cover"
      />

      <img
        src={crown}
        alt=""
        srcset=""
        className="absolute top-0 aspect-square object-contain object-center"
      />
    </div>
  );
}

export default Background;
