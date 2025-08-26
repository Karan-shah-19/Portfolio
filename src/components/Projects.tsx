import { useState } from "react";
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Dialog, DialogContent } from "./ui/dialog";
import ecommerceImg from "@/assets/project-ecommerce.jpg";
import aiCodeImg from "@/assets/project-ai-code.jpg";
import taskflowImg from "@/assets/project-taskflow.jpg";
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management and payment processing.",
    longDescription: "A comprehensive e-commerce platform built with React and Node.js, featuring user authentication, shopping cart functionality, payment integration with Stripe, real-time inventory updates, and an admin dashboard for order management. The platform handles over 1000+ daily transactions with 99.9% uptime.",
    tags: ["React", "Node.js", "MongoDB", "Stripe API"],
    category: "Web Apps",
    image: ecommerceImg,
    screenshots: [ecommerceImg, ecommerceImg, ecommerceImg],
    demoUrl: "https://demo-ecommerce.com",
    githubUrl: "https://github.com/alex/ecommerce-platform",
    featured: true
  },
  {
    id: 2,
    title: "AI Code Reviewer",
    description: "AI-powered tool that analyzes code quality and provides improvement suggestions.",
    longDescription: "An intelligent code review assistant that leverages OpenAI's GPT models to analyze code quality, detect potential bugs, suggest optimizations, and ensure adherence to coding standards. Integrated with GitHub webhooks for automatic pull request reviews.",
    tags: ["Python", "OpenAI API", "Flask", "GitHub API"],
    category: "AI",
    image: aiCodeImg,
    screenshots: [aiCodeImg, aiCodeImg],
    demoUrl: "https://ai-code-reviewer.com",
    githubUrl: "https://github.com/alex/ai-code-reviewer",
    featured: true
  },
  {
    id: 3,
    title: "Task Management System",
    description: "Collaborative project management tool with real-time updates and team collaboration features.",
    longDescription: "A comprehensive task management system built with Java Spring Boot and React. Features include real-time collaboration, drag-and-drop task boards, time tracking, file uploads, team chat, and detailed analytics. Supports teams of up to 100 members with role-based permissions.",
    tags: ["Java", "Spring Boot", "React", "WebSocket"],
    category: "Java",
    image: taskflowImg,
    screenshots: [taskflowImg, taskflowImg, taskflowImg],
    demoUrl: "https://taskflow-demo.com",
    githubUrl: "https://github.com/alex/taskflow",
    featured: false
  },
  {
    id: 4,
    title: "Weather Analytics Dashboard",
    description: "Beautiful data visualization dashboard showing weather patterns and climate trends.",
    longDescription: "An interactive weather analytics dashboard that visualizes climate data using D3.js and Chart.js. Features include historical weather patterns, predictive modeling, interactive maps, and customizable reports. Processes data from multiple weather APIs and provides insights for agricultural and business planning.",
    tags: ["Vue.js", "D3.js", "Python", "API Integration"],
    category: "Design",
    image: "/api/placeholder/600/400",
    screenshots: ["/api/placeholder/800/600", "/api/placeholder/800/600"],
    demoUrl: "https://weather-analytics.com",
    githubUrl: "https://github.com/alex/weather-dashboard",
    featured: false
  },
  {
    id: 5,
    title: "Smart Home IoT Controller",
    description: "IoT device management system with mobile app and web dashboard.",
    longDescription: "A complete IoT ecosystem for smart home automation. Includes device discovery, real-time monitoring, automated scheduling, energy usage analytics, and voice control integration. Built with microservices architecture for scalability and reliability.",
    tags: ["IoT", "React Native", "Node.js", "MQTT"],
    category: "Web Apps",
    image: "/api/placeholder/600/400",
    screenshots: ["/api/placeholder/800/600", "/api/placeholder/800/600", "/api/placeholder/800/600"],
    demoUrl: "https://smarthome-demo.com",
    githubUrl: "https://github.com/alex/smart-home-iot",
    featured: false
  },
  {
    id: 6,
    title: "Machine Learning Trainer",
    description: "Visual tool for training and deploying machine learning models without coding.",
    longDescription: "A user-friendly platform that allows non-programmers to train, test, and deploy machine learning models through a visual interface. Supports various algorithms, automatic feature engineering, model comparison, and one-click deployment to cloud services.",
    tags: ["Python", "TensorFlow", "Flask", "Docker"],
    category: "AI",
    image: "/api/placeholder/600/400",
    screenshots: ["/api/placeholder/800/600", "/api/placeholder/800/600"],
    demoUrl: "https://ml-trainer-demo.com",
    githubUrl: "https://github.com/alex/ml-trainer",
    featured: false
  }
];

const categories = ["All", "Web Apps", "Java", "AI", "Design"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.screenshots.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.screenshots.length - 1 : prev - 1
      );
    }
  };

  const openProject = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of projects showcasing my skills in web development, AI integration, and user experience design
            </p>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="px-6 py-2"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id}
                className="group hover-lift cursor-pointer glass-card overflow-hidden"
                onClick={() => openProject(project)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-smooth group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-accent">{project.category}</span>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-smooth">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={closeProject}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
          {selectedProject && (
            <div className="relative">
              {/* Close button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-black/20 hover:bg-black/40 text-white"
                onClick={closeProject}
              >
                <X className="w-4 h-4" />
              </Button>

              {/* Image slider */}
              <div className="relative h-96 bg-muted">
                <img 
                  src={selectedProject.screenshots[currentImageIndex]}
                  alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {selectedProject.screenshots.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
                      onClick={nextImage}
                    >
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                    
                    {/* Image indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {selectedProject.screenshots.map((_, index) => (
                        <button
                          key={index}
                          className={`w-2 h-2 rounded-full transition-smooth ${
                            index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}
                          onClick={() => setCurrentImageIndex(index)}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Project details */}
              <div className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-2">
                      {selectedProject.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  {/* Tech stack */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex space-x-4 pt-4">
                    <Button variant="default" asChild>
                      <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;