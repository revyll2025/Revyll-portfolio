import revyllSunset from "@/assets/revyll-sunset.png";
import revyllWater from "@/assets/revyll-water.png";
import revyllIndoor from "@/assets/revyll-indoor.png";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <div className="glass-card rounded-2xl p-1 glow-primary">
                  <img 
                    src={revyllSunset} 
                    alt="Revyll at sunset" 
                    className="w-full h-auto rounded-xl object-cover"
                  />
                </div>
              </div>
              <div className="glass-card rounded-2xl p-1 border-primary/30">
                <img 
                  src={revyllWater} 
                  alt="Revyll by the water" 
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
              <div className="glass-card rounded-2xl p-1 border-secondary/30">
                <img 
                  src={revyllIndoor} 
                  alt="Revyll indoor" 
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
            </div>
          </div>

          {/* About Text */}
          <div className="space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">
              I'm a passionate Full Stack Web Developer who discovered my love for coding 
              through the intensive Le Wagon Bootcamp in Cape Town. What started as curiosity 
              evolved into a mission: building digital experiences that are not just functional, 
              but truly impactful.
            </p>

            <p className="text-lg text-foreground/90 leading-relaxed">
              My journey has equipped me with modern technologies and best practices — from 
              crafting intuitive user interfaces with <span className="text-primary font-semibold">React</span> and{" "}
              <span className="text-primary font-semibold">TypeScript</span>, to building robust 
              backends with <span className="text-secondary font-semibold">Ruby on Rails</span> and{" "}
              <span className="text-secondary font-semibold">NestJS</span>.
            </p>

            <div className="glass-card rounded-xl p-6 border-l-4 border-primary">
              <p className="text-foreground/80 italic">
                "I believe great software bridges technology and human needs — it should be 
                beautiful, scalable, and solve real problems."
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {["Modern UI/UX", "Full Stack Development", "Scalable Architecture", "Team Collaboration"].map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 glass-card rounded-full text-sm border-primary/30 hover:border-primary transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
