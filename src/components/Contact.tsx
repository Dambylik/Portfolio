
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This would typically connect to a backend service
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div 
            className={cn(
              "opacity-0 transition-all duration-700", 
              isVisible && "opacity-100 animate-fade-in"
            )}
            style={{ animationDelay: '0.2s' }}
          >
            <h3 className="text-2xl font-poppins font-medium mb-4 text-accent">Let's Connect</h3>
            <p className="text-muted-foreground mb-8">
              I'm always interested in discussing new projects, creative ideas, or opportunities to be 
              part of your vision. Feel free to reach out through the form or via my social links.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mr-4 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:olga.kapshai@example.com" className="text-accent hover:underline">olga.kapshai@example.com</a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mr-4 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <span>San Francisco, California, USA</span>
                </div>
              </div>
              
              <div className="pt-6 mt-6 border-t border-border">
                <p className="font-medium mb-4">Find me on</p>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <form 
            onSubmit={handleSubmit}
            className={cn(
              "bg-white p-8 rounded-lg shadow-lg border border-border/50 opacity-0 transition-all duration-700", 
              isVisible && "opacity-100 animate-fade-in"
            )}
            style={{ animationDelay: '0.4s' }}
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                placeholder="Your Name"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
                placeholder="your.email@example.com"
                required
              />
            </div>
            
            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors resize-none"
                placeholder="How can I help you?"
                required
              />
            </div>
            
            <Button 
              type="submit"
              className="w-full bg-accent hover:bg-accent/90 text-white py-3 font-medium transition-all duration-300 transform hover:translate-y-[-2px]"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
