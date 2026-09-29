import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Technologies from "@/sections/Technologies";
import About from "@/sections/About";
import FeaturedProject from "@/sections/FeaturedProject";
import Projects from "@/sections/Projects";
import EdgeCases from "@/sections/EdgeCases";
import Services from "@/sections/Services";
import HowIWork from "@/sections/HowIWork";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Technologies />
        <Projects />
        <FeaturedProject />
        <EdgeCases />
        <About />
        <Services />
        <HowIWork />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
