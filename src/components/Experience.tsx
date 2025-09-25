import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { GraduationCap, Briefcase, Award, Calendar } from 'lucide-react';

const Experience = () => {
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

  const timelineItems = [
    {
      type: 'education',
      icon: GraduationCap,
      title: 'B.E. – Electrical and Electronics Engineering',
      organization: 'Mahendra Engineering College',
      period: '2021 – 2025',
      description: 'Currently pursuing Bachelor of Engineering with a focus on electrical systems and modern technology integration.',
      achievements: ['CGPA: 8.65', 'Strong foundation in problem-solving', 'Active participation in technical events'],
      highlight: 'CGPA: 8.65'
    },
    {
      type: 'internship',
      icon: Briefcase,
      title: 'IoT Systems Intern',
      organization: 'National Small Industries Corporation (NSIC), Chennai',
      period: '2023',
      description: 'Worked on IoT systems using AI concepts and explored real-time applications in industrial settings.',
      achievements: [
        'Hands-on experience with IoT devices',
        'Applied AI concepts in real-world scenarios',
        'Gained insights into industrial automation'
      ],
      highlight: 'AI & IoT Integration'
    },
    {
      type: 'education',
      icon: GraduationCap,
      title: 'Higher Secondary Education',
      organization: 'Government Higher Secondary School, Salem',
      period: '2021',
      description: 'Completed higher secondary education with strong performance in science and mathematics.',
      achievements: ['Score: 70.33%', 'Science and Mathematics focus', 'Foundation for engineering studies'],
      highlight: '70.33%'
    },
    {
      type: 'achievement',
      icon: Award,
      title: 'Professional Development',
      organization: 'Various Workshops & Events',
      period: '2021 – Present',
      description: 'Actively participated in workshops and technical symposiums to enhance skills and stay updated with industry trends.',
      achievements: [
        'Android Flutter Workshop',
        'Solar Gadgets Workshop',
        'E-waste Recycling Seminar',
        'Technical symposiums participation',
        'Coding events and competitions'
      ],
      highlight: 'Continuous Learning'
    }
  ];

  const getIconColor = (type: string) => {
    switch (type) {
      case 'education':
        return 'bg-primary text-primary-foreground';
      case 'internship':
        return 'bg-secondary text-secondary-foreground';
      case 'achievement':
        return 'bg-accent text-accent-foreground';
      default:
        return 'bg-primary text-primary-foreground';
    }
  };

  return (
    <section id="experience" className="py-section" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold gradient-text mb-6">
            Experience & Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey through education, professional experience, and continuous learning
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary opacity-30"></div>

            <div className="space-y-12">
              {timelineItems.map((item, index) => (
                <div
                  key={index}
                  className="relative animate-on-scroll"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline Node */}
                  <div className={`absolute left-6 w-4 h-4 rounded-full ${getIconColor(item.type)} border-2 border-background z-10`}></div>

                  {/* Content Card */}
                  <Card className="ml-20 hover-lift hover-glow group">
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 rounded-lg ${getIconColor(item.type)} group-hover:scale-110 transition-transform duration-300`}>
                            <item.icon className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold group-hover:gradient-text transition-all duration-300">
                              {item.title}
                            </h3>
                            <p className="text-primary font-medium">{item.organization}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm font-medium">{item.period}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="space-y-3">
                        {/* Highlight Badge */}
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-primary text-primary-foreground text-sm font-medium">
                          {item.highlight}
                        </div>

                        {/* Achievements */}
                        <div>
                          <h4 className="text-sm font-semibold mb-2 text-foreground">Key Highlights:</h4>
                          <ul className="space-y-1">
                            {item.achievements.map((achievement, achievementIndex) => (
                              <li key={achievementIndex} className="flex items-center text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-gradient-primary rounded-full mr-3"></div>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <div className="mt-16 animate-on-scroll">
            <Card className="p-8 bg-gradient-primary text-primary-foreground">
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">4+</div>
                  <div className="text-sm opacity-80">Years of Study</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">8.65</div>
                  <div className="text-sm opacity-80">Current CGPA</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">1+</div>
                  <div className="text-sm opacity-80">Internship</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">5+</div>
                  <div className="text-sm opacity-80">Workshops Attended</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;