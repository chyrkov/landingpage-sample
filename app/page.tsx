import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import ProblemStakes from "@/components/ProblemStakes";
import ValueProposition from "@/components/ValueProposition";
import Services from "@/components/Services";
import WhyYou from "@/components/WhyYou";
import IndustrySections from "@/components/IndustrySections";
import ProofOutcomes from "@/components/ProofOutcomes";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <SocialProof />
      <ProblemStakes />
      <ValueProposition />
      <Services />
      <WhyYou />
      <IndustrySections />
      <ProofOutcomes />
      <Process />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
