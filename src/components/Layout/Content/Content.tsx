import HeroMaster from "@/components/Organism/HeroMaster/HeroMaster";
import Projects from "@/components/Organism/Projects/Projects";
import { Fragment } from "react";

export default function Content() {
  return (
    <Fragment>
      <HeroMaster />
      <Projects />
    </Fragment>
  );
}
