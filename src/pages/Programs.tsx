import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { BookOpen, Laptop, Eye, Users, Trophy, ArrowRight, MapPin, Clock, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const programs = [
  {
    id: 'mobilib',
    title: 'MobiLib',
    subtitle: 'Mobile Library Program',
    description: 'Bringing books and learning resources directly to rural communities through our mobile library service.',
    fullDescription: 'MobiLib addresses the critical shortage of books and reading materials in rural schools and communities. Our mobile library visits remote areas on a regular schedule, providing access to textbooks, storybooks, educational materials, and digital resources. We also conduct reading sessions and literacy programs.',
    icon: BookOpen,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    features: [
      'Over 2,000 books covering various subjects and age groups',
      'Regular scheduled visits to remote communities',
      'Reading clubs and literacy programs',
      'Teacher training on reading instruction',
      'Digital resources and e-books access'
    ],
    impact: '15 communities served monthly, 500+ active readers'
  },
  {
    id: 'mobilab',
    title: 'MobiLab',
    subtitle: 'Mobile Computer Laboratory',
    description: 'Providing digital access and technology skills training through mobile computer laboratories.',
    fullDescription: 'MobiLab brings computer literacy and digital skills to areas with limited or no internet connectivity. Our mobile computer labs are equipped with laptops, tablets, and offline educational software, enabling students to learn essential digital skills.',
    icon: Laptop,
    color: 'text-secondary',
    bgColor: 'bg-secondary/10',
    features: [
      'Fully equipped mobile computer laboratory',
      'Basic to advanced computer literacy training',
      'Offline educational software and resources',
      'Digital citizenship and online safety training',
      'Certification programs for completed courses'
    ],
    impact: '300+ students trained in digital skills annually'
  },
  {
    id: 'inventio',
    title: 'Inventio',
    subtitle: 'Industry Exposure Program',
    description: 'Industry visits and career exposure to inspire and guide students toward their future paths.',
    fullDescription: 'Inventio connects rural students with professional environments and career opportunities they might never have encountered. Through organized industry visits, mentorship programs, and career guidance sessions, we help students understand various career paths and requirements.',
    icon: Eye,
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    features: [
      'Industry visits to tech companies, hospitals, and other organizations',
      'Mentorship programs with professionals',
      'Career guidance and counseling sessions',
      'Scholarship and opportunity matching',
      'Alumni network for ongoing support'
    ],
    impact: '200+ students exposed to various career paths yearly'
  },
  {
    id: 'paragon',
    title: 'Paragon Plaza',
    subtitle: 'Teacher Collaboration Hub',
    description: 'A collaboration platform for teachers to share resources, best practices, and support each other.',
    fullDescription: 'Paragon Plaza addresses teacher isolation and resource shortage by creating a collaborative network where educators can share teaching materials, discuss challenges, and learn from each other. The platform includes both online and offline components.',
    icon: Users,
    color: 'text-success',
    bgColor: 'bg-success/10',
    features: [
      'Online platform for resource sharing',
      'Regular teacher meetups and workshops',
      'Peer-to-peer learning and mentoring',
      'Curriculum development collaboration',
      'Professional development opportunities'
    ],
    impact: '150+ teachers actively participating in the network'
  },
  {
    id: 'aty',
    title: 'ATY (Arrest Them Young)',
    subtitle: 'Talent Identification & Nurturing',
    description: 'Early identification and nurturing of exceptional talents in rural learners.',
    fullDescription: 'ATY focuses on identifying and nurturing special talents in young learners - whether in academics, arts, sports, or other areas. We provide specialized training, resources, and opportunities to help these talents flourish.',
    icon: Trophy,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    features: [
      'Talent identification assessments',
      'Specialized coaching and mentoring',
      'Competition and showcase opportunities',
      'Scholarship and sponsorship matching',
      'Long-term talent development tracking'
    ],
    impact: '100+ talents identified and nurtured to date'
  },
];

const Programs = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display font-bold text-4xl sm:text-5xl mb-6">
              Our Programs
            </h1>
            <p className="text-xl sm:text-2xl opacity-90 max-w-3xl mx-auto">
              Comprehensive educational solutions addressing every aspect of rural learning
            </p>
          </div>
        </section>

        {/* Programs Detail */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {programs.map((program, index) => (
                <div
                  key={program.id}
                  id={program.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className={`w-16 h-16 rounded-full ${program.bgColor} flex items-center justify-center mb-6`}>
                      <program.icon className={`h-8 w-8 ${program.color}`} />
                    </div>
                    <h2 className="font-display font-bold text-3xl mb-2">{program.title}</h2>
                    <p className={`text-lg font-medium mb-4 ${program.color}`}>{program.subtitle}</p>
                    <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                      {program.fullDescription}
                    </p>

                    {/* Features */}
                    <div className="mb-8">
                      <h3 className="font-display font-semibold text-lg mb-4">Key Features:</h3>
                      <ul className="space-y-2">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <ArrowRight className={`h-4 w-4 mt-1 ${program.color} flex-shrink-0`} />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Impact Stats */}
                    <div className="bg-muted/50 p-6 rounded-lg mb-6">
                      <div className="flex items-center space-x-2 mb-2">
                        <Target className={`h-5 w-5 ${program.color}`} />
                        <h4 className="font-semibold">Impact</h4>
                      </div>
                      <p className="text-muted-foreground">{program.impact}</p>
                    </div>

                    <Button variant="gradient" className="hover-lift">
                      Learn More About {program.title}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>

                  {/* Visual/Stats */}
                  <div className={`bg-muted/30 p-8 rounded-xl ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="text-center">
                      <div className={`w-24 h-24 rounded-full ${program.bgColor} flex items-center justify-center mx-auto mb-6`}>
                        <program.icon className={`h-12 w-12 ${program.color}`} />
                      </div>
                      <h3 className="font-display font-bold text-2xl mb-4">{program.title}</h3>
                      <p className="text-muted-foreground mb-6">{program.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-card p-4 rounded-lg">
                          <MapPin className={`h-6 w-6 ${program.color} mx-auto mb-2`} />
                          <div className="text-sm text-muted-foreground">Coverage</div>
                          <div className="font-semibold">Rural Kenya</div>
                        </div>
                        <div className="bg-card p-4 rounded-lg">
                          <Clock className={`h-6 w-6 ${program.color} mx-auto mb-2`} />
                          <div className="text-sm text-muted-foreground">Schedule</div>
                          <div className="font-semibold">Year-round</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display font-bold text-3xl mb-6">
              Want to Support Our Programs?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Every program depends on community support. Join us in transforming rural education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Donate to Programs
              </Button>
              <Button variant="hero" size="lg">
                Volunteer With Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Programs;