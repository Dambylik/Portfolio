
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("projects");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const projects = [
    {
      title: "Ecommerce Platform",
      description: "A fully responsive e-commerce website with cart functionality, user authentication, and payment processing.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      link: "#",
      category: "fullstack"
    },
    {
      title: "Portfolio Website",
      description: "A modern portfolio website built with React and Tailwind CSS showcasing projects and skills.",
      tags: ["React", "Tailwind CSS", "Responsive Design"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      link: "#",
      category: "frontend"
    },
    {
      title: "Task Management App",
      description: "A productivity application for managing tasks, projects, and team collaboration.",
      tags: ["TypeScript", "React", "Firebase"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      link: "#",
      category: "fullstack"
    },
    {
      title: "Weather Dashboard",
      description: "A weather application that displays forecast data based on location with interactive maps.",
      tags: ["JavaScript", "API Integration", "Chart.js"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      link: "#",
      category: "frontend"
    },
    {
      title: "RESTful API Service",
      description: "A backend service providing RESTful APIs for a content management system.",
      tags: ["Node.js", "Express", "PostgreSQL", "Docker"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      link: "#",
      category: "backend"
    },
    {
      title: "Social Media Dashboard",
      description: "An analytics dashboard for social media performance tracking and reporting.",
      tags: ["React", "D3.js", "Material UI"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      link: "#",
      category: "frontend"
    },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "fullstack", label: "Full-Stack" },
  ];

  return (
    <section id="projects" className="section bg-secondary/10 relative">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-80 h-80 rounded-full bg-accent/5 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center mb-12">
          <h2 className="section-title">Projects</h2>
          <div className="h-px bg-border flex-grow ml-8 opacity-50"></div>
        </div>
        
        <p 
          className={cn(
            "max-w-xl text-muted-foreground mb-12 opacity-0 transition-all duration-700",
            isVisible && "opacity-100 animate-fade-in"
          )}
        >
          Here's a selection of projects I've worked on. Each one represents different challenges
          and solutions across the full development stack. Feel free to explore them in detail.
        </p>

        <div 
          className={cn(
            "flex flex-wrap gap-4 mb-12 justify-center md:justify-start opacity-0 transition-all duration-700",
            isVisible && "opacity-100 animate-fade-in"
          )}
          style={{ animationDelay: '0.2s' }}
        >
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300",
                activeFilter === filter.id
                  ? "bg-accent text-white shadow-md"
                  : "bg-white hover:bg-accent/10"
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image}
              link={project.link}
              delay={0.2 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
