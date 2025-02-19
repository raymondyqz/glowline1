import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-glowline-white min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-glowline-rose/10 to-transparent" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto pt-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-glowline-navy mb-6 animate-fadeIn">
            Your 24/7 AI Receptionist
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            Never miss a booking. Let our AI handle your calls while you focus on what matters most - your clients.
          </p>
          <div className="flex justify-center space-x-4 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
            <Link
              to="#contact"
              className="bg-glowline-navy text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all flex items-center group"
            >
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link
              to="#demo"
              className="bg-white text-glowline-navy px-8 py-3 rounded-full font-medium border border-glowline-navy hover:bg-glowline-navy hover:text-white transition-all"
            >
              Listen to Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;