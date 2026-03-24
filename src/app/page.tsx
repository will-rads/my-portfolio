import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import Credentials from "@/components/Credentials";
import Philosophy from "@/components/Philosophy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Services />
      <CaseStudies />
      <Philosophy />
      <Credentials />
      <Contact />
      <Footer />
    </main>
  );
}
