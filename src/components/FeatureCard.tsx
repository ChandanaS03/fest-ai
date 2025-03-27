
import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  variant?: "primary" | "secondary" | "tertiary" | "quaternary";
}

const FeatureCard = forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ className, title, children, variant = "primary", ...props }, ref) => {
    const variantClasses = {
      primary: "bg-white text-festdark",
      secondary: "bg-festgray text-festdark",
      tertiary: "bg-festgray text-festdark",
      quaternary: "bg-festgray text-festdark"
    };

    return (
      <div
        ref={ref}
        className={cn(
          "feature-card rounded-2xl p-8 flex flex-col items-center justify-center transition-all duration-300",
          variantClasses[variant],
          className
        )}
        {...props}
      >
        <h3 className="text-xl md:text-2xl font-medium mb-4 text-center">{title}</h3>
        {children}
      </div>
    );
  }
);

FeatureCard.displayName = "FeatureCard";

export default FeatureCard;
