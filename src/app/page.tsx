import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import Credentials from "@/components/Credentials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Marquee reverse />
      <Work />
      <Credentials />
      <Contact />
      <Footer />
    </main>
  );
}
