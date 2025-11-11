import { useState, useEffect } from "react";
import { Menu, X, Languages } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import ResumeModal from "./ResumeModal";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    } else {
      // If not on homepage, navigate to homepage then scroll
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en");
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass-card border-b border-primary/20 backdrop-blur-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Name */}
            <Link to="/" className="text-xl font-bold gradient-text">
              REVYLL
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => setIsResumeOpen(true)}
                className="text-foreground/80 hover:text-primary transition-colors relative group"
              >
                {t('nav.resume')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground/80 hover:text-primary transition-colors relative group"
              >
                {t('nav.about')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </button>
              <Link
                to="/projects"
                className="text-foreground/80 hover:text-primary transition-colors relative group"
              >
                {t('nav.projects')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground/80 hover:text-primary transition-colors relative group"
              >
                {t('nav.contact')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </button>
              
              {/* Language Toggle */}
              <Button
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                className="border-primary/30 hover:bg-primary/10 gap-2"
              >
                <Languages className="h-4 w-4" />
                {language.toUpperCase()}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                className="border-primary/30 hover:bg-primary/10"
              >
                {language.toUpperCase()}
              </Button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-foreground hover:text-primary transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 space-y-4 glass-card rounded-lg animate-fade-in">
              <button
                onClick={() => {
                  setIsResumeOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-primary hover:bg-primary/10 rounded transition-colors"
              >
                {t('nav.resume')}
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-primary hover:bg-primary/10 rounded transition-colors"
              >
                {t('nav.about')}
              </button>
              <Link
                to="/projects"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-primary hover:bg-primary/10 rounded transition-colors"
              >
                {t('nav.projects')}
              </Link>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-primary hover:bg-primary/10 rounded transition-colors"
              >
                {t('nav.contact')}
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
};

export default Navbar;
