import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-10 px-4 relative overflow-hidden">
      {/* Background element */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-transparent to-accent/10 opacity-50"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-accent/5 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-56 h-56 rounded-full bg-primary/5 blur-3xl"></div>
      
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className={cn(
            "md:w-1/2 transition-all duration-1000 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <span className="px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium inline-block mb-6">
              Full-Stack Developer
            </span>
            <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-4">
              <span className="text-muted-foreground font-normal text-2xl md:text-3xl block mb-2">
                Hello, I'm
              </span>
              <span className="text-accent">
                Olga <span className="text-primary">Kapshai</span>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-md">
              I build creative, functional web applications with modern technologies and thoughtful user experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => handleScroll('projects')}
                className="bg-accent hover:bg-accent/90 text-white px-8 py-2"
              >
                View Projects
              </Button>
              <Button 
                onClick={() => handleScroll('contact')}
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10"
              >
                Contact Me
              </Button>
            </div>
          </div>
          
          <div className={cn(
            "md:w-2/5 flex justify-center transition-all duration-1000 ease-out delay-300",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <div className="relative">
              {/* Main profile image container */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/80 to-accent/80 p-1 shadow-xl">
                <div className="w-full h-full rounded-full bg-white relative overflow-hidden">
                  {/* Replace with actual profile picture when available */}
                  <div className="absolute inset-0 flex items-center justify-center text-4xl font-poppins font-bold text-accent">
                    OK
                  </div>
                </div>
              </div>
              
              {/* Decorative background circles */}
              <div className="absolute -z-10 w-32 h-32 rounded-full bg-primary/20 -top-6 -left-6 blur-sm"></div>
              <div className="absolute -z-10 w-24 h-24 rounded-full bg-accent/20 -bottom-4 -right-4 blur-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
