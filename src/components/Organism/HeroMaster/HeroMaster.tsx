import TextHighlighterWrapper from "@/components/Atoms/TextHighlight";
import Container from "../Container/Container";

export default function HeroMaster() {
  return (
    <>
      <div className="grid grid-cols-2 border-b-4 border-blue-500">
        <div className="p-10 border-r-4 border-blue-500 h-[calc(100vh-108px)] grid items-end">
          <div className="px-8">
            <h1 className="text-5xl ">
              <TextHighlighterWrapper text="Empowering your brand with captivating interfaces, I am your [[frontend wizard]], conjuring digital enchantment." />
            </h1>
          </div>
        </div>
        <div className="relative w-full">
          <img
            src="/Wizard.png"
            alt="hero"
            className="absolute w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
}
