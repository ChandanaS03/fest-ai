
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-black py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Fest.ai</h2>
            <p className="text-white/60 max-w-md">
              Revolutionizing event planning and management with AI-powered solutions that save time and enhance experiences.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Stay Updated</h3>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/10 text-white px-4 py-3 rounded-l-md focus:outline-none focus:ring-1 focus:ring-festgold w-full max-w-xs"
              />
              <button className="bg-festgold hover:bg-festgold/90 text-black px-4 rounded-r-md transition-colors duration-200 flex items-center">
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Fest.ai. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-white transition-colors duration-200">
              Privacy
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors duration-200">
              Terms
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors duration-200">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
