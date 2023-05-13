import BallGridAnimation from "./BallGrid";

const PageLoader = () => {
  return (
    <div className="fixed w-screen h-screen top-0 left-0 bg-white z-[99] grid justify-center items-center">
      <BallGridAnimation />
    </div>
  );
};
export default PageLoader;
