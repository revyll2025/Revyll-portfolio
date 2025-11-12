import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Phone, Send, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const channels = [
    {
      icon: Phone,
      label: t('contact.channels.whatsapp'),
      value: "+1 (706) 786-3807",
      href: "https://wa.me/17067863807",
    },
    {
      icon: Mail,
      label: t('contact.channels.email'),
      value: "revyll44@gmail.com",
      href: "mailto:revyll44@gmail.com",
    },
    {
      icon: MapPin,
      label: t('contact.channels.location'),
      value: t('contact.location.value'),
      href: "https://maps.google.com/?q=Port-Gentil,Gabon",
    },
  ];

  const stats = [
    {
      label: t('contact.availability.responseLabel'),
      value: t('contact.availability.responseValue'),
    },
    {
      label: t('contact.availability.timezoneLabel'),
      value: t('contact.availability.timezoneValue'),
    },
    {
      label: t('contact.availability.languageLabel'),
      value: t('contact.availability.languageValue'),
    },
  ];

  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10 pointer-events-none" />
      <div className="absolute top-10 right-16 h-40 w-40 bg-primary/20 blur-3xl rounded-full opacity-40" />
      <div className="absolute -bottom-20 left-8 h-52 w-52 bg-secondary/25 blur-3xl rounded-full opacity-40" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <Badge className="glass-card border border-primary/30 bg-primary/10 text-primary uppercase tracking-[0.35em] text-xs">
            {t('contact.tagline')}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="relative overflow-hidden glass-card rounded-3xl border border-primary/20 bg-background/80 p-10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-70" />
            <div className="relative space-y-8">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold gradient-text">
                  {t('contact.form.title')}
                </h3>
                <p className="text-sm text-muted-foreground max-w-xl">
                  {t('contact.form.subtitle')}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                      {t('contact.name')}
                    </label>
                    <Input
                      id="name"
                      placeholder={t('contact.name')}
                      className="bg-background/60 border-primary/30 focus:border-primary focus:ring-0"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                      {t('contact.email')}
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t('contact.email')}
                      className="bg-background/60 border-primary/30 focus:border-primary focus:ring-0"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                    {t('contact.message')}
                  </label>
                  <Textarea
                    id="message"
                    placeholder={t('contact.message')}
                    rows={6}
                    className="bg-background/60 border-primary/30 focus:border-primary focus:ring-0 resize-none"
                    required
                  />
                </div>

                <Button type="submit" className="w-full h-12 text-sm uppercase tracking-[0.4em] glow-primary group">
                  {t('contact.send')}
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>

          <div className="space-y-8">
            <div className="relative overflow-hidden glass-card rounded-3xl border border-primary/25 bg-background/75 p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/20 opacity-70" />
              <div className="relative space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold uppercase tracking-[0.35em] text-primary/80">
                    {t('contact.availability.title')}
                  </h3>
                  <Badge className="border border-primary/40 bg-primary/15 text-primary">
                    {t('contact.availability.status')}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t('contact.availability.description')}
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {stats.map((stat) => (
                    <div key={stat.label} className="glass-card rounded-2xl border border-primary/20 bg-background/70 p-4">
                      <p className="text-[0.6rem] uppercase tracking-[0.45em] text-muted-foreground">
                        {stat.label}
                      </p>
                      <p className="mt-2 text-sm font-medium text-foreground">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden glass-card rounded-3xl border border-primary/25 bg-background/75 p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/20 opacity-70" />
              <div className="relative space-y-6">
                <h3 className="text-lg font-semibold uppercase tracking-[0.35em] text-primary/80">
                  {t('contact.info')}
                </h3>
                <div className="space-y-3">
                  {channels.map(({ icon: Icon, label, value, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between gap-4 rounded-2xl border border-transparent bg-background/70 px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/10"
                    >
                      <div className="flex items-center gap-4">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                          <Icon className="h-5 w-5 text-primary" />
                        </span>
                        <div>
                          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                            {label}
                          </p>
                          <p className="text-sm font-medium text-foreground break-words">
                            {value}
                          </p>
                        </div>
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-primary transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button asChild variant="secondary" className="glass-card border border-primary/30 bg-primary/15 text-primary">
                    <a href="https://wa.me/24177449404" target="_blank" rel="noreferrer">
                      {t('contact.cta.meeting')}
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-primary/40 text-primary hover:bg-primary/10">
                    <a href="mailto:revyll44@gmail.com">
                      {t('contact.cta.email')}
                    </a>
                  </Button>
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
