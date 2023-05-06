type Props = {
  size: "sm" | "md" | "lg";
};

export default function Logo(props: Props) {
  switch (props.size) {
    case "sm":
      return (
        <span className="text-1xl leading-[120%] font-cinzel font-bold">
          Frontend
          <span className="font-extrabold text-blue-500 ml-2">W</span>
          izard
        </span>
      );
    default:
      return (
        <h1 className="text-7xl leading-[120%] font-cinzel font-bold">
          Frontend
          <span className="font-extrabold text-blue-500 ml-5 text-8xl">W</span>
          izard
        </h1>
      );
  }
}
