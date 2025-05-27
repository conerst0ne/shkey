export default function Testimonials() {
  const testimonials = [
    {
      name: "Alex Chen",
      role: "DeFi Trader",
      content: "Finally, a security solution built specifically for crypto on Mac. ShieldKey caught a malicious extension that could have drained my MetaMask wallet.",
      initial: "A",
      color: "from-blue-500 to-purple-600"
    },
    {
      name: "Sarah Kim",
      role: "NFT Artist",
      content: "As an artist selling NFTs, I needed something to protect my digital assets. ShieldKey runs silently in the background and gives me peace of mind.",
      initial: "S",
      color: "from-green-500 to-teal-600"
    },
    {
      name: "Marcus Johnson",
      role: "Blockchain Developer",
      content: "The local-first approach is brilliant. No cloud dependencies, no privacy concerns. It's exactly what the crypto community needs.",
      initial: "M",
      color: "from-purple-500 to-pink-600"
    },
    {
      name: "Lisa Rodriguez",
      role: "Crypto Investor",
      content: "I've tried multiple security solutions, but ShieldKey is the first one that doesn't slow down my Mac or interfere with my workflow.",
      initial: "L",
      color: "from-red-500 to-orange-600"
    },
    {
      name: "David Park",
      role: "Security Researcher",
      content: "From a security perspective, ShieldKey's architecture is impressive. Zero-trust, local-first, and properly sandboxed. This is how it should be done.",
      initial: "D",
      color: "from-indigo-500 to-blue-600"
    },
    {
      name: "Jenny Liu",
      role: "DAO Contributor",
      content: "The real-time protection is amazing. ShieldKey blocked a phishing site that looked identical to Uniswap. Could have lost everything.",
      initial: "J",
      color: "from-teal-500 to-green-600"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gradient mb-4">
            Trusted by Crypto Users Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what early adopters are saying about their experience with ShieldKey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glassmorphic rounded-2xl p-8 shadow-neumorphic">
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                  {testimonial.initial}
                </div>
                <div className="ml-3">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "{testimonial.content}"
              </p>
              <div className="flex text-yellow-400">
                ★★★★★
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
