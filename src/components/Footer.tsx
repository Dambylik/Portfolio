import { cn } from "@/lib/utils";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 px-4 bg-secondary/30 border-t border-border/50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent opacity-50"></div>
      
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <a href="#home" className="text-xl font-poppins font-semibold inline-flex items-center">
              <span className="text-accent">&#123;</span>
              <span className="mx-1">Olga Kapshai</span>
              <span className="text-accent">&#125;</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">            
            <p className="text-sm text-muted-foreground">
              Everything will be <span className="inline-flex items-center">
                <span className="text-accent">&#123;</span>
                <span className="mx-1">OK</span>
                <span className="text-accent">&#125;</span>
              </span>
            </p>
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          <button 
            onClick={scrollToTop} 
            className={cn(
              "p-3 bg-accent/10 rounded-full hover:bg-accent/20 transition-colors",
              "text-accent focus:outline-none hover:shadow-md"
            )}
            aria-label="Scroll to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
