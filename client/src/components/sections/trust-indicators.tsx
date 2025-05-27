import { Shield, Monitor, Eye, Key, Zap } from "lucide-react";

export default function TrustIndicators() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gradient mb-4">
            Your Keys Never Leave Your Mac
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built with zero-trust architecture. ShieldKey sees nothing, stores nothing, tracks nothing. 
            True security is local security.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Security Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent/20 blur-3xl"></div>
            <div className="relative glassmorphic rounded-3xl p-8 shadow-neumorphic">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center animate-pulse-subtle">
                  <Shield className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Military-Grade Protection</h3>
                <p className="text-gray-600">Advanced cryptographic security meets Apple's Secure Enclave technology</p>
              </div>
            </div>
          </div>
          
          {/* Trust Bullets */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Monitor className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">Local First, Always</h4>
                <p className="text-gray-600">Everything stays on your device. No cloud servers, no shared data, no remote access.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">Zero Telemetry</h4>
                <p className="text-gray-600">No tracking, no analytics, no usage data sent anywhere. Your privacy is absolute.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Key className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">Seed Phrase Safe</h4>
                <p className="text-gray-600">ShieldKey never asks for, sees, or stores your seed phrases or private keys.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">Works Offline</h4>
                <p className="text-gray-600">Core protection features function perfectly without internet connection.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Social Proof Bar */}
        <div className="mt-16 glassmorphic rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold text-gradient">1,000+</div>
              <div className="text-sm text-gray-600">Early Adopters</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gradient">140+</div>
              <div className="text-sm text-gray-600">Supported Wallets</div>
            </div>
            <div className="text-center md:text-right">
              <div className="text-2xl font-bold text-gradient">99.9%</div>
              <div className="text-sm text-gray-600">Threat Detection</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
