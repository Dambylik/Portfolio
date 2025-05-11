import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";

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
        
        <div className="flex flex-col items-center justify-center max-w-3xl mx-auto">
          <div 
            className={cn(
              "w-full opacity-0 transition-all duration-700", 
              isVisible && "opacity-100 animate-fade-in"
            )}
            style={{ animationDelay: '0.2s' }}
          >
            <h3 className="text-2xl font-poppins font-medium mb-4 text-accent text-center">Let's Connect</h3>
            <p className="text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
              I'm always interested in discussing new projects, creative ideas, or opportunities to be 
              part of your vision. Feel free to reach out through my email or social links below.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Email */}
              <div className="bg-white p-8 rounded-lg shadow-md border border-border/50 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Mail size={24} className="text-accent" />
                </div>
                <h4 className="font-medium text-lg mb-2">Email</h4>
                <a href="mailto:olgakapshai@protonmail.com" className="text-accent hover:underline">
                olgakapshai@protonmail.com
                </a>
              </div>
              
              {/* Location */}
              <div className="bg-white p-8 rounded-lg shadow-md border border-border/50 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <MapPin size={24} className="text-accent" />
                </div>
                <h4 className="font-medium text-lg mb-2">Location</h4>
                <p>Paris, France</p>
              </div>
              
              {/* Social Links */}
              <div className="bg-white p-8 rounded-lg shadow-md border border-border/50 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Linkedin size={24} className="text-accent" />
                </div>
                <h4 className="font-medium text-lg mb-2">Social</h4>
                <div className="flex space-x-4 mt-2">
                  <a href="https://www.linkedin.com/in/your-linkedin-profile" className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors">
                    <Linkedin size={18} className="text-accent" />
                  </a>
                  <a href="https://github.com/dambylik" className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors">
                    <Github size={18} className="text-accent" />
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
