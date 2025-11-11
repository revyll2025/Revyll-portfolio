import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import ContactModal from "./ContactModal";
import { useLanguage } from "@/contexts/LanguageContext";
import waterImage from "@/assets/revyll-water.png";

const Hero = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const { t } = useLanguage();

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={waterImage} 
          alt="Revyll with water background" 
          className="w-full h-full object-cover blur-[8px] scale-110"
        />
        <div className="absolute inset-0 bg-background/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block mb-2">{t('hero.greeting')}</span>
            <span className="gradient-text">Revyll OGANDAGA</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            {t('hero.title')}
          </p>
          
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-12">
            {t('hero.description')}
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button size="lg" className="glow-primary group" onClick={scrollToProjects}>
              {t('hero.viewWork')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/50 hover:bg-primary/10"
              onClick={() => setIsContactOpen(true)}
            >
              {t('hero.connect')}
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center">
            <a 
              href="https://github.com/revyll2025" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/revyll-ogandaga-1a0595260/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:revyll44@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-bounce"></div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </section>
  );
};

export default Hero;
