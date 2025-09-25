import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background py-12 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-accent rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-8">
            <h3 className="text-3xl font-playfair font-bold text-primary-light mb-2">
              Sandhiya S
            </h3>
            <p className="text-muted/80">
              Frontend Developer & React.js Specialist
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            {[
              { name: 'Home', href: '#home' },
              { name: 'About', href: '#about' },
              { name: 'Skills', href: '#skills' },
              { name: 'Projects', href: '#projects' },
              { name: 'Experience', href: '#experience' },
              { name: 'Contact', href: '#contact' }
            ].map((link) => (
              <button
                key={link.name}
                onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                className="text-muted/70 hover:text-primary-light transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-light transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-gradient-primary mx-auto mb-8"></div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted/60 text-sm flex items-center">
              © 2024 Sandhiya S. Made with{' '}
              <Heart className="w-4 h-4 mx-1 text-red-400 fill-current" />
              and lots of coffee
            </p>
            
            <div className="flex items-center gap-4">
              <p className="text-muted/60 text-sm">
                Built with React.js & Tailwind CSS
              </p>
              <Button
                onClick={scrollToTop}
                size="sm"
                className="bg-primary/20 hover:bg-primary/30 text-primary-light border border-primary/30 hover:border-primary transition-all duration-300"
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;