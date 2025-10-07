import { Button } from '@/components/ui/button';
import { Heart, Handshake, Users, ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-6 text-white">
            Join Our Mission
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Together, we can transform education in rural Kenya. Every contribution, 
            partnership, and volunteer effort makes a lasting impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Donate */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center hover-lift">
            <Heart className="h-12 w-12 text-white mx-auto mb-6" />
            <h3 className="font-display font-semibold text-xl text-white mb-4">
              Donate
            </h3>
            <p className="text-white/90 mb-6">
              Your donation directly funds our programs and reaches learners who need it most.
            </p>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Donate Now
              <Heart className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Partner */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center hover-lift">
            <Handshake className="h-12 w-12 text-white mx-auto mb-6" />
            <h3 className="font-display font-semibold text-xl text-white mb-4">
              Partner
            </h3>
            <p className="text-white/90 mb-6">
              Collaborate with us to expand our reach and create sustainable educational solutions.
            </p>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Partner With Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Volunteer */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center hover-lift">
            <Users className="h-12 w-12 text-white mx-auto mb-6" />
            <h3 className="font-display font-semibold text-xl text-white mb-4">
              Volunteer
            </h3>
            <p className="text-white/90 mb-6">
              Share your skills and time to directly impact the lives of rural learners.
            </p>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Get Involved
              <Users className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="text-center">
          <p className="text-white/80 mb-6">
            Ready to make a difference? Choose how you'd like to contribute to our mission.
          </p>
          <Button variant="hero" size="lg" className="hover-glow">
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;