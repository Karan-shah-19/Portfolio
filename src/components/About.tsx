import { Code, Palette, Zap, Users } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  const skills = [
    {
      category: "Languages",
      items: ["Java", "Python", "JavaScript", "HTML & CSS", "SQL"]
    },
    {
      category: "Frontend",
      items: ["React", "HTML5", "CSS3"]
    },
    {
      category: "Backend",
      items: ["Java Servlets & JSP", "JDBC", "MYSQL"]
    },
    {
      category: "Tools & AI",
      items: ["Git & GitHub", "VS Code", "OpenAI API"]
    }
  ];

  const highlights = [
  {
    icon: Code,
    title: "Java & Backend",
    description: "Strong foundation in Java with hands-on experience in Servlets, JSP, JDBC, and MySQL for web applications."
  },
  {
    icon: Palette,
    title: "Web Development",
    description: "Building responsive and user-friendly interfaces using HTML, CSS, and React (beginner level)."
  },
  {
    icon: Zap,
    title: "Problem Solving",
    description: "Enjoy tackling coding challenges and applying data structures & algorithms to practical problems."
  },
  {
    icon: Users,
    title: "Continuous Learning",
    description: "Exploring new technologies like Python, AI tools, and modern frameworks to expand my skillset."
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
                    alt="Karan Shah - An aspiring developer"
                    className="w-full h-full object-cover rounded-2xl shadow-lg"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-primary/10"></div>
                </div>
              </div>

              <div className="space-y-4 text-center lg:text-left">
                <h3 className="text-2xl font-semibold text-foreground">
                  Full Stack Developer & Designer
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm Karan Shah, a B.Tech CSE student and passionate Full Stack Developer. 
                  I work with Java for backend development (Servlets, JSP, JDBC, MySQL) and 
                  also build responsive interfaces using HTML, CSS, JavaScript, React, and TailwindCSS.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                    Beyond web development, I'm exploring Python and AI tools, while strengthening my 
                    knowledge of data structures and algorithms. I enjoy learning new technologies 
                    and applying them to real-world projects like my To-Do App and university website.
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