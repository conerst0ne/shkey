import Header from "@/components/header";
import Hero from "@/components/sections/hero";
import TrustIndicators from "@/components/sections/trust-indicators";
import WalletSupport from "@/components/sections/wallet-support";
import Features from "@/components/sections/features";
import Testimonials from "@/components/sections/testimonials";
import InstallationFlow from "@/components/sections/installation-flow";
import FAQ from "@/components/sections/faq";
import FinalCTA from "@/components/sections/final-cta";
import Footer from "@/components/footer";
import WalletModal from "@/components/wallet-modal";
import DemoSection from "@/components/sections/demo-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <DemoSection />
        <TrustIndicators />
        <WalletSupport />
        <Features />
        <Testimonials />
        <InstallationFlow />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WalletModal />
    </div>
  );
}
