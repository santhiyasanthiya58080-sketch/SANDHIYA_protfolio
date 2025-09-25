import { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send,
  Download,
  CheckCircle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Sandhiya_Resume.pdf';
    link.download = 'Sandhiya_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'santhiyasanthiya58080@gmail.com',
      href: 'mailto:santhiyasanthiya58080@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7695887448',
      href: 'tel:+917695887448'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Salem, Tamil Nadu – 636122',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/santhiyasanthiya58080-sketch',
      color: 'hover:text-foreground'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sandhiya-s-451208280',
      color: 'hover:text-primary'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:santhiyasanthiya58080@gmail.com',
      color: 'hover:text-accent'
    }
  ];

  return (
    <section id="contact" className="py-section bg-muted/30" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold gradient-text mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities and innovative projects. Let's connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-on-scroll">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Start a Conversation</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you have a project in mind, want to discuss opportunities, or just 
                want to say hello, I'd love to hear from you. I'm currently open to 
                new opportunities and exciting collaborations.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="p-4 hover-lift transition-all duration-300 group"
                >
                  <a
                    href={info.href}
                    className="flex items-center space-x-4"
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <div className="p-3 rounded-lg bg-gradient-primary text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium group-hover:gradient-text transition-all duration-300">
                        {info.value}
                      </p>
                    </div>
                  </a>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg glass hover:bg-card-hover transition-all duration-300 hover:-translate-y-1 hover:shadow-glow text-muted-foreground ${social.color}`}
                    title={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Resume Download Section */}
            <Card className="p-6 bg-gradient-primary text-primary-foreground">
              <div className="text-center">
                <Download className="w-12 h-12 mx-auto mb-4 opacity-80" />
                <h4 className="text-xl font-semibold mb-2">Download My Resume</h4>
                <p className="text-sm opacity-80 mb-4">
                  Get a complete overview of my skills, experience, and projects
                </p>
                <Button
                  onClick={handleResumeDownload}
                  className="bg-accent hover:bg-accent-light text-accent-foreground hover:shadow-glow transition-all duration-300"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 hover-glow animate-on-scroll">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or just say hello..."
                    required
                    rows={5}
                    className="mt-1"
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                I'll get back to you within 24 hours. Looking forward to connecting!
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;