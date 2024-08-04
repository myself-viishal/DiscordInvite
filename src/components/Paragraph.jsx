import React from "react";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

function Paragraph({variants}) {
  const baseText = `...where you can belong to a tight-knit community of classmates. A place where study groups, gaming nights, and casual hangouts are just a click away. Here, you and our +1 classmates can connect, share, and support each other every day. It's a space designed for us to collaborate, laugh, and grow together.`;

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
