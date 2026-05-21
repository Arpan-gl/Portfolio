import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Github, ShieldCheck, Sparkles, Waypoints, Wrench } from "lucide-react";

const projects = [
  {
    title: "Deepfake Detector",
    description: "Production-grade multimodal deepfake detection system that combines Whisper, vision models, and Groq or Gemini to detect manipulated media with timestamp-level precision.",
    technologies: ["Whisper", "Vision Models", "Groq", "Gemini", "React", "Node.js"],
    github: "https://github.com/Arpan-gl/DeepFake-detector",
    highlight: "Multimodal AI",
    icon: ShieldCheck,
  },
  {
    title: "Juris - AI Legal Contract Analyzer",
    description: "AI-powered legal platform that summarizes contracts, spots risky clauses, compares versions side by side, and answers legal questions in real time.",
    technologies: ["Gemini", "LangChain", "RAG", "PDF Ingestion", "React", "TypeScript"],
    github: "https://github.com/Arpan-gl/jurisai",
    highlight: "Hackathon Finalist",
    icon: Sparkles,
  },
  {
    title: "Smart Career",
    description: "Career intelligence platform that scores resumes, analyzes GitHub profiles, and simulates interviews with structured, role-specific feedback.",
    technologies: ["ATS Scoring", "GitHub API", "FastAPI", "LangChain", "React", "LLMs"],
    github: "https://github.com/Arpan-gl/Smart-Career",
    highlight: "Career Intelligence",
    icon: Waypoints,
  },
  {
    title: "ResearchForge",
    description: "Automated ML research CLI that turns a topic into an end-to-end training workflow with dataset discovery, notebook generation, and iterative experiments.",
    technologies: ["Python", "CLI", "Jupyter", "Automated Research", "Local GPU", "Experimentation"],
    github: "https://github.com/Arpan-gl/ResearchForge",
    highlight: "Research Automation",
    icon: Wrench,
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 space-y-4 text-center">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/10">Portfolio</Badge>
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Selected Work
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Four projects from the resume, presented with a cleaner hierarchy and quicker access to the source code.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-border/60 bg-card/70 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_60px_hsl(var(--background)/0.45)]"
            >
              <div className="absolute right-5 top-5">
                <Badge className="border border-primary/30 bg-primary/10 text-primary hover:bg-primary/10">
                  {project.highlight}
                </Badge>
              </div>

              <CardHeader>
                <div className="space-y-4 pr-16">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                    <project.icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="text-2xl transition-colors group-hover:text-primary">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-7 text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary"
                        className="border border-border/60 bg-secondary/45 text-foreground hover:bg-secondary"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button
                    asChild
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      View on GitHub
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="icon" className="border-border/60 bg-transparent hover:bg-primary/10 hover:text-primary">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} on GitHub`}>
                      <Github className="h-4 w-4" />
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