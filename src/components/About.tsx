import { Code, Palette, Zap, Users } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  const skills = [
    {
      category: "Languages",
      items: ["Java", "Python", "JavaScript", "TypeScript", "SQL"]
    },
    {
      category: "Frontend",
      items: ["React", "Vue.js", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Spring Boot", "Express", "PostgreSQL", "MongoDB"]
    },
    {
      category: "Tools & AI",
      items: ["Git", "Docker", "AWS", "OpenAI API", "TensorFlow"]
    }
  ];

  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices and modern design patterns."
    },
    {
      icon: Palette,
      title: "Design Focus",
      description: "Creating beautiful, intuitive user experiences with attention to detail and usability."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed, efficiency, and excellent user experience."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in teams using agile methodologies and clear communication."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate developer with a love for creating digital experiences that make a difference
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Profile and bio */}
            <div className="space-y-8">
              <div className="relative">
                <div className="w-64 h-64 mx-auto lg:mx-0 relative">
                  <img 
                    src={profilePhoto}
                    alt="Alex Thompson - Full Stack Developer"
                    className="w-full h-full object-cover rounded-2xl shadow-lg"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-accent/20"></div>
                </div>
              </div>

              <div className="space-y-4 text-center lg:text-left">
                <h3 className="text-2xl font-semibold text-foreground">
                  Full Stack Developer & Designer
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  With over 3 years of experience in web development, I specialize in creating 
                  robust, scalable applications using modern technologies. I'm passionate about 
                  clean code, user-centered design, and solving complex problems with elegant solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or mentoring fellow developers in the community.
                </p>
              </div>
            </div>

            {/* Right: Skills and highlights */}
            <div className="space-y-8">
              {/* Skills grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {skills.map((skillGroup, index) => (
                  <Card key={skillGroup.category} className="glass-card hover-lift">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-foreground mb-3">
                        {skillGroup.category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill) => (
                          <span 
                            key={skill}
                            className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <div key={highlight.title} className="flex items-start space-x-3 p-4 rounded-lg bg-surface hover:bg-surface-hover transition-smooth">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <highlight.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-medium text-foreground mb-1">{highlight.title}</h5>
                      <p className="text-sm text-muted-foreground">{highlight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;