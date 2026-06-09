import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Achievements />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
