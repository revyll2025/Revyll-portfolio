import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export interface Project {
  title: string;
  description: string;
  fullDescription: string;
  tech: string[];
  features: string[];
  github: string;
  live: string;
  image: string;
}

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetailModal = ({ project, isOpen, onClose }: ProjectDetailModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto glass-card border-primary/30">
        <DialogHeader>
          <DialogTitle className="text-3xl gradient-text">{project.title}</DialogTitle>
          <DialogDescription className="text-base text-foreground/80">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          <div className="rounded-lg overflow-hidden border border-primary/20">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-64 object-cover"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">About This Project</h3>
            <p className="text-foreground/80 leading-relaxed">{project.fullDescription}</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">Key Features</h3>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-foreground/80">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Badge 
                  key={tech}
                  className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex gap-4 pt-4 border-t border-border">
            <Button 
              variant="default"
              className="glow-primary flex-1"
              asChild
            >
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View Source Code
              </a>
            </Button>
            <Button 
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 flex-1"
              asChild
            >
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailModal;
