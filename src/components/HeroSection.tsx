
import SignUpButton from "./SignUpButton";
import { motion } from "framer-motion";

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className }: HeroSectionProps) => {
  return (
    <section className={`min-h-screen flex flex-col items-center justify-center px-6 ${className}`}>
      <div className="max-w-4xl mx-auto text-center z-10">
        <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white/90 text-sm mb-6 animate-fade-in">
          Streamline Your Event Planning
        </span>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight animate-fade-up">
          <span className="block">Fest.ai</span>
          <span className="text-2xl md:text-3xl lg:text-4xl font-normal mt-2 block text-white/80">
            we do <span className="text-festgold">YOU</span>
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Let AI handle your event logistics while you focus on creating memorable experiences.
        </p>
        
        <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <SignUpButton />
        </div>
        
        <p className="text-white/60 text-sm mt-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          For Streamlining fest
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
