import { GraduationCap, Code, Users, Rocket } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          My <span className="gradient-text">Journey</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          {/* Le Wagon Section */}
          <div className="glass-card p-8 rounded-2xl border-l-4 border-primary">
            <div className="flex items-start gap-4">
              <div className="bg-primary/20 p-3 rounded-xl">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Le Wagon Bootcamp</h3>
                <p className="text-primary mb-4">Cape Town, South Africa</p>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  Completed an intensive 9-week full-stack web development program, 
                  mastering modern web technologies through hands-on projects and collaborative coding.
                </p>

                {/* Highlights */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3">
                    <Code className="h-5 w-5 text-secondary" />
                    <span className="text-sm">Full Stack Development</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-secondary" />
                    <span className="text-sm">Team Projects</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Rocket className="h-5 w-5 text-secondary" />
                    <span className="text-sm">Real-world Apps</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Technologies */}
            <div className="mt-6 pt-6 border-t border-border">
              <h4 className="text-sm font-semibold text-muted-foreground mb-3">Technologies Mastered:</h4>
              <div className="flex flex-wrap gap-2">
                {["Ruby on Rails", "JavaScript", "HTML/CSS", "PostgreSQL", "Git", "Heroku", "REST APIs", "MVC Architecture"].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-background/50 text-xs rounded-full border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Post-Bootcamp Growth */}
          <div className="mt-12 glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Beyond the <span className="gradient-text">Bootcamp</span>
            </h3>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              Post-graduation, I've continued to expand my skill set, diving into modern 
              frameworks and best practices:
            </p>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">▹</span>
                <span>Advanced React patterns and TypeScript integration</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">▹</span>
                <span>NestJS for scalable backend architectures</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">▹</span>
                <span>Docker containerization and deployment strategies</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">▹</span>
                <span>Modern UI/UX principles and accessibility standards</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
