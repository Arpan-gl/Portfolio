import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "C", "C++", "SQL", "HTML", "CSS", "JavaScript","TypeScript","Rust"]
  },
  {
    title: "Frameworks & Libraries",
    skills: ["TensorFlow", "PyTorch", "Anchor", "LangChain", "Scikit-Learn", "Pandas", "FastAPI", "ReactJS", "ExpressJS", "NodeJS", "MongoDB", "NextJS"]
  },
  {
    title: "Tools & Platforms",
    skills: ["GitHub", "Linux", "Git", "VS Code", "Docker", "Kubernetes", "Hugging Face", "GitHub Actions"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-secondary/20">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Technologies and tools I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.1)]"
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
                      className="bg-secondary hover:bg-primary/20 hover:text-primary hover:border-primary/30 border border-border/50 transition-all duration-300"
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