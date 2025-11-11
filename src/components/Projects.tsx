import { Card } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "R.A.C Church Platform",
    description: "A comprehensive church management system with event scheduling, member management, and donation tracking.",
    tech: ["React", "Ruby on Rails", "PostgreSQL", "Tailwind CSS"],
    github: "#",
    live: "#"
  },
  {
    title: "Charity Service Hub",
    description: "Connecting volunteers with local charities. Features real-time matching and impact tracking.",
    tech: ["TypeScript", "NestJS", "Docker", "React"],
    github: "#",
    live: "#"
  },
  {
    title: "User Manager Pro",
    description: "Enterprise-grade user management system with role-based access control and audit logging.",
    tech: ["React", "Node.js", "PostgreSQL", "Redis"],
    github: "#",
    live: "#"
  },
  {
    title: "E-Commerce Dashboard",
    description: "Analytics dashboard for e-commerce platforms with real-time data visualization.",
    tech: ["React", "TypeScript", "Chart.js", "Express"],
    github: "#",
    live: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="glass-card p-6 hover:border-primary/50 transition-all duration-300 hover:glow-primary group"
            >
              <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a 
                  href={project.github}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-4 w-4" />
                  Code
                </a>
                <a 
                  href={project.live}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-secondary transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/revyll" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors"
          >
            <Github className="h-5 w-5" />
            See More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
