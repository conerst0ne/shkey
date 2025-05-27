import { useState } from "react";
import { Shield, Lock, Filter, BarChart3, Wifi, Fingerprint, CheckCircle } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: "Real-time Wallet Protection",
      description: "Instantly blocks unauthorized access or changes to your local wallet files with advanced file system monitoring.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Lock,
      title: "Phishing & Malware Blocking",
      description: "Stops you from visiting known crypto scam sites and malicious domains with real-time threat intelligence.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Filter,
      title: "Extension Detection",
      description: "Alerts you to rogue browser extensions that could compromise your keys or inject malicious code.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: BarChart3,
      title: "System Monitoring",
      description: "Notifies you of suspicious modifications to critical macOS security settings and system files.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Wifi,
      title: "Network Threat Detection",
      description: "Monitors for connections to known malicious servers and command & control infrastructure.",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: Fingerprint,
      title: "Touch ID Integration",
      description: "Quickly secure or access wallets with biometric authentication integrated with Apple's Secure Enclave.",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gradient mb-4">
            How ShieldKey Protects You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced threat detection and prevention specifically designed for crypto users on macOS.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group glassmorphic rounded-2xl p-8 shadow-neumorphic hover:shadow-floating transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
