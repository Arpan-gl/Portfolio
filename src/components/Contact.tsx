import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="container max-w-4xl mx-auto text-center">
        <div className="space-y-6 mb-12">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/10">Contact</Badge>
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Let&apos;s build something useful
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            If you want to collaborate on AI, full-stack, or product work, these are the fastest ways to reach me.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <a href="mailto:arpang754@gmail.com">
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </a>
          </Button>
          
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-border/60 bg-transparent text-primary hover:bg-primary/10 hover:text-primary"
          >
            <a href="https://www.linkedin.com/in/arpangoyal7/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </Button>
          
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-border/60 bg-transparent text-primary hover:bg-primary/10 hover:text-primary"
          >
            <a href="https://github.com/Arpan-gl" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-border/60 bg-transparent text-primary hover:bg-primary/10 hover:text-primary"
          >
            <a href="https://drive.google.com/file/d/1ZPjNREZ6oiAoEhaLxvFXlXrTpVBmcG6X/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <FileText className="w-5 h-5 mr-2" />
              Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;