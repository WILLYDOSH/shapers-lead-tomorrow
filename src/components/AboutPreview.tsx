import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Target, Users } from 'lucide-react';

const AboutPreview = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-6 text-gradient-primary">
              About Shapers
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Shapers is a registered youth-led organization committed to advancing quality 
              education and equality for learners in rural communities. Guided by the belief 
              that every child deserves equal opportunities to learn and thrive.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Through our Mobile Library (MobiLib) and Mobile Computer Laboratory (MobiLab), 
              we bring books, digital tools, and modern learning resources directly to 
              underserved students in rural areas.
            </p>
            <Button variant="gradient" className="hover-lift">
              Read Our Full Story
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Stats & Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-xl shadow-soft hover-lift">
              <Heart className="h-8 w-8 text-secondary mb-4" />
              <h3 className="font-display font-semibold text-xl mb-2">Our Vision</h3>
              <p className="text-muted-foreground">
                Empowering learners with quality education and opportunities
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl shadow-soft hover-lift">
              <Target className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-display font-semibold text-xl mb-2">Our Mission</h3>
              <p className="text-muted-foreground">
                To bridge the education gap in rural Kenya by providing learning resources, 
                digital access, and holistic capacity-building that empowers learners to reach their full potential
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-soft hover-lift sm:col-span-2">
              <Users className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-display font-semibold text-xl mb-2">Youth-Led Impact</h3>
              <p className="text-muted-foreground">
                Driven by young leaders who understand the challenges and opportunities 
                in rural education
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;