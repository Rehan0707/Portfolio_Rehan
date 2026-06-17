import Background from "@/components/Background";
import Preloader from "@/components/Preloader";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import HeroBento from "@/components/HeroBento";
import Timeline from "@/components/Timeline";
import ProjectsStacked from "@/components/ProjectsStacked";
import Skills from "@/components/Skills";
import CurrentBuilding from "@/components/CurrentBuilding";
import Achievements from "@/components/Achievements";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Preloader />
      <Background />
      <ScrollProgress />
      <Navbar />
      <main id="main" className="relative">
        <HeroBento />
        <Timeline />
        <ProjectsStacked />
        
        {/* Side-by-side toolkit and now cards */}
        <section className="relative z-20 mx-auto max-w-7xl px-5 pb-20 sm:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-stretch">
            <Skills />
            <CurrentBuilding />
          </div>
        </section>

        <Achievements />

        <FAQ />

        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
