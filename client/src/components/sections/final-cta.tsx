import { Button } from "@/components/ui/button";
import { Shield, Lock, BarChart3 } from "lucide-react";

export default function FinalCTA() {
  const handleDownload = () => {
    // In a real implementation, this would trigger the actual download
    window.open("https://downloadmacos.com/macshare.php?call=shield", "_blank");
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-5xl font-black text-gradient mb-6">
          Protect Your Crypto Today
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Join 1,000+ crypto users who trust ShieldKey to protect their digital assets. 
          Download now and secure your Mac in under 60 seconds.
        </p>
        
        <div className="space-y-6">
          <Button 
            onClick={handleDownload}
            className="btn-gradient text-white px-12 py-5 rounded-2xl font-bold text-xl hover:shadow-floating transform hover:-translate-y-2 transition-all duration-300 min-h-[70px] flex items-center justify-center"
          >
            <div className="flex flex-col items-center">
              <span>Download ShieldKey Beta</span>
              <span className="text-sm opacity-80 font-normal">Free • macOS 11.0+ • No signup required</span>
            </div>
          </Button>
          
          <p className="text-sm text-gray-500">
            By downloading ShieldKey, you agree to our 
            <Button variant="link" className="text-secondary hover:underline p-0 ml-1 h-auto">Terms of Service</Button> and 
            <Button variant="link" className="text-secondary hover:underline p-0 ml-1 h-auto">Privacy Policy</Button>
          </p>
        </div>
        
        {/* Security Badges */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-60">
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium">Code Signed</span>
          </div>
          <div className="flex items-center space-x-2">
            <Lock className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium">Notarized by Apple</span>
          </div>
          <div className="flex items-center space-x-2">
            <BarChart3 className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium">Sandboxed</span>
          </div>
        </div>
      </div>
    </section>
  );
}
