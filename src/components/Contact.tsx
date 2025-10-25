import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-secondary/20">
      <div className="container max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="space-y-6 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Interested in collaboration or have a project in mind? Feel free to reach out!
          </p>
        </div>

        {/* Contact Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all duration-300"
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
            className="bg-transparent border-primary/30 hover:bg-primary/10 text-primary hover:border-primary transition-all duration-300"
          >
            <a href="https://linkedin.com/in/arpangoyal" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </Button>
          
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-transparent border-primary/30 hover:bg-primary/10 text-primary hover:border-primary transition-all duration-300"
          >
            <a href="https://github.com/arpangoyal" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;