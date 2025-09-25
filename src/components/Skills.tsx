import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Code, Database, Globe, Wrench } from 'lucide-react';

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript (ES6+)', level: 85 },
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'Bootstrap', level: 80 }
      ]
    },
    {
      icon: Database,
      title: 'Database & Backend',
      skills: [
        { name: 'SQL Basics', level: 70 },
        { name: 'MySQL', level: 75 },
        { name: 'API Integration', level: 80 },
        { name: 'Redux Basics', level: 65 }
      ]
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      skills: [
        { name: 'Responsive Design', level: 92 },
        { name: 'Git & GitHub', level: 85 },
        { name: 'Performance Optimization', level: 78 },
        { name: 'Cross-browser Compatibility', level: 85 }
      ]
    },
    {
      icon: Wrench,
      title: 'Tools & Others',
      skills: [
        { name: 'AI Prompting', level: 80 },
        { name: 'Problem Solving', level: 90 },
        { name: 'Java Basics', level: 60 },
        { name: 'IoT Concepts', level: 70 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
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

  const ProgressBar = ({ skill, index }: { skill: { name: string; level: number }, index: number }) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
      if (isVisible) {
        const timer = setTimeout(() => {
          setWidth(skill.level);
        }, index * 100);
        return () => clearTimeout(timer);
      }
    }, [isVisible, skill.level, index]);

    return (
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">{skill.name}</span>
          <span className="text-sm text-muted-foreground">{skill.level}%</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${width}%` }}
          />
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-section" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold gradient-text mb-6">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className="p-8 hover-lift hover-glow animate-on-scroll group"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 rounded-lg bg-gradient-primary text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold group-hover:gradient-text transition-all duration-300">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <ProgressBar
                    key={skillIndex}
                    skill={skill}
                    index={categoryIndex * category.skills.length + skillIndex}
                  />
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 animate-on-scroll">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Additional Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Responsive Design',
              'Mobile-First Development',
              'Performance Optimization',
              'SEO Best Practices',
              'Agile Methodology',
              'Code Review',
              'Testing & Debugging',
              'UI/UX Principles',
              'Team Collaboration',
              'Technical Documentation'
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-primary text-primary-foreground rounded-full text-sm font-medium hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;