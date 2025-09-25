import { useState, useEffect } from 'react';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'Frontend Developer',
    'React.js Specialist',
    'UI/UX Enthusiast',
    'Problem Solver'
  ];

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const speed = isDeleting ? 50 : 150;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, currentRoleIndex, isDeleting, roles]);

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Sandhiya_Resume.pdf';
    link.download = 'Sandhiya_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 pt-20">
        <div className="space-y-8 animate-fade-up">
          {/* Greeting */}
          <div className="space-y-2 mt-8">
            <p className="text-xl text-primary-foreground/80 font-medium text-center">
              Hello, I'm
            </p>
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-primary-foreground text-center">
              Sandhiya S
            </h1>
          </div>

          {/* Typing Animation */}
          <div className="h-16 flex items-center justify-center">
            <div className="text-2xl md:text-4xl font-semibold text-primary-foreground/90">
              <span>{displayText}</span>
              <span className="animate-pulse">|</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Innovative Frontend Developer with expertise in React.js, JavaScript, and modern web technologies. 
            Passionate about creating scalable, responsive applications and delivering exceptional digital experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              onClick={handleResumeDownload}
              size="lg"
              className="bg-accent hover:bg-accent-light text-accent-foreground hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
            <Button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            <a
              href="https://github.com/santhiyasanthiya58080-sketch"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:bg-primary-foreground/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              <Github className="w-6 h-6 text-primary-foreground" />
            </a>
            <a
              href="https://www.linkedin.com/in/sandhiya-s-451208280"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:bg-primary-foreground/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              <Linkedin className="w-6 h-6 text-primary-foreground" />
            </a>
            <a
              href="mailto:santhiyasanthiya58080@gmail.com"
              className="p-3 rounded-full glass hover:bg-primary-foreground/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              <Mail className="w-6 h-6 text-primary-foreground" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-primary-foreground/70" />
        </button>
      </div>
    </section>
  );
};

export default Hero;