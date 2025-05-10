
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  delay?: number;
}

const ProjectCard = ({ title, description, tags, image, link, delay = 0 }: ProjectCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const card = document.getElementById(`project-${title.replace(/\s+/g, '-').toLowerCase()}`);
    if (card) {
      observer.observe(card);
    }

    return () => {
      if (card) {
        observer.unobserve(card);
      }
    };
  }, [title]);

  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      id={`project-${title.replace(/\s+/g, '-').toLowerCase()}`}
      className={cn(
        "group block bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-500 opacity-0",
        isVisible && "animate-fade-in hover:shadow-xl",
        isHovered && "-translate-y-2"
      )}
      style={{ animationDelay: `${delay}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-52 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end">
          <span className="text-white font-medium p-4">View Project</span>
        </div>
        <img 
          src={image} 
          alt={title} 
          className={cn(
            "w-full h-full object-cover transition-all duration-700 ease-in-out",
            isHovered ? "scale-110 filter brightness-90" : "scale-100"
          )}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-poppins font-semibold mb-2 group-hover:text-accent transition-colors">{title}</h3>
        <p className="text-muted-foreground text-sm mb-5 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag) => (
            <span 
              key={tag}
              className="px-3 py-1 bg-secondary text-xs rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
