import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';
import shapersLogo from '@/assets/shapers-logo.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Logo Display */}
          <div className="flex justify-center mb-8">
            <img 
              src={shapersLogo} 
              alt="Shapers Logo" 
              className="h-32 w-32 rounded-full shadow-gold hover:scale-105 transition-smooth"
            />
          </div>
          
          {/* Main Headline */}
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-7xl mb-6 leading-tight">
            Learning Today,{' '}
            <span className="text-gradient-primary">Leading Tomorrow</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl lg:text-3xl mb-8 opacity-95 font-medium">
            Empowering learners with quality education and opportunities
          </p>

          {/* Description */}
          <p className="text-lg sm:text-xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Bridging the education gap in rural Kenya through innovative programs, 
            digital access, and holistic capacity-building that empowers learners 
            to reach their full potential.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="hover-lift">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary hover-lift">
              Support Us
              <Play className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;