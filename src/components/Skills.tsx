import { Code2, Database, Layout, Server, Package, GitBranch } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const skills = [
  { name: "React", icon: Code2, color: "text-primary" },
  { name: "TypeScript", icon: Code2, color: "text-primary" },
  { name: "Tailwind CSS", icon: Layout, color: "text-secondary" },
  { name: "Ruby on Rails", icon: Server, color: "text-secondary" },
  { name: "NestJS", icon: Server, color: "text-primary" },
  { name: "PostgreSQL", icon: Database, color: "text-secondary" },
  { name: "Docker", icon: Package, color: "text-primary" },
  { name: "Git", icon: GitBranch, color: "text-secondary" }
];

const Skills = () => {
  const { t } = useLanguage();
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text">{t('skills.title')}</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div 
                key={index}
                className="glass-card p-6 rounded-xl text-center hover:border-primary/50 transition-all duration-300 hover:glow-primary group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 flex justify-center">
                  <div className={`${skill.color} group-hover:animate-float`}>
                    <Icon className="h-12 w-12" />
                  </div>
                </div>
                <h3 className="font-semibold text-foreground group-hover:gradient-text transition-all">
                  {skill.name}
                </h3>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center glass-card rounded-xl p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">
            Continuous <span className="gradient-text">Learning</span>
          </h3>
          <p className="text-muted-foreground">
            I'm always exploring new technologies and staying up-to-date with the latest 
            web development trends. Currently diving deeper into serverless architecture, 
            microservices, and advanced TypeScript patterns.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
