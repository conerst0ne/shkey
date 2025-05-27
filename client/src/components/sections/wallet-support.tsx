import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Zap } from "lucide-react";

export default function WalletSupport() {
  const [hoveredWallet, setHoveredWallet] = useState<number | null>(null);
  const [protectedCount, setProtectedCount] = useState(1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setProtectedCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const walletIcons = [
    { name: "MetaMask", initial: "M", color: "from-orange-500 to-orange-600", users: "2.5M+" },
    { name: "Phantom", initial: "P", color: "from-purple-500 to-purple-600", users: "1.8M+" },
    { name: "Rabby", initial: "R", color: "from-blue-500 to-blue-600", users: "800K+" },
    { name: "Coinbase", initial: "C", color: "from-blue-600 to-blue-700", users: "3.2M+" },
    { name: "Trust", initial: "T", color: "from-blue-400 to-blue-500", users: "1.2M+" },
    { name: "Ledger", initial: "L", color: "from-black to-gray-800", users: "900K+" },
    { name: "Exodus", initial: "E", color: "from-green-500 to-green-600", users: "1.5M+" },
    { name: "Atomic", initial: "A", color: "from-red-500 to-red-600", users: "600K+" },
  ];

  const handleViewAllWallets = () => {
    const modal = document.getElementById('wallet-modal');
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }
  };

  return (
    <section id="wallets" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-black text-gradient mb-4">
          Supports All Major Wallets
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          MetaMask, Phantom, Rabby, Coinbase Wallet, Trust Wallet, and 135+ more. 
          Complete protection for your entire crypto ecosystem.
        </p>
        
        {/* Interactive Wallet Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {walletIcons.map((wallet, index) => (
            <div 
              key={index}
              className={`relative glassmorphic rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-floating hover:-translate-y-2 ${
                hoveredWallet === index ? 'ring-2 ring-secondary' : ''
              }`}
              onMouseEnter={() => setHoveredWallet(index)}
              onMouseLeave={() => setHoveredWallet(null)}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${wallet.color} rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform ${
                hoveredWallet === index ? 'scale-110' : ''
              }`}>
                <span className="text-2xl text-white font-bold">{wallet.initial}</span>
              </div>
              <h3 className="font-semibold text-center mb-1">{wallet.name}</h3>
              <p className="text-sm text-gray-500 text-center">{wallet.users} users</p>
              
              {hoveredWallet === index && (
                <div className="absolute inset-0 bg-secondary bg-opacity-5 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Zap className="w-6 h-6 text-secondary mx-auto mb-2" />
                    <p className="text-sm font-medium text-secondary">Protected</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Live Protection Counter */}
        <div className="glassmorphic rounded-2xl p-6 max-w-md mx-auto mb-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-600">Live Protection Active</span>
            </div>
            <div className="text-3xl font-bold text-gradient mb-1">
              {protectedCount.toLocaleString()}+
            </div>
            <p className="text-sm text-gray-600">Wallets Protected Today</p>
          </div>
        </div>
        
        <p className="text-gray-600 mt-8">
          More wallets added weekly. 
          <Button 
            variant="link" 
            onClick={handleViewAllWallets}
            className="text-secondary font-semibold hover:underline p-0 ml-1 h-auto"
          >
            View complete list →
          </Button>
        </p>
      </div>
    </section>
  );
}
