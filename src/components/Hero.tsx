
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden grain-texture">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: "url('/lovable-uploads/39335803-65f1-477e-962e-28833276d93b.png')",
          filter: "brightness(0.85)",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-30" />
      
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-6 md:px-8 lg:px-12 py-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Crafting Timber, Creating Stories.
          </h1>
          <p className="text-lg md:text-xl text-cream mb-10 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
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
      </div>
    </div>
  );
};

export default Hero;
