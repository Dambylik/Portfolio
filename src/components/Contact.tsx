
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("contact");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="contact" className="section relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/3 w-72 h-72 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center mb-12">
          <h2 className="section-title">Contact</h2>
          <div className="h-px bg-border flex-grow ml-8 opacity-50"></div>
        </div>
        
        <div className="w-full px-4 mt-12">
          <div 
            className={cn(
              "bg-white/50 p-10 rounded-xl shadow-lg border border-border/30 opacity-0 transition-all duration-700 max-w-6xl mx-auto", 
              isVisible && "opacity-100 animate-fade-in"
            )}
            style={{ animationDelay: '0.2s' }}
          >
            <h3 className="text-3xl font-poppins font-medium mb-6 text-accent text-center">Let's Connect</h3>
            <p className="text-muted-foreground mb-10 text-center text-lg">
              I'm always interested in discussing new projects, creative ideas, or opportunities to be 
              part of your vision. Feel free to reach out!
            </p>
            
            <div className="space-y-8 md:px-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-center justify-center md:justify-start">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mr-4 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:olgakapshai@protonmail.com" className="text-accent hover:underline">olgakapshai@protonmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-center justify-center md:justify-start">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mr-4 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <span>Paris, France</span>
                  </div>
                </div>
              </div>
              
              <div className="pt-8 mt-8 border-t border-border text-center">
                <p className="font-medium mb-6">Find me on</p>
                <div className="flex space-x-6 justify-center">
                  <a href="#" className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a href="#" className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
