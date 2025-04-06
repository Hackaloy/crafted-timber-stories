
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden grain-texture bg-cream py-32">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-wood-walnut mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Crafting Timber, Creating Stories.
            </h1>
            <p className="text-lg md:text-xl text-wood-ebony mb-10 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Expert carpentry that blends traditional craftsmanship with modern design. We transform raw wood into functional art for your home.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center bg-wood-oak text-white py-3 px-8 rounded-md font-medium transition-colors duration-300 hover:bg-wood-walnut group opacity-0 animate-fade-in shadow-lg"
              style={{ animationDelay: '0.6s' }}
            >
              Get a Custom Quote
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </a>
          </div>
          
          {/* Hero Image */}
          <div className="md:w-1/2 opacity-0 animate-fade-in shadow-xl rounded-lg overflow-hidden" style={{ animationDelay: '0.4s' }}>
            <img 
              src="/lovable-uploads/39335803-65f1-477e-962e-28833276d93b.png" 
              alt="Avb Carpentry Craftsmanship" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
