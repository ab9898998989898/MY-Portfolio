import Hero from "@/components/home/Hero";
import Skills from "@/components/home/Skills";
import Projects from "@/components/home/Projects";

import Certifications from "@/components/home/Certifications";
import Contact from "@/components/home/Contact";
import Experience from "@/components/home/Experience";
import Services from "@/components/home/Services";
import About from "@/components/home/About";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Hero />
      <div className="space-y-32 pb-32">
        <About />
        <Experience />
        <Skills />
        <Services />
        <Projects />
        <Testimonials />
        <Certifications />
        <Contact />
      </div>
    </main>
  );
}
