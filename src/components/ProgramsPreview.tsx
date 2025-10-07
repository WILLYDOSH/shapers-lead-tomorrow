import { Button } from '@/components/ui/button';
import { BookOpen, Laptop, Eye, Users, Trophy, ArrowRight } from 'lucide-react';

const programs = [
  {
    id: 'mobilib',
    title: 'MobiLib',
    description: 'Mobile Library bringing books and learning resources directly to rural communities.',
    icon: BookOpen,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    id: 'mobilab',
    title: 'MobiLab',
    description: 'Mobile Computer Laboratory providing digital access and technology skills.',
    icon: Laptop,
    color: 'text-secondary',
    bgColor: 'bg-secondary/10',
  },
  {
    id: 'inventio',
    title: 'Inventio',
    description: 'Industry visits and career exposure to inspire and guide students.',
    icon: Eye,
    color: 'text-accent',
    bgColor: 'bg-accent/10',
  },
  {
    id: 'paragon',
    title: 'Paragon Plaza',
    description: 'Teacher collaboration hub for sharing resources and best practices.',
    icon: Users,
    color: 'text-success',
    bgColor: 'bg-success/10',
  },
  {
    id: 'aty',
    title: 'ATY (Arrest Them Young)',
    description: 'Talent identification and nurturing program for young learners.',
    icon: Trophy,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
];

const ProgramsPreview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-6 text-gradient-primary">
            Our Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive programs designed to address every aspect of rural education, 
            from basic literacy to digital skills and career guidance.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {programs.map((program) => (
            <div
              key={program.id}
              className="bg-card p-8 rounded-xl shadow-soft hover-lift cursor-pointer group"
            >
              <div className={`w-16 h-16 rounded-full ${program.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <program.icon className={`h-8 w-8 ${program.color}`} />
              </div>
              <h3 className="font-display font-semibold text-xl mb-4">
                {program.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {program.description}
              </p>
              <div className={`text-sm font-medium ${program.color} opacity-0 group-hover:opacity-100 transition-opacity flex items-center`}>
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="gradient" size="lg" className="hover-lift">
            Explore All Programs
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsPreview;