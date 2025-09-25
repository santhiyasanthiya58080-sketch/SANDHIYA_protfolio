import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Code, Lightbulb, Users, Target } from 'lucide-react';
import profileImage from '@/assets/profile-image.png';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: Code,
      title: 'Technical Excellence',
      description: 'Proficient in React.js, JavaScript, and modern web technologies with a focus on clean, scalable code.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Passionate about exploring AI concepts and IoT systems to create cutting-edge solutions.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Strong team player with experience in academic projects and professional internships.'
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Committed to delivering impactful digital solutions that enhance user experience.'
    }
  ];

  return (
    <section id="about" className="py-section bg-muted/30" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate developer dedicated to creating exceptional digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image & Info */}
          <div className="animate-on-scroll">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl transform rotate-6 opacity-20"></div>
              <Card className="relative p-8 glass hover-lift">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-primary rounded-full blur-lg opacity-30"></div>
                    <img
                      src="/lovable-uploads/99a63b43-e85a-4c2d-9f6e-e7300e212abf.png"
                      alt="Sandhiya S"
                      className="relative w-48 h-48 rounded-full object-cover border-4 border-primary/20"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-playfair font-semibold mb-2">
                      Sandhiya S
                    </h3>
                    <p className="text-primary font-medium mb-4">
                      Frontend Developer & React.js Specialist
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Based in Salem, Tamil Nadu, I'm a passionate Frontend Developer pursuing B.E. in 
                      Electrical and Electronics Engineering. With a strong foundation in React.js, 
                      JavaScript, and modern web technologies, I love crafting beautiful, responsive 
                      web applications that provide exceptional user experiences.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="space-y-6 animate-on-scroll">
            <div className="grid gap-6">
              {highlights.map((highlight, index) => (
                <Card
                  key={index}
                  className="p-6 hover-lift hover-glow transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-gradient-primary text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                      <highlight.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2 group-hover:gradient-text transition-all duration-300">
                        {highlight.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Quick Stats */}
            <Card className="p-6 bg-gradient-primary text-primary-foreground">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">8.65</div>
                  <div className="text-sm opacity-80">CGPA</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">3+</div>
                  <div className="text-sm opacity-80">Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">1+</div>
                  <div className="text-sm opacity-80">Internship</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;