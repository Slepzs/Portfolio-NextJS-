"use client";
import { motion } from "framer-motion";
import BallGridAnimation from "./BallGrid";

const PageLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      whileInView={{ opacity: 0, transition: { duration: 0.5, delay: 1 } }}
      className="fixed w-screen h-screen top-0 left-0 bg-white z-[99] grid justify-center items-center"
    >
      <BallGridAnimation />
    </motion.div>
  );
};
export default PageLoader;
