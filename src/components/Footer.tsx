const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border/50">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center text-muted-foreground">
          <p className="mb-2">
            © {new Date().getFullYear()} Arpan Goyal. All rights reserved.
          </p>
          <p className="text-sm">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;