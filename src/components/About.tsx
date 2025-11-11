import { Code2, Layers, Rocket } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import sunsetImage from "@/assets/revyll-sunset.png";
import waterImage from "@/assets/revyll-water.png";
import indoorImage from "@/assets/revyll-indoor.png";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text">{t('about.title')}</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <div className="glass-card rounded-2xl p-1 glow-primary">
                  <img 
                    src={sunsetImage} 
                    alt="Revyll at sunset" 
                    className="w-full h-auto rounded-xl object-cover"
                  />
                </div>
              </div>
              <div className="glass-card rounded-2xl p-1 border-primary/30">
                <img 
                  src={waterImage} 
                  alt="Revyll by the water" 
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
              <div className="glass-card rounded-2xl p-1 border-secondary/30">
                <img 
                  src={indoorImage} 
                  alt="Revyll indoor" 
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
            </div>
          </div>

          {/* About Text */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">{t('about.journey')}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.journeyText')}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">{t('about.strengths')}</h3>
              <div className="grid gap-4">
                {[
                  { icon: Code2, text: t('about.strength1') },
                  { icon: Layers, text: t('about.strength2') },
                  { icon: Rocket, text: t('about.strength3') },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-4 glass-card p-4 rounded-lg border border-primary/20">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <span className="font-medium">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
