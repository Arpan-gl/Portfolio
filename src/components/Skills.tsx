import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    title: "AI / ML",
    skills: ["PyTorch", "TensorFlow", "Hugging Face", "LangChain", "LangGraph", "Transformers"]
  },
  {
    title: "Backend & Data",
    skills: ["Node.js", "Express", "FastAPI", "MongoDB", "PostgreSQL", "REST APIs", "Redis"]
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML", "CSS"]
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Docker", "GitHub Actions", "Linux", "Postman", "VS Code"]
  },
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "C", "C++", "SQL"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-secondary/20">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 space-y-4 text-center">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/10">Skills</Badge>
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Technical Stack
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            The stack behind the projects above, grouped by the kind of work it supports.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="border-border/60 bg-card/70 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <CardHeader>
                <CardTitle className="text-xl text-primary">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="border border-border/60 bg-secondary/50 transition-all duration-300 hover:bg-primary/15 hover:text-primary"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;