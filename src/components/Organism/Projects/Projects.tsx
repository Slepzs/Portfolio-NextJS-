import Container from "../Container/Container";
import Project from "./Project";
import Soon from "./Soon";

export default function Projects() {
  return (
    <Container>
      <div className="">
        <h2 className="text-5xl text-center font-cinzel font-bold">Projects</h2>
        <div className="py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Project />
            <Soon />
            <Soon />
          </div>
        </div>
      </div>
    </Container>
  );
}
