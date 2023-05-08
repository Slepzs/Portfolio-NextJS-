import Image from "next/image";

export default function Project() {
  return (
    <div className="border border-gray-200 rounded-md  h-[500px]">
      <div className="border-b border-gray bg-gray-100 p-4 grid justify-center">
        <Image src="/hero.png" width="300" height="300" alt="hero" />
      </div>
      <div className="p-4">
        <h3 className="text-2xl font-cinzel mb-4">Portfolio</h3>
        <p className="text-gray-500">
          My new portfolio built with Next.js, TailwindCSS and TypeScript
        </p>
      </div>
    </div>
  );
}
