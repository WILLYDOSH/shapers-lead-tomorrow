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
              Youth-led organization transforming rural education in Kenya
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display font-bold text-3xl sm:text-4xl mb-6 text-gradient-primary">
                  Our Story
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Shapers was born from a simple yet powerful realization: education is the 
                  greatest equalizer, but access to quality education remains unequal. 
                  Founded by young Kenyan leaders who experienced these challenges firsthand, 
                  we set out to bridge the education gap in rural communities.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  What started as a small initiative to bring books to remote villages has 
                  evolved into a comprehensive ecosystem of educational programs. We combine 
                  traditional learning resources with cutting-edge technology, creating 
                  pathways for rural learners to access opportunities previously unavailable to them.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, Shapers operates multiple programs across Kenya, reaching thousands 
                  of learners, teachers, and communities. Our youth-led approach ensures we 
                  understand the challenges and speak the language of those we serve.
                </p>
              </div>
              <div className="bg-muted/50 p-8 rounded-xl">
                <div className="grid grid-cols-2 gap-6 text-center">
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
          </div>
        </section>

        {/* Vision, Mission, Values */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Vision */}
              <div className="bg-card p-8 rounded-xl shadow-soft text-center hover-lift">
                <Heart className="h-12 w-12 text-secondary mx-auto mb-6" />
                <h3 className="font-display font-bold text-2xl mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Empowering learners with quality education and opportunities, 
                  creating a generation of leaders who will transform their communities.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-card p-8 rounded-xl shadow-soft text-center hover-lift">
                <Target className="h-12 w-12 text-primary mx-auto mb-6" />
                <h3 className="font-display font-bold text-2xl mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To bridge the education gap in rural Kenya by providing learning resources, 
                  digital access, and holistic capacity-building programs.
                </p>
              </div>

              {/* Approach */}
              <div className="bg-card p-8 rounded-xl shadow-soft text-center hover-lift">
                <Users className="h-12 w-12 text-accent mx-auto mb-6" />
                <h3 className="font-display font-bold text-2xl mb-4">Our Approach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Youth-led, community-centered, and technology-enabled solutions 
                  that create sustainable impact in rural education.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl sm:text-4xl mb-6 text-gradient-primary">
                Our Core Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <BookOpen className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-display font-semibold text-xl mb-3">Excellence</h3>
                <p className="text-muted-foreground">Commitment to quality in every program and interaction</p>
              </div>
              
              <div className="text-center">
                <Heart className="h-10 w-10 text-secondary mx-auto mb-4" />
                <h3 className="font-display font-semibold text-xl mb-3">Empathy</h3>
                <p className="text-muted-foreground">Understanding and addressing real community needs</p>
              </div>
              
              <div className="text-center">
                <Globe className="h-10 w-10 text-accent mx-auto mb-4" />
                <h3 className="font-display font-semibold text-xl mb-3">Innovation</h3>
                <p className="text-muted-foreground">Creative solutions for educational challenges</p>
              </div>
              
              <div className="text-center">
                <Users className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-display font-semibold text-xl mb-3">Collaboration</h3>
                <p className="text-muted-foreground">Working together with communities and partners</p>
              </div>
              
              <div className="text-center">
                <Award className="h-10 w-10 text-secondary mx-auto mb-4" />
                <h3 className="font-display font-semibold text-xl mb-3">Impact</h3>
                <p className="text-muted-foreground">Measurable, sustainable change in lives</p>
              </div>
              
              <div className="text-center">
                <Target className="h-10 w-10 text-accent mx-auto mb-4" />
                <h3 className="font-display font-semibold text-xl mb-3">Integrity</h3>
                <p className="text-muted-foreground">Transparency and accountability in all we do</p>
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