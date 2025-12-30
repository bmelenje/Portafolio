import Navbar from "../../components/layout/Navbar";

import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
