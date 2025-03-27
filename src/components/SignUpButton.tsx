
import { Button } from "@/components/ui/button";
import { useCallback } from "react";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface SignUpButtonProps {
  className?: string;
}

const SignUpButton = ({ className }: SignUpButtonProps) => {
  const { toast } = useToast();

  const handleSignUp = useCallback(() => {
    toast({
      title: "Sign up coming soon",
      description: "We're working on this feature. Please check back later.",
    });
  }, [toast]);

  return (
    <Button
      onClick={handleSignUp}
      className={`clean-button bg-festgold hover:bg-festgold/90 text-black font-medium py-6 px-8 rounded-md group transition-all duration-300 ${className}`}
    >
      <span className="mr-2">Sign up</span>
      <ArrowRight className="h-4 w-4 inline-block transition-transform duration-300 group-hover:translate-x-1" />
    </Button>
  );
};

export default SignUpButton;
