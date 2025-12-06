import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Workflow from "@/components/sections/Workflow";
import TargetAudience from "@/components/sections/TargetAudience";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Workflow />
        <TargetAudience />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
