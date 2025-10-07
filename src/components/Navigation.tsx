import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import shapersLogo from '@/assets/shapers-logo.jpg';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Leadership', path: '/leadership' },
    { name: 'Get Involved', path: '/support' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-card/95 backdrop-blur-md border-b shadow-soft sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-3">
            <img 
              src={shapersLogo} 
              alt="Shapers Logo" 
              className="h-10 w-10 rounded-full shadow-gold"
            />
            <span className="text-xl font-bold text-gradient-gold">
              Shapers
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `font-medium transition-smooth hover:text-primary ${
                    isActive ? 'text-primary border-b-2 border-primary' : 'text-foreground'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <Button variant="gradient" size="sm">
              Donate Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-card/95 backdrop-blur-md border-b shadow-soft py-4">
            <div className="flex flex-col space-y-4 px-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `font-medium transition-smooth hover:text-primary px-2 py-1 ${
                      isActive ? 'text-primary' : 'text-foreground'
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
              <Button variant="gradient" size="sm" className="self-start">
                Donate Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;