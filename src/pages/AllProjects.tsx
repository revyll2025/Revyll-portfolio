import { useState } from "react";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProjectDetailModal, { type Project } from "@/components/ProjectDetailModal";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import project1 from "@/assets/projects/project-1.jpg";
import project2 from "@/assets/projects/project-2.jpg";
import project3 from "@/assets/projects/project-3.jpg";
import project4 from "@/assets/projects/project-4.jpg";
import project5 from "@/assets/projects/project-5.jpg";
import project6 from "@/assets/projects/project-6.jpg";
import project7 from "@/assets/projects/project-7.jpg";
import project8 from "@/assets/projects/project-8.jpg";
import project9 from "@/assets/projects/project-9.jpg";
import project10 from "@/assets/projects/project-10.jpg";

const AllProjects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { t } = useLanguage();

  const projects: Project[] = [
    {
      title: "R.A.C Church Platform",
      description: "Modern church management system with event scheduling and member engagement",
      fullDescription: "A comprehensive church management platform built with React and Ruby on Rails, featuring event management, donation tracking, and community engagement tools. Designed for seamless interaction between church leadership and congregation members.",
      tech: ["React", "Ruby on Rails", "PostgreSQL", "Tailwind CSS"],
      features: [
        "Event scheduling and calendar management",
        "Member directory and communication tools",
        "Online donation processing",
        "Sermon archive and media library",
        "Mobile-responsive design"
      ],
      github: "https://github.com/revyll2025",
      live: "#",
      image: project1,
    },
    {
      title: "Charity Connect",
      description: "Platform connecting volunteers with local charity organizations",
      fullDescription: "A volunteer matching platform that bridges the gap between charitable organizations and willing volunteers. Built with modern web technologies to facilitate meaningful community engagement.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      features: [
        "Volunteer opportunity listings",
        "Organization profiles and verification",
        "Real-time messaging system",
        "Event calendar and RSVP functionality",
        "Impact tracking and statistics"
      ],
      github: "https://github.com/revyll2025",
      live: "#",
      image: project2,
    },
    {
      title: "Enterprise User Manager",
      description: "Advanced user management dashboard for enterprise applications",
      fullDescription: "A robust enterprise-grade user management system featuring role-based access control, detailed analytics, and comprehensive admin tools. Built with scalability and security as top priorities.",
      tech: ["TypeScript", "NestJS", "PostgreSQL", "Docker"],
      features: [
        "Role-based access control (RBAC)",
        "User activity monitoring and analytics",
        "Bulk user operations and CSV import",
        "Advanced search and filtering",
        "Audit logs and compliance reporting"
      ],
      github: "https://github.com/revyll2025",
      live: "#",
      image: project3,
    },
    {
      title: "E-Commerce Analytics Hub",
      description: "Real-time analytics dashboard for online retail businesses",
      fullDescription: "A comprehensive analytics platform providing real-time insights into e-commerce performance, customer behavior, and sales trends. Features interactive charts and customizable reporting.",
      tech: ["React", "TypeScript", "GraphQL", "Redis"],
      features: [
        "Real-time sales monitoring",
        "Customer behavior analytics",
        "Product performance tracking",
        "Custom report generation",
        "Revenue forecasting tools"
      ],
      github: "https://github.com/revyll2025",
      live: "#",
      image: project4,
    },
    {
      title: "RestauBook",
      description: "Smart restaurant reservation and table management system",
      fullDescription: "An intelligent reservation system that helps restaurants optimize table management, reduce no-shows, and enhance customer experience through automated booking and reminder features.",
      tech: ["React", "Ruby on Rails", "PostgreSQL", "Sidekiq"],
      features: [
        "Real-time table availability",
        "Automated booking confirmations",
        "Customer preference tracking",
        "Waitlist management",
        "Integration with popular review platforms"
      ],
      github: "https://github.com/revyll2025",
      live: "#",
      image: project5,
    },
    {
      title: "FitTrack Pro",
      description: "Comprehensive fitness tracking and workout planning application",
      fullDescription: "A feature-rich fitness application that helps users track workouts, plan nutrition, and achieve their fitness goals through personalized recommendations and progress tracking.",
      tech: ["React", "Node.js", "MongoDB", "Chart.js"],
      features: [
        "Workout logging and history",
        "Nutrition tracking and meal planning",
        "Progress visualization with charts",
        "Custom workout program builder",
        "Social features and challenges"
      ],
      github: "https://github.com/revyll2025",
      live: "#",
      image: project6,
    },
    {
      title: "PropertyHub",
      description: "Modern real estate listing and property management platform",
      fullDescription: "A sophisticated real estate platform connecting buyers, sellers, and agents. Features advanced search, virtual tours, and comprehensive property analytics.",
      tech: ["React", "TypeScript", "NestJS", "Prisma"],
      features: [
        "Advanced property search with filters",
        "Interactive map-based browsing",
        "Virtual tour integration",
        "Agent dashboard and CRM",
        "Market analytics and insights"
      ],
      github: "https://github.com/revyll2025",
      live: "#",
      image: project7,
    },
    {
      title: "TaskFlow",
      description: "Collaborative task management and productivity platform",
      fullDescription: "A powerful project management tool designed for teams to collaborate efficiently, track progress, and meet deadlines. Features real-time updates and customizable workflows.",
      tech: ["React", "TypeScript", "Express", "Socket.io"],
      features: [
        "Kanban-style task boards",
        "Real-time collaboration",
        "Time tracking and reporting",
        "Custom workflow automation",
        "Team performance analytics"
      ],
      github: "https://github.com/revyll2025",
      live: "#",
      image: project8,
    },
    {
      title: "LearnHub",
      description: "Interactive online learning platform with course management",
      fullDescription: "An educational platform that makes learning accessible and engaging. Features include interactive courses, progress tracking, and community-driven learning experiences.",
      tech: ["React", "Ruby on Rails", "PostgreSQL", "AWS S3"],
      features: [
        "Video course hosting and streaming",
        "Interactive quizzes and assessments",
        "Student progress dashboard",
        "Discussion forums and Q&A",
        "Certificate generation"
      ],
      github: "https://github.com/revyll2025",
      live: "#",
      image: project9,
    },
    {
      title: "WeatherWise",
      description: "Intelligent weather forecast application with location-based alerts",
      fullDescription: "A comprehensive weather application providing accurate forecasts, severe weather alerts, and historical climate data. Features beautiful visualizations and personalized notifications.",
      tech: ["React", "TypeScript", "OpenWeather API", "Recharts"],
      features: [
        "7-day detailed forecasts",
        "Severe weather alerts",
        "Historical weather data",
        "Interactive weather maps",
        "Customizable location tracking"
      ],
      github: "https://github.com/revyll2025",
      live: "#",
      image: project10,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              {t('projects.allTitle')}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              A showcase of my latest web applications and creative projects
            </p>
            <Button
              variant="outline"
              className="border-primary/50 hover:bg-primary/10"
              asChild
            >
              <a
                href="https://github.com/revyll2025"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                {t('projects.viewGithub')}
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-primary/30 text-primary"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 3 && (
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      +{project.tech.length - 3}
                    </Badge>
                  )}
                </div>

                <Button
                  variant="outline"
                  className="w-full border-primary/50 hover:bg-primary/10 glow-primary"
                  onClick={() => setSelectedProject(project)}
                >
                  {t('projects.seeDetails')}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <ProjectDetailModal project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};

export default AllProjects;
