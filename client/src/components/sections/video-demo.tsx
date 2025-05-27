import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2, Maximize } from "lucide-react";
import heroGif from "@assets/hero.gif";

export default function VideoDemo() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="demo-video" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gradient mb-4">
            See ShieldKey in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how ShieldKey protects your crypto in real-time. From setup to threat detection, 
            see why thousands trust us to secure their digital assets.
          </p>
        </div>
        
        {/* Video Player */}
        <div className="relative glassmorphic rounded-3xl overflow-hidden shadow-floating max-w-4xl mx-auto">
          <div className="aspect-video relative bg-gray-900">
            {/* Video/GIF Content */}
            <div className="absolute inset-0">
              <img 
                src={heroGif} 
                alt="ShieldKey Demo"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Video Controls Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group hover:bg-opacity-20 transition-all duration-300">
              <Button
                onClick={handlePlayPause}
                className="w-20 h-20 rounded-full bg-white bg-opacity-90 hover:bg-opacity-100 text-primary shadow-lg transform group-hover:scale-110 transition-all duration-300"
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8 ml-1" />
                ) : (
                  <Play className="w-8 h-8 ml-1" />
                )}
              </Button>
            </div>
            
            {/* Video Controls Bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center space-x-4">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-white hover:bg-white hover:bg-opacity-20"
                  >
                    <Volume2 className="w-5 h-5" />
                  </Button>
                  <span className="text-sm">2:34 / 4:12</span>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-white hover:bg-white hover:bg-opacity-20"
                >
                  <Maximize className="w-5 h-5" />
                </Button>
              </div>
              
              {/* Progress Bar */}
              <div className="mt-2 w-full bg-white bg-opacity-30 rounded-full h-1">
                <div className="bg-accent h-1 rounded-full w-1/3 transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Demo Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🛡️</span>
            </div>
            <h3 className="text-lg font-bold mb-2">Real-time Protection</h3>
            <p className="text-gray-600">Watch ShieldKey detect and block threats as they happen</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-lg font-bold mb-2">Lightning Fast</h3>
            <p className="text-gray-600">Zero performance impact on your Mac's daily operations</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-lg font-bold mb-2">Smart Detection</h3>
            <p className="text-gray-600">AI-powered threat analysis built for crypto security</p>
          </div>
        </div>
      </div>
    </section>
  );
}