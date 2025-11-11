import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import ProjectDetailModal from "./ProjectDetailModal";
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

const projects = [
  {
    title: "R.A.C Church Platform",
    description: "A comprehensive church management system with event scheduling, member management, and donation tracking.",
    fullDescription: "Built a full-stack church management platform to streamline administrative tasks, event planning, and community engagement. The system includes role-based access control, automated email notifications, and real-time updates.",
    tech: ["React", "Ruby on Rails", "PostgreSQL", "Tailwind CSS"],
    features: [
      "Event scheduling and calendar management",
      "Member database with advanced search",
      "Online donation processing with Stripe",
      "Automated email and SMS notifications",
      "Admin dashboard with analytics"
    ],
    github: "https://github.com/revyll2025",
    live: "#",
    image: project1
  },
  {
    title: "Charity Service Hub",
    description: "Connecting volunteers with local charities. Features real-time matching and impact tracking.",
    fullDescription: "Developed a platform that bridges the gap between volunteers and charitable organizations. The app uses geolocation to match volunteers with nearby opportunities and tracks their impact over time.",
    tech: ["TypeScript", "NestJS", "Docker", "React"],
    features: [
      "Real-time volunteer-charity matching",
      "Geolocation-based opportunity discovery",
      "Impact tracking and analytics",
      "In-app messaging system",
      "Volunteer hour certification"
    ],
    github: "https://github.com/revyll2025",
    live: "#",
    image: project2
  },
  {
    title: "User Manager Pro",
    description: "Enterprise-grade user management system with role-based access control and audit logging.",
    fullDescription: "Created a robust user management system for enterprises with advanced security features, including multi-factor authentication, detailed audit trails, and granular permission controls.",
    tech: ["React", "Node.js", "PostgreSQL", "Redis"],
    features: [
      "Role-based access control (RBAC)",
      "Multi-factor authentication",
      "Comprehensive audit logging",
      "User activity monitoring",
      "Bulk user operations"
    ],
    github: "https://github.com/revyll2025",
    live: "#",
    image: project3
  },
  {
    title: "E-Commerce Dashboard",
    description: "Analytics dashboard for e-commerce platforms with real-time data visualization.",
    fullDescription: "Built an interactive analytics dashboard that provides real-time insights into e-commerce metrics, including sales trends, customer behavior, and inventory management.",
    tech: ["React", "TypeScript", "Chart.js", "Express"],
    features: [
      "Real-time sales analytics",
      "Customer behavior tracking",
      "Inventory management",
      "Revenue forecasting",
      "Custom report generation"
    ],
    github: "https://github.com/revyll2025",
    live: "#",
    image: project4
  },
  {
    title: "Restaurant Booking System",
    description: "Modern reservation platform with table management and customer notifications.",
    fullDescription: "Designed a seamless booking experience for restaurants with automated table management, waitlist functionality, and customer communication tools.",
    tech: ["React", "Firebase", "Tailwind CSS", "Node.js"],
    features: [
      "Real-time table availability",
      "Automated booking confirmations",
      "Waitlist management",
      "Customer preferences tracking",
      "Integration with POS systems"
    ],
    github: "https://github.com/revyll2025",
    live: "#",
    image: project5
  },
  {
    title: "Fitness Tracker App",
    description: "Comprehensive fitness tracking with workout plans and progress monitoring.",
    fullDescription: "Developed a fitness app that helps users track workouts, monitor progress, and achieve their health goals with personalized workout plans and nutrition tracking.",
    tech: ["React Native", "Express", "MongoDB", "Redux"],
    features: [
      "Personalized workout plans",
      "Progress tracking with charts",
      "Nutrition logging",
      "Social features and challenges",
      "Wearable device integration"
    ],
    github: "https://github.com/revyll2025",
    live: "#",
    image: project6
  },
  {
    title: "Real Estate Platform",
    description: "Property listing and search platform with advanced filtering and virtual tours.",
    fullDescription: "Created a modern real estate platform featuring property listings, advanced search capabilities, virtual tours, and direct agent communication.",
    tech: ["React", "Next.js", "Prisma", "PostgreSQL"],
    features: [
      "Advanced property search filters",
      "Interactive map integration",
      "Virtual tour functionality",
      "Agent messaging system",
      "Mortgage calculator"
    ],
    github: "https://github.com/revyll2025",
    live: "#",
    image: project7
  },
  {
    title: "Task Management Suite",
    description: "Collaborative task management with kanban boards and team features.",
    fullDescription: "Built a comprehensive project management tool with kanban boards, team collaboration features, time tracking, and productivity analytics.",
    tech: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    features: [
      "Drag-and-drop kanban boards",
      "Team collaboration tools",
      "Time tracking",
      "File attachments",
      "Productivity analytics"
    ],
    github: "https://github.com/revyll2025",
    live: "#",
    image: project8
  },
  {
    title: "Online Learning Platform",
    description: "E-learning platform with video courses, quizzes, and progress tracking.",
    fullDescription: "Developed a comprehensive e-learning platform with video hosting, interactive quizzes, student progress tracking, and instructor tools.",
    tech: ["React", "Ruby on Rails", "AWS S3", "PostgreSQL"],
    features: [
      "Video course hosting",
      "Interactive quizzes and assignments",
      "Student progress tracking",
      "Instructor dashboard",
      "Certificate generation"
    ],
    github: "https://github.com/revyll2025",
    live: "#",
    image: project9
  },
  {
    title: "Weather Forecast App",
    description: "Beautiful weather application with detailed forecasts and interactive maps.",
    fullDescription: "Created a visually stunning weather app that provides accurate forecasts, severe weather alerts, and interactive weather maps with multiple data layers.",
    tech: ["React", "OpenWeather API", "Mapbox", "Chart.js"],
    features: [
      "7-day weather forecasts",
      "Hourly temperature tracking",
      "Severe weather alerts",
      "Interactive weather maps",
      "Historical weather data"
    ],
    github: "https://github.com/revyll2025",
    live: "#",
    image: project10
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

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
              className="glass-card p-6 hover:border-primary/50 transition-all duration-300 hover:glow-primary group overflow-hidden"
            >
              <div className="rounded-lg overflow-hidden mb-4 border border-primary/20">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.slice(0, 3).map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">
                    +{project.tech.length - 3} more
                  </span>
                )}
              </div>

              <Button 
                className="w-full glow-primary"
                onClick={() => setSelectedProject(project)}
              >
                See Details
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/revyll2025" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors"
          >
            <Github className="h-5 w-5" />
            See More on GitHub
          </a>
        </div>

        <ProjectDetailModal 
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};

export default Projects;
