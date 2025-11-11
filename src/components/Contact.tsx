import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card p-8 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {t('contact.name')}
                </label>
                <Input 
                  id="name"
                  placeholder={t('contact.name')}
                  className="bg-background/50 border-primary/20 focus:border-primary"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {t('contact.email')}
                </label>
                <Input 
                  id="email"
                  type="email"
                  placeholder={t('contact.email')}
                  className="bg-background/50 border-primary/20 focus:border-primary"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {t('contact.message')}
                </label>
                <Textarea 
                  id="message"
                  placeholder={t('contact.message')}
                  rows={5}
                  className="bg-background/50 border-primary/20 focus:border-primary resize-none"
                  required
                />
              </div>

              <Button type="submit" className="w-full glow-primary group">
                {t('contact.send')}
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-6">{t('contact.info')}</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 glass-card p-4 rounded-lg">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Whatsapp-Phones</p>
                    <p>+1 (706) 786-3807 | +535 671 1937</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 glass-card p-4 rounded-lg">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p>revyll44@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 glass-card p-4 rounded-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p>Port-gentil . Gabon</p>
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

export default Contact;
