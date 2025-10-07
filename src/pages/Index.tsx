import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutPreview from '@/components/AboutPreview';
import ProgramsPreview from '@/components/ProgramsPreview';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutPreview />
        <ProgramsPreview />
        <CallToAction />
      </main>
      <Footer />
      <Newsletter />
    </div>
  );
};

export default Index;