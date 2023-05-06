import TextHighlighterWrapper from "@/components/Atoms/TextHighlight";
import Container from "../Container/Container";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroMaster() {
  return (
    <>
      <div className="grid xl:grid-cols-2 border-b-4 border-blue-500">
        <div className="xl:h-[calc(100vh-108px)] grid items-center justify-center">
          <div className="px-8 max-w-[800px]">
            <h1 className="md:text-5xl xl:text-7xl leading-[120%] font-cinzel font-bold">
              Frontend
              <span className="font-extrabold text-blue-500 ml-5 text-8xl">
                W
              </span>
              izard
            </h1>
            <span className="uppercase">conjuring digital enchantment.</span>
          </div>
        </div>
        <div className="relative w-full p-20 grid items-center">
          <Image
            src="/hero.png"
            width={2000}
            height={2000}
            alt="hero"
            className=""
          />
        </div>
      </div>
    </>
  );
}
