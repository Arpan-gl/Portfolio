import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 px-6">
      <div className="container max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 space-y-4 text-center">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/10">Education</Badge>
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Academic Background
          </h2>
        </div>

        <Card className="border-border/60 bg-card/70 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="rounded-2xl border border-primary/20 bg-primary/10 p-3">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <CardTitle className="mb-2 text-2xl">
                  Bachelor of Technology in Computer Science & Engineering
                </CardTitle>
                <p className="text-lg text-muted-foreground">
                  Delhi Technological University
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap items-center gap-3">
              <div className="rounded-xl border border-primary/20 bg-primary/10 px-4 py-2">
                <p className="text-lg font-semibold text-primary">CGPA: 8.65/10</p>
              </div>
              <div className="rounded-xl border border-border/60 bg-secondary/40 px-4 py-2 text-sm text-muted-foreground">
                2024 - 2028
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Education;