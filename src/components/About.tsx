import { Code2, Layers, Rocket } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import sunsetImage from "@/assets/revyll-sunset.png";

const About = () => {
  const { t } = useLanguage();

  const timelineExperience = [
    {
      period: t('about.timeline.experience.istanbul.period'),
      title: t('about.timeline.experience.istanbul.title'),
      role: t('about.timeline.experience.istanbul.role'),
      description: t('about.timeline.experience.istanbul.description'),
    },
    {
      period: t('about.timeline.experience.cybercafe.period'),
      title: t('about.timeline.experience.cybercafe.title'),
      role: t('about.timeline.experience.cybercafe.role'),
      description: t('about.timeline.experience.cybercafe.description'),
    },
    {
      period: t('about.timeline.experience.seeg.period'),
      title: t('about.timeline.experience.seeg.title'),
      role: t('about.timeline.experience.seeg.role'),
      description: t('about.timeline.experience.seeg.description'),
    },
  ];

  const timelineEducation = [
    {
      period: t('about.timeline.education.lewagon.period'),
      title: t('about.timeline.education.lewagon.title'),
      role: t('about.timeline.education.lewagon.role'),
      description: t('about.timeline.education.lewagon.description'),
    },
    {
      period: t('about.timeline.education.istanbul.period'),
      title: t('about.timeline.education.istanbul.title'),
      role: t('about.timeline.education.istanbul.role'),
      description: t('about.timeline.education.istanbul.description'),
    },
    {
      period: t('about.timeline.education.duzce.period'),
      title: t('about.timeline.education.duzce.title'),
      role: t('about.timeline.education.duzce.role'),
      description: t('about.timeline.education.duzce.description'),
    },
    {
      period: t('about.timeline.education.lycee.period'),
      title: t('about.timeline.education.lycee.title'),
      role: t('about.timeline.education.lycee.role'),
      description: t('about.timeline.education.lycee.description'),
    },
  ];

  const skills = [
    { label: t('about.strength1'), value: 92, icon: Code2 },
    { label: t('about.strength2'), value: 88, icon: Layers },
    { label: t('about.strength3'), value: 84, icon: Rocket },
  ];

  const softSkills = [
    t('about.softskills.communication'),
    t('about.softskills.leadership'),
    t('about.softskills.problemSolving'),
  ];

  return (
    <section id="about" className="relative py-24 px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10 pointer-events-none" />
      <div className="absolute -top-32 right-10 h-64 w-64 bg-primary/30 blur-3xl rounded-full opacity-30" />
      <div className="absolute -bottom-40 left-0 h-72 w-72 bg-secondary/25 blur-3xl rounded-full opacity-30" />

      <div className="max-w-6xl mx-auto relative">
        <div className="glass-card relative overflow-hidden rounded-3xl border border-primary/20 bg-background/80 shadow-[0_20px_60px_-25px_rgba(56,189,248,0.35)]">
          <div className="absolute -top-24 -left-10 h-64 w-64 rounded-full bg-gradient-to-br from-primary/30 to-secondary/20 blur-3xl opacity-40" />
          <div className="absolute -bottom-32 -right-16 h-72 w-72 rounded-full bg-gradient-to-br from-secondary/30 to-primary/20 blur-3xl opacity-30" />

          <div className="relative grid gap-12 p-8 sm:p-10 lg:p-14 lg:grid-cols-[1.2fr_1fr]">
            <div className="space-y-10">
              <div className="space-y-4">
                <Badge className="glass-card border border-primary/30 bg-primary/10 text-primary tracking-[0.35em] uppercase text-xs">
                  {t('about.journey')}
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold gradient-text leading-tight">
                  {t('about.title')}
                </h2>
                <p className="max-w-2xl text-muted-foreground leading-relaxed">
                  {t('about.journeyText')}
                </p>
              </div>

              <div className="space-y-10">
                {[{
                  heading: t('about.timeline.experience.heading'),
                  items: timelineExperience,
                }, {
                  heading: t('about.timeline.education.heading'),
                  items: timelineEducation,
                }].map((section, sectionIndex) => (
                  <div key={section.heading} className="relative pl-8">
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold uppercase tracking-[0.4em] text-primary/70">
                        {section.heading}
                      </h3>
                    </div>
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary/80 via-primary/40 to-transparent" />
                    <div className="space-y-8">
                      {section.items.map((item, index) => (
                        <div key={`${sectionIndex}-${index}`} className="relative">
                          <div className="absolute -left-[1.15rem] top-4 h-5 w-5 rounded-full bg-background border border-primary/60 shadow-[0_0_20px_rgba(56,189,248,0.65)]">
                            <div className="absolute inset-1 rounded-full bg-gradient-to-br from-primary to-secondary animate-pulse" />
                          </div>
                          <div className="glass-card rounded-2xl border border-white/10 bg-background/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
                            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.35em] text-primary/70">
                              <span>{item.period}</span>
                              <span className="h-px w-8 bg-primary/40" />
                              <span>{item.role}</span>
                            </div>
                            <h3 className="mt-4 text-2xl font-semibold gradient-text leading-snug">
                              {item.title}
                            </h3>
                            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-10">
              <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-background/80 p-8 glass-card">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/20 opacity-70" />
                <div className="relative flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className="relative h-20 w-20 rounded-full border border-primary/60 bg-background/60 shadow-[0_0_35px_rgba(56,189,248,0.45)] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-transparent mix-blend-screen" />
                      <img
                        src={sunsetImage}
                        alt="Revyll portrait"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-[0.6rem] font-semibold uppercase tracking-[0.5em] text-primary/80">
                        {t('hero.title')}
                      </p>
                      <h3 className="text-2xl font-semibold gradient-text">
                        {t('about.highlight.title')}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {t('about.highlight.subtitle')}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                          {t('about.stats.title')}
                        </h4>
                        <span className="text-xs text-primary/70">
                          {t('about.stats.caption')}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      {skills.map(({ label, value, icon: Icon }) => (
                        <div key={label} className="space-y-2">
                          <div className="flex items-center justify-between text-sm font-medium">
                            <div className="flex items-center gap-3 text-sm">
                              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                                <Icon className="h-4 w-4 text-primary" />
                              </span>
                              <span>{label}</span>
                            </div>
                            <span className="text-primary/80">{value}%</span>
                          </div>
                          <Progress value={value} className="h-2.5 bg-background/80" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <div className="flex flex-wrap gap-2">
                      {softSkills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="glass-card border border-primary/40 bg-primary/5 text-primary backdrop-blur-md"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
