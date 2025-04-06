
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-cream bg-opacity-90 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <h1 className="text-2xl font-serif font-bold text-wood-walnut">
            WoodWorks<span className="text-wood-oak">Studio</span>
          </h1>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="font-medium hover:text-wood-oak transition-colors">About</a>
          <a href="#services" className="font-medium hover:text-wood-oak transition-colors">Services</a>
          <a href="#gallery" className="font-medium hover:text-wood-oak transition-colors">Gallery</a>
          <a href="#testimonials" className="font-medium hover:text-wood-oak transition-colors">Testimonials</a>
          <a href="#contact" className="btn-primary">Get a Quote</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-wood-walnut"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cream py-4 px-6 shadow-xl animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a 
              href="#about" 
              className="font-medium hover:text-wood-oak transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#services" 
              className="font-medium hover:text-wood-oak transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#gallery" 
              className="font-medium hover:text-wood-oak transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Gallery
            </a>
            <a 
              href="#testimonials" 
              className="font-medium hover:text-wood-oak transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="btn-primary inline-block text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
