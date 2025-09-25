import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Zap, Database, Smartphone } from 'lucide-react';

const Projects = () => {
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

  const projects = [
    {
      title: 'EV Charging Station Monitoring System',
      description: 'Designed an efficient charging system integrating PV with optimized controllers. Enhanced system reliability using algorithmic control and IoT data monitoring.',
      technologies: ['IoT', 'Algorithmic Control', 'PV Integration', 'Data Monitoring'],
      icon: Zap,
      type: 'Academic Project',
      features: [
        'Real-time monitoring dashboard',
        'Optimized charging algorithms',
        'Solar panel integration',
        'IoT sensor network'
      ]
    },
    {
      title: 'Portfolio Website',
      description: 'Built and deployed a responsive portfolio showcasing skills and achievements. Implemented modern UI/UX principles for professional presentation.',
      technologies: ['React.js', 'Tailwind CSS', 'Responsive Design', 'Modern UI/UX'],
      icon: Smartphone,
      type: 'Personal Project',
      features: [
        'Responsive design',
        'Modern animations',
        'Interactive components',
        'Performance optimized'
      ],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Task Manager App',
      description: 'Developed a CRUD-based task manager with dynamic UI using React.js. Integrated SQL for data storage and retrieval, improving task management efficiency.',
      technologies: ['React.js', 'SQL', 'CRUD Operations', 'Dynamic UI'],
      icon: Database,
      type: 'Full-Stack Project',
      features: [
        'Create, read, update, delete tasks',
        'Real-time updates',
        'Category management',
        'Progress tracking'
      ],
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-section bg-muted/30" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical skills and creative problem-solving abilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden hover-lift hover-glow animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Type Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="px-3 py-1 bg-gradient-primary text-primary-foreground text-xs font-medium rounded-full">
                  {project.type}
                </span>
              </div>

              <div className="p-6 h-full flex flex-col">
                {/* Project Icon */}
                <div className="mb-4">
                  <div className="p-3 rounded-lg bg-gradient-primary text-primary-foreground w-fit group-hover:scale-110 transition-transform duration-300">
                    <project.icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Project Info */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 text-primary">Key Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-gradient-primary rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-3 pt-4 border-t border-border">
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      className={project.liveUrl ? "flex-1" : "w-full"}
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        {project.liveUrl ? "Code" : "View Project"}
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              {/* Hover Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-on-scroll">
          <Card className="p-8 bg-gradient-primary text-primary-foreground">
            <h3 className="text-2xl font-semibold mb-4">
              Interested in my work?
            </h3>
            <p className="mb-6 opacity-90">
              I'm always excited to work on new projects and collaborate with amazing teams.
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent-light text-accent-foreground hover:shadow-glow transition-all duration-300"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Work Together
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;