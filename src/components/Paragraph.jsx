import React from "react";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

function Paragraph({variants}) {
  const baseText = `...where you can belong to a school club, a gaming group, or a worldwide
        art community. Where just you and a handful of friends can spend time
        together. A place that makes it easy to talk every day and hang out more
        often.`;

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );
  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      duration: 3,
      ease: "easeInOut",
    });
    return controls.stop;
  }, []);
  return (
    <div>
      <motion.p
        variants={variants}
        className="text-base text-white text-center"
      >
        {displayText}
      </motion.p>
    </div>
  );
}

export default Paragraph;
