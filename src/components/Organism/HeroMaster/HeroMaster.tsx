import TextHighlighterWrapper from "@/components/Atoms/TextHighlight";
import Container from "../Container/Container";

export default function HeroMaster() {
  return (
    <>
      <div className="grid grid-cols-2 border-b-4 border-blue-500">
        <div className="h-[calc(100vh-108px)] grid items-center justify-end">
          <div className="max-w-[800px]">
            <h1 className="text-7xl leading-[120%] font-cinzel font-bold">
              Frontend <span className="font-extrabold text-blue-500">W</span>
              izard
            </h1>
            <span className="uppercase">conjuring digital enchantment.</span>
          </div>
        </div>
        <div className="relative w-full p-20 grid items-center">
          <img src="/hero.png" alt="hero" className="" />
        </div>
      </div>
    </>
  );
}
