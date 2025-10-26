import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Quiz from "@/components/Quiz";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import ParticlesBackground from "@/components/ParticlesBackground";

const Index = () => {
  return (
    <SmoothScroll>
      <div className="min-h-screen relative">
        <ParticlesBackground />
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <Services />
            <Quiz />
            <Process />
            <Pricing />
            <Testimonials />
            <CTA />
          </main>
          <Footer />
        </div>
      </div>
    </SmoothScroll>
  );
};

export default Index;
