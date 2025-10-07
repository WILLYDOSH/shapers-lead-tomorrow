import { BookOpen, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <BookOpen className="h-8 w-8 text-secondary" />
              <span className="font-display font-bold text-2xl">Shapers</span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Learning Today, Leading Tomorrow. Empowering rural learners in Kenya 
              with quality education and opportunities.
            </p>
            <div className="flex space-x-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:text-secondary hover:bg-white/10"
                asChild
              >
                <a href="https://x.com/ShapersYouth" target="_blank" rel="noopener noreferrer">
                  <FaXTwitter className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:text-secondary hover:bg-white/10"
                asChild
              >
                <a href="https://www.instagram.com/shapers_youth/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:text-secondary hover:bg-white/10"
                asChild
              >
                <a href="https://www.youtube.com/@shapers_youth" target="_blank" rel="noopener noreferrer">
                  <Youtube className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:text-secondary hover:bg-white/10"
                asChild
              >
                <a href="https://www.facebook.com/shapers.ke/" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/about" className="text-white/80 hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="/programs" className="text-white/80 hover:text-secondary transition-colors">Our Programs</a></li>
              <li><a href="/support" className="text-white/80 hover:text-secondary transition-colors">Get Involved</a></li>
              <li><a href="/contact" className="text-white/80 hover:text-secondary transition-colors">Contact Us</a></li>
              <li><a href="/news" className="text-white/80 hover:text-secondary transition-colors">News & Updates</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Programs</h3>
            <ul className="space-y-3">
              <li><a href="/programs#mobilib" className="text-white/80 hover:text-secondary transition-colors">MobiLib</a></li>
              <li><a href="/programs#mobilab" className="text-white/80 hover:text-secondary transition-colors">MobiLab</a></li>
              <li><a href="/programs#inventio" className="text-white/80 hover:text-secondary transition-colors">Inventio</a></li>
              <li><a href="/programs#paragon" className="text-white/80 hover:text-secondary transition-colors">Paragon Plaza</a></li>
              <li><a href="/programs#aty" className="text-white/80 hover:text-secondary transition-colors">ATY</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                <p className="text-white/80">
                  Pearl Place Nanyuki<br />
                  Serving communities across Kenya
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <p className="text-white/80">+254 704 967 815</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                <p className="text-white/80">info@shapers.org</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2024 Shapers. All rights reserved. Building a brighter future through education.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-white/60 hover:text-secondary text-sm transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-white/60 hover:text-secondary text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;