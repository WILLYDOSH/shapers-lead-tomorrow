import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Heart, Target, Users, Award, BookOpen, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display font-bold text-4xl sm:text-5xl mb-6">
              About Shapers
            </h1>
            <p className="text-xl sm:text-2xl opacity-90 max-w-3xl mx-auto">
              Learning Today, Leading Tomorrow
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              {/* Vision */}
              <div className="bg-card p-8 rounded-xl shadow-soft text-center hover-lift">
                <Heart className="h-12 w-12 text-secondary mx-auto mb-6" />
                <h3 className="font-display font-bold text-2xl mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Empowering learners with quality education and opportunities
                </p>
              </div>

              {/* Mission */}
              <div className="bg-card p-8 rounded-xl shadow-soft text-center hover-lift">
                <Target className="h-12 w-12 text-primary mx-auto mb-6" />
                <h3 className="font-display font-bold text-2xl mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To bridge the education gap in rural Kenya by providing learning resources, 
                  digital access, and holistic capacity-building that empowers learners to reach their full potential.
                </p>
              </div>
            </div>

            {/* About Us Content */}
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display font-bold text-3xl sm:text-4xl mb-8 text-gradient-primary text-center">
                About Us
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Shapers is a registered youth-led organization committed to advancing quality education 
                  and equality for learners in rural communities. Guided by the belief that every child 
                  deserves equal opportunities to learn and thrive, we work to break down barriers that 
                  limit access to essential educational resources.
                </p>
                <p>
                  Our approach combines the provision of basic learning materials with innovative solutions 
                  that bring digital access closer to underserved students. Through our Mobile Library (MobiLib) 
                  and Mobile Computer Laboratory (MobiLab), learners in rural areas can access books, digital 
                  tools, and modern learning resources that enhance academic performance and broaden their horizons.
                </p>
                <p>
                  Beyond classroom learning, Shapers is dedicated to nurturing the full potential of students 
                  by building their individual capacity and exposing them early to diverse fields of interest. 
                  We also prioritize co-curricular activities as a pathway for talent identification, growth, 
                  and holistic development.
                </p>
                <p>
                  By fostering inclusive access to education and empowering students to pursue their passions, 
                  Shapers contributes to building resilient communities and preparing the next generation of leaders. 
                  We invite partners, stakeholders, and donors to join us in shaping a future where every learner 
                  regardless of background has the tools and opportunities to succeed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-card p-8 rounded-xl shadow-soft">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-muted-foreground">Students Reached</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-2">50+</div>
                  <div className="text-muted-foreground">Communities Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">200+</div>
                  <div className="text-muted-foreground">Teachers Supported</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">5</div>
                  <div className="text-muted-foreground">Active Programs</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;