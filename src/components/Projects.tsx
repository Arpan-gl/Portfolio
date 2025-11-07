import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Deepfake-detector",
    description: "Full-stack web application for multi-modal misinformation detection using advanced AI models. Detects fake news, manipulated images, audio deepfakes, and video forgeries.",
    technologies: ["Full-Stack Development", "AI/ML", "Google Gemini", "Groq LLAMA", "Whisper", "DeepFake Detection"],
    github: "https://github.com/Arpan-gl/deepfake-detector",
    highlight: "Multi-Modal AI Detection"
  },
  {
    title: "Juris",
    description: "Interactive, AI-powered legal guidance web application recognized as Top 8 in Hackathon. Provides accessible legal information and guidance through modern AI technologies.",
    technologies: ["Modern Frontend", "AI Integration", "GitHub Workflows", "React"],
    github: "https://github.com/Arpan-gl/juris",
    highlight: "Top 20 Hackathon"
  },
  {
    title: "Smart Career",
    description: "AI-driven career tool that analyzes GitHub repositories and resumes to generate professional summaries, optimize for ATS systems, and provide personalized interview practice.",
    technologies: ["AI Integration", "Full-Stack Development", "User-Focused Design", "GitHub API"],
    github: "https://github.com/Arpan-gl/smart-career",
    highlight: "Career Optimization AI"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building innovative solutions with AI/ML and modern web technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group relative bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)]"
            >
              {/* Highlight Badge */}
              <div className="absolute -top-3 left-6">
                <Badge className="bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30">
                  {project.highlight}
                </Badge>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </div>
                  <Button
                    asChild
                    size="icon"
                    variant="ghost"
                    className="shrink-0 hover:bg-primary/10 hover:text-primary"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </CardHeader>

              <CardContent>
                {/* Technologies */}
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-primary">Key Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary"
                        className="bg-secondary/50 hover:bg-secondary text-foreground border border-border/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* View Project Button */}
                <div className="mt-6">
                  <Button
                    asChild
                    className="w-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 hover:border-primary transition-all duration-300"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      View on GitHub
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;