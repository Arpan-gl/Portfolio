const Footer = () => {
  return (
    <footer className="border-t border-border/60 px-6 py-8">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center text-sm text-muted-foreground">
          <p className="mb-2">© {new Date().getFullYear()} Arpan Goyal. All rights reserved.</p>
          <p>Built with React, TypeScript, Tailwind CSS, and a little less clutter.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;