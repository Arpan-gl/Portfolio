import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowUpRight,
  BookOpen,
  Code2,
  FileText,
  Github,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const focusAreas = [
  {
    title: "AI / ML Systems",
    description: "Deepfake detection, RAG pipelines, and model-assisted products with measurable outcomes.",
    icon: Sparkles,
  },
  {
    title: "Full-Stack Apps",
    description: "React, Node, FastAPI, and MongoDB experiences that are fast to use and easy to maintain.",
    icon: Code2,
  },
  {
    title: "Career Intelligence",
    description: "ATS scoring, GitHub analysis, and interview simulation tools that help people move faster.",
    icon: BookOpen,
  },
  {
    title: "Research Automation",
    description: "CLI tooling and notebook workflows that turn ideas into experiments with less friction.",
    icon: Layers3,
  },
];

const highlights = [
  "3rd Place - Hack.IT@BVP",
  "LeetCode active problem solver",
  "Codeforces competitive programmer",
  "Delhi Technological University",
];

const Hero = () => {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-8 md:py-10">
      <div className="absolute inset-0 -z-10">
        <img src={heroBg} alt="Ambient portfolio backdrop" className="h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.16),transparent_28%),radial-gradient(circle_at_bottom_right,hsl(var(--accent)/0.12),transparent_24%),linear-gradient(180deg,hsl(var(--background)/0.92),hsl(var(--background)))]" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[320px_1fr]">
        <Card className="sticky top-6 h-fit overflow-hidden border-border/60 bg-card/85 shadow-[0_24px_80px_hsl(var(--background)/0.55)] backdrop-blur-xl">
          <CardContent className="space-y-6 p-6">
            <div className="rounded-[2rem] border border-white/5 bg-gradient-to-br from-white/8 via-white/5 to-transparent p-6 text-center">
              <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-[2rem] border border-primary/20 bg-secondary/70 text-4xl font-bold text-primary shadow-[0_0_35px_hsl(var(--primary)/0.14)]">
                AG
              </div>
              <div className="mt-5 space-y-2">
                <h1 className="text-3xl font-extrabold tracking-tight text-foreground">Arpan Goyal</h1>
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-primary/90">AI & Full-Stack Engineer</p>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/10">Computer Science Engineer</Badge>
              </div>
            </div>

            <div className="space-y-3 rounded-2xl border border-white/5 bg-secondary/40 p-4 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>arpang754@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>New Delhi, India</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="rounded-2xl border border-white/5 bg-secondary/40 p-4">
                <div className="text-2xl font-bold text-primary">4</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Projects</div>
              </div>
              <div className="rounded-2xl border border-white/5 bg-secondary/40 p-4">
                <div className="text-2xl font-bold text-primary">1</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Hackathon</div>
              </div>
            </div>

            <div className="space-y-3">
              <Button asChild className="w-full justify-start gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="https://drive.google.com/file/d/1ZPjNREZ6oiAoEhaLxvFXlXrTpVBmcG6X/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                  <FileText className="h-4 w-4" />
                  Open Resume
                  <ArrowUpRight className="ml-auto h-4 w-4" />
                </a>
              </Button>

              <div className="flex items-center justify-center gap-3">
                <Button asChild size="icon" variant="outline" className="border-border/60 bg-transparent hover:bg-primary/10 hover:text-primary">
                  <a href="https://github.com/Arpan-gl" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="icon" variant="outline" className="border-border/60 bg-transparent hover:bg-primary/10 hover:text-primary">
                  <a href="https://www.linkedin.com/in/arpangoyal7/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="icon" variant="outline" className="border-border/60 bg-transparent hover:bg-primary/10 hover:text-primary">
                  <a href="mailto:arpang754@gmail.com" aria-label="Email Arpan">
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <div className="rounded-[2rem] border border-border/60 bg-card/75 p-4 shadow-[0_24px_80px_hsl(var(--background)/0.45)] backdrop-blur-xl">
            <div className="flex flex-wrap items-center gap-3">
              <div className="mr-auto flex flex-wrap gap-2">
                {[
                  ["About", "#about"],
                  ["Projects", "#projects"],
                  ["Skills", "#skills"],
                  ["Education", "#education"],
                  ["Contact", "#contact"],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="rounded-xl border border-border/60 px-4 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
                  >
                    {label}
                  </a>
                ))}
              </div>
              <Button asChild variant="outline" className="border-primary/30 bg-transparent text-primary hover:bg-primary/10 hover:text-primary">
                <a href="https://drive.google.com/file/d/1ZPjNREZ6oiAoEhaLxvFXlXrTpVBmcG6X/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </Button>
            </div>
          </div>

          <section className="rounded-[2rem] border border-border/60 bg-card/80 p-6 shadow-[0_24px_80px_hsl(var(--background)/0.45)] backdrop-blur-xl md:p-8">
            <div className="max-w-4xl space-y-6">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/10">About Me</Badge>
                <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                  I build useful products that feel calm, fast, and easy to trust.
                </h2>
                <p className="max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
                  I am an AI & Full-Stack Engineer from Delhi Technological University, focused on turning complex ideas into clear web products.
                  My work spans multimodal AI, legal and career tools, and automation workflows that reduce friction for real users.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {focusAreas.map((area) => {
                  const Icon = area.icon;

                  return (
                    <Card key={area.title} className="border-border/60 bg-secondary/35 transition-transform duration-300 hover:-translate-y-1 hover:border-primary/40">
                      <CardContent className="space-y-3 p-5">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-bold">{area.title}</h3>
                        <p className="text-sm leading-6 text-muted-foreground">{area.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                {highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="rounded-2xl border border-border/60 bg-secondary/30 px-4 py-4 text-sm font-medium text-foreground/90"
                  >
                    {highlight}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Hero;