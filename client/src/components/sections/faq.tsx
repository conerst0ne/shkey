import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqItems = [
    {
      question: "How does ShieldKey protect my crypto wallets?",
      answer: "ShieldKey uses advanced file system monitoring to protect your wallet files from unauthorized access. It combines real-time threat detection, network monitoring, and browser extension analysis to create multiple layers of protection specifically designed for crypto users on macOS."
    },
    {
      question: "Does ShieldKey have access to my private keys or seed phrases?",
      answer: "Absolutely not. ShieldKey is built with a zero-trust architecture and never asks for, sees, or stores your private keys, seed phrases, or any sensitive crypto data. Everything runs locally on your Mac with no cloud connections for sensitive operations."
    },
    {
      question: "Which wallets does ShieldKey support?",
      answer: "ShieldKey supports 140+ wallets including MetaMask, Phantom, Rabby, Coinbase Wallet, Trust Wallet, Exodus, Ledger Live, Trezor Suite, and many more. We add support for new wallets weekly based on user requests."
    },
    {
      question: "Will ShieldKey slow down my Mac?",
      answer: "No. ShieldKey is designed to be lightweight and efficient, using minimal system resources. It runs silently in the background and only activates when threats are detected. Most users don't even notice it's running."
    },
    {
      question: "Is ShieldKey really free?",
      answer: "Yes, the beta version is completely free with no limitations. We believe crypto security should be accessible to everyone. Future versions may include premium features, but core protection will always remain free."
    },
    {
      question: "What macOS versions are supported?",
      answer: "ShieldKey supports macOS 11.0 (Big Sur) and later, including Monterey, Ventura, and Sonoma. Both Intel and Apple Silicon Macs are fully supported with native optimization for M1/M2 processors."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gradient mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about ShieldKey security.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="glassmorphic rounded-xl overflow-hidden">
              <Button
                variant="ghost"
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors h-auto"
              >
                <span className="font-semibold text-lg pr-4">{item.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 transform transition-transform duration-200 flex-shrink-0 ${
                    openItems.includes(index) ? 'rotate-180' : ''
                  }`}
                />
              </Button>
              {openItems.includes(index) && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
