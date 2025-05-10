
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Settings } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-white/95 shadow-sm backdrop-blur-sm py-3' : 'bg-transparent py-6'
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 flex justify-between items-center">
        <a 
          href="#home" 
          className="font-poppins font-bold text-foreground flex items-center group"
        >
          <div className="flex items-center group-hover:text-accent transition-colors duration-300">
            <div className="logo-container flex items-center">
              <div className="logo-mark relative">
                <span className="text-3xl font-bold tracking-tight">
                  <span className="text-accent">O</span>
                  <span className="text-primary">K</span>
                </span>
                <div className="absolute -top-1 left-5 w-4 h-4">
                  <Settings size={14} className="text-accent rotate-45" />
                </div>
              </div>
            </div>
          </div>
        </a>
        
        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 relative z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={cn(
            "w-6 h-0.5 bg-foreground transition-all duration-300",
            mobileMenuOpen && "rotate-45 translate-y-1.5"
          )}></div>
          <div className={cn(
            "w-6 h-0.5 bg-foreground my-1.5 transition-all duration-300",
            mobileMenuOpen && "opacity-0"
          )}></div>
          <div className={cn(
            "w-6 h-0.5 bg-foreground transition-all duration-300",
            mobileMenuOpen && "-rotate-45 -translate-y-1.5"
          )}></div>
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8">
          {['home', 'about', 'projects', 'contact'].map((item) => (
            <a
              key={item}
              onClick={() => handleNavClick(item)}
              className="nav-link cursor-pointer capitalize font-medium"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden fixed inset-0 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center space-y-8 z-40">
            {['home', 'about', 'projects', 'contact'].map((item) => (
              <a
                key={item}
                onClick={() => handleNavClick(item)}
                className="nav-link cursor-pointer capitalize text-xl font-medium"
              >
                {item}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
