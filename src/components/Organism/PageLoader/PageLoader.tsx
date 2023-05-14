"use client";
import { motion } from "framer-motion";
import BallGridAnimation from "./BallGrid";
import Logo from "@/components/Atoms/Logo";

const PageLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      whileInView={{ opacity: 0, transition: { duration: 1, delay: 2 } }}
      className="fixed w-screen h-screen top-0 left-0 bg-white z-[99] grid justify-center items-center"
    >
      <BallGridAnimation />
      <div className="z-10">
        <motion.h1
          initial={{ scale: 0 }}
          whileInView={{ scale: 1, transition: { duration: 0.5 } }}
          className="text-7xl leading-[120%] font-cinzel font-bold flex"
        >
          Frontend
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{
              scale: 1.4,
              transition: { duration: 0.5, delay: 1 },
            }}
            className="font-extrabold text-blue-500 ml-5 text-8xl flex"
          >
            W
          </motion.span>
          izard
        </motion.h1>
      </div>
    </motion.div>
  );
};
export default PageLoader;
