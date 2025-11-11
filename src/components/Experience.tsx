import { GraduationCap, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Experience = () => {
  const { t } = useLanguage();
  
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text">{t('experience.title')}</span>
        </h2>

        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex gap-4 glass-card p-6 rounded-lg border border-primary/20 animate-fade-in">
            <div className="p-3 rounded-lg bg-primary/10 h-fit">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">{t('experience.bootcamp')}</h3>
              <p className="text-muted-foreground">
                {t('experience.bootcampDesc')}
              </p>
            </div>
          </div>

          <div className="flex gap-4 glass-card p-6 rounded-lg border border-primary/20 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="p-3 rounded-lg bg-primary/10 h-fit">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">{t('experience.growth')}</h3>
              <p className="text-muted-foreground">
                {t('experience.growthDesc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
