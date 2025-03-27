
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled
          ? "bg-festdark/80 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-white font-bold text-xl">
          <span className="bg-gradient-to-r from-white to-festgold bg-clip-text text-transparent">Fest.ai</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-white/80 hover:text-white transition-colors duration-200">Features</a>
          <a href="#contact" className="text-white/80 hover:text-white transition-colors duration-200">Contact</a>
          <Link to="/profile" className="text-white/80 hover:text-white transition-colors duration-200">Profile</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
