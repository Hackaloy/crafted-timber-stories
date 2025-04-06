import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-wood-walnut text-cream py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h3 className="text-3xl font-serif mb-6 text-cream">Avb<span className="text-wood-oak">Carpentry</span></h3>
            <p className="mb-6 text-cream text-opacity-80">
              Crafting custom wooden pieces with traditional craftsmanship and modern design sensibilities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-cream bg-opacity-10 flex items-center justify-center hover:bg-wood-oak transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-cream bg-opacity-10 flex items-center justify-center hover:bg-wood-oak transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-cream bg-opacity-10 flex items-center justify-center hover:bg-wood-oak transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-cream bg-opacity-10 flex items-center justify-center hover:bg-wood-oak transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-serif mb-4">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-cream text-opacity-80 hover:text-wood-oak transition-colors">Custom Furniture</a></li>
              <li><a href="#" className="text-cream text-opacity-80 hover:text-wood-oak transition-colors">Kitchen Installations</a></li>
              <li><a href="#" className="text-cream text-opacity-80 hover:text-wood-oak transition-colors">Wood Restoration</a></li>
              <li><a href="#" className="text-cream text-opacity-80 hover:text-wood-oak transition-colors">Home Renovations</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-cream text-opacity-80 hover:text-wood-oak transition-colors">About Us</a></li>
              <li><a href="#gallery" className="text-cream text-opacity-80 hover:text-wood-oak transition-colors">Portfolio</a></li>
              <li><a href="#testimonials" className="text-cream text-opacity-80 hover:text-wood-oak transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-cream text-opacity-80 hover:text-wood-oak transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif mb-4">Contact</h4>
            <address className="not-italic text-cream text-opacity-80">
              <p>123 Craftsman Lane</p>
              <p>Timbertown, CA 90210</p>
              <p className="mt-4">(555) 123-4567</p>
              <p className="mt-1">info@woodworksstudio.com</p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-cream border-opacity-20 text-center md:text-left md:flex md:justify-between md:items-center">
          <p className="text-cream text-opacity-70">
            &copy; {new Date().getFullYear()} Avb Carpentry. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-cream text-opacity-70 hover:text-wood-oak mr-6 transition-colors">Privacy Policy</a>
            <a href="#" className="text-cream text-opacity-70 hover:text-wood-oak transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
