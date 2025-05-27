import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function WalletModal() {
  const closeModal = () => {
    const modal = document.getElementById('wallet-modal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const wallets = [
    "MetaMask", "Phantom", "Rabby", "Coinbase Wallet", "Trust Wallet", "Exodus",
    "Ledger Live", "Trezor Suite", "Atomic Wallet", "Electrum", "BlueWallet",
    "BitPay", "MyEtherWallet", "Frame", "XDEFI", "Keplr", "Terra Station",
    "Solflare", "Slope", "Backpack", "Glow", "Sollet", "MathWallet",
    "TokenPocket", "SafePal", "Coin98", "1inch Wallet", "Alpha Wallet",
    "Rainbow", "Zerion", "DeFi Wallet", "Pillar", "Argent", "Gnosis Safe",
    "WalletConnect", "Portis", "Fortmatic", "Authereum", "Bitski", "Torus",
    "Squarelink", "Arkane", "Venly", "Sequence", "Magic", "Web3Auth",
    "Unstoppable Domains", "ENS", "Brave Wallet", "Opera Wallet", "Edge Wallet",
    "Guarda", "Jaxx Liberty", "Coinomi", "BRD", "Bread", "Copay", "BitGo",
    "Casa", "Unchained Capital", "Specter Desktop", "Sparrow", "Wasabi",
    "Samourai", "Green", "Phoenix", "Eclair", "Zap", "Lightning Labs",
    "Blue Wallet Lightning", "Breez", "Muun", "Wallet of Satoshi", "Bitrefill",
    "Strike", "Cash App", "Square", "PayPal", "Venmo", "Revolut", "Robinhood",
    "eToro", "Binance", "Coinbase", "Kraken", "Gemini", "Bitstamp", "Bittrex",
    "Poloniex", "KuCoin", "Huobi", "OKEx", "Gate.io", "Bitfinex", "Bybit",
    "FTX", "Crypto.com", "Celsius", "BlockFi", "Nexo", "Compound", "Aave",
    "Uniswap", "SushiSwap", "PancakeSwap", "Curve", "Balancer", "1inch",
    "Kyber", "0x", "Bancor", "Loopring", "dYdX", "Synthetix", "Yearn",
    "Harvest", "Badger", "Pickle", "Alpha Homora", "Cream", "Venus",
    "JustSwap", "SunSwap", "MDEX", "QuickSwap", "SpookySwap", "TraderJoe",
    "Pangolin", "Honeyswap", "Beefy", "Autofarm", "PancakeBunny", "Belt",
    "Alpaca", "Tulip", "Raydium", "Orca", "Saber", "Mercurial", "Quarry",
    "Sunny", "Port Finance", "Mango", "Serum", "Jupiter", "Step Finance",
    "Francium", "Larix", "Apricot", "Jet Protocol", "Parrot", "Oxygen",
    "Drift", "Zeta", "Katana", "01 Protocol", "Crema Finance", "Cropper"
  ];

  return (
    <div 
      id="wallet-modal" 
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm hidden items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <div className="glassmorphic rounded-3xl p-8 max-w-4xl w-full mx-4 max-h-[80vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gradient">Supported Wallets (140+)</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={closeModal}
            className="text-gray-400 hover:text-gray-600 transition-colors p-2"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {wallets.map((wallet, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                {wallet.charAt(0)}
              </div>
              <span className="font-medium text-sm">{wallet}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            More wallets added weekly. Missing your wallet? 
            <Button variant="link" className="text-secondary font-semibold p-0 ml-1 h-auto">
              Request support
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
}
