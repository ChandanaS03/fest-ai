
import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

const Index = () => {
  const heroBackgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax effect for hero background
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroBackgroundRef.current) return;
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      heroBackgroundRef.current.style.transform = `translate(${x * -20}px, ${y * -20}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      
      {/* Hero section with subtle gradient background */}
      <div className="relative bg-festdark">
        <div 
          ref={heroBackgroundRef}
          className="absolute inset-0 z-0 opacity-40 transition-transform duration-700 ease-out"
          style={{
            background: "radial-gradient(circle at 20% 20%, rgba(130, 110, 72, 0.8) 0%, rgba(26, 26, 26, 0) 50%)"
          }}
        />
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: "radial-gradient(circle at 80% 80%, rgba(130, 110, 72, 0.4) 0%, rgba(26, 26, 26, 0) 60%)"
          }}
        />
        
        <div className="absolute inset-0 z-0 bg-noise opacity-10" 
          style={{ 
            backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')" 
          }}
        />
        
        <HeroSection />
      </div>
      
      <FeaturesSection />
      
      <Footer />
    </div>
  );
};

export default Index;
