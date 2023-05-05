import Container from "../Container/Container";
import Project from "./Project";

export default function Projects() {
  return (
    <Container>
      <div className="">
        <h2 className="text-5xl">Collection of my projects</h2>
        <div className="py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Project />
            <Project />
            <Project />
          </div>
        </div>
      </div>
    </Container>
  );
}
