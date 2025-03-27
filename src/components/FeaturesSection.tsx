
import { useEffect, useRef } from "react";
import FeatureCard from "./FeatureCard";
import { ClipboardList, Image, BarChart3, Layout } from "lucide-react";

const FeaturesSection = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-scale-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = featuresRef.current?.querySelectorAll(".feature-card");
    cards?.forEach((card) => {
      card.classList.remove("animate-scale-in");
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="features" className="py-20 px-6 bg-festdark">
      <div className="max-w-7xl mx-auto" ref={featuresRef}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            title="Smart Task Allocation" 
            variant="primary"
            className="aspect-square flex flex-col items-center justify-center text-center opacity-0"
            style={{ animationDelay: "0.1s" }}
          >
            <ClipboardList className="h-12 w-12 text-festdark mb-4" />
            <p className="text-sm text-festdark/70">
              AI-powered task assignment based on team strengths and availability.
            </p>
          </FeatureCard>
          
          <FeatureCard 
            title="AI Photo Finder" 
            variant="secondary"
            className="aspect-square flex flex-col items-center justify-center text-center opacity-0"
            style={{ animationDelay: "0.2s" }}
          >
            <Image className="h-12 w-12 text-festdark mb-4" />
            <p className="text-sm text-festdark/70">
              Instantly locate and organize event photos with AI image recognition.
            </p>
          </FeatureCard>
          
          <FeatureCard 
            title="Event Report Generation" 
            variant="tertiary"
            className="aspect-square flex flex-col items-center justify-center text-center opacity-0"
            style={{ animationDelay: "0.3s" }}
          >
            <BarChart3 className="h-12 w-12 text-festdark mb-4" />
            <p className="text-sm text-festdark/70">
              Automated comprehensive reports with key metrics and insights.
            </p>
          </FeatureCard>
          
          <FeatureCard 
            title="Centralized Event Dashboard & Analytics" 
            variant="quaternary"
            className="aspect-square flex flex-col items-center justify-center text-center opacity-0"
            style={{ animationDelay: "0.4s" }}
          >
            <Layout className="h-12 w-12 text-festdark mb-4" />
            <p className="text-sm text-festdark/70">
              Real-time overview of all event activities and performance metrics.
            </p>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
