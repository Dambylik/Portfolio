
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
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

    const section = document.getElementById("about");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const skills = [
    "HTML/CSS", "JavaScript", "TypeScript", "React", 
    "Node.js", "Express", "MongoDB", "PostgreSQL", 
    "Tailwind CSS", "UI/UX Design", "RESTful APIs", "Git"
  ];

  return (
    <section id="about" className="section relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center mb-12">
          <h2 className="section-title">About Me</h2>
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
            <h3 className="text-2xl font-poppins font-medium mb-6 text-accent">Get to know me!</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a passionate Full-Stack Developer with experience in building responsive, 
                accessible, and performant web applications. With keen attention to detail and 
                a focus on user experience, I create intuitive interfaces backed by robust functionality.
              </p>
              <p>
                I enjoy solving complex problems and turning ideas into elegant, functional solutions. Beyond coding, I'm constantly learning new technologies and methodologies to stay 
                at the forefront of web development.
              </p>
            </div>
            <button 
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-8 text-accent border-b-2 border-transparent hover:border-accent transition-colors duration-300 group flex items-center"
            >
              <span>Let's work together</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>

          <div 
            className={cn(
              "opacity-0 transition-all duration-700", 
              isVisible && "opacity-100 animate-fade-in"
            )}
            style={{ animationDelay: '0.4s' }}
          >
            <h3 className="text-2xl font-poppins font-medium mb-6 text-accent">Skills & Experience</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <div 
                  key={skill}
                  className={cn(
                    "px-4 py-2 rounded-md shadow-sm transition-all duration-300 hover:shadow hover:-translate-y-1",
                    index % 4 === 0 ? "bg-primary/10" :
                    index % 4 === 1 ? "bg-accent/10" :
                    index % 4 === 2 ? "bg-secondary" :
                    "bg-white"
                  )}
                >
                  {skill}
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h4 className="text-xl font-poppins font-medium mb-4">Education</h4>
              <div className="space-y-4">
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <p className="font-medium text-lg">Full-Stack Developer</p>
                    <p className="text-accent">École 42 • 2024-Present</p>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <p className="font-medium text-lg">International Project Manager</p>
                    <p className="text-accent">ESG MBA • 2019</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
