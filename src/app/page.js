import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { MarqueeStrip } from "@/components/sections/marquee-strip";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Education } from "@/components/sections/education";
import { Certifications } from "@/components/sections/certifications";
import { ResumeCta } from "@/components/sections/resume-cta";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MarqueeStrip />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <ResumeCta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
