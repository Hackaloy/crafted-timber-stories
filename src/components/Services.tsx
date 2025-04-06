
import ServiceCard from './ServiceCard';
import { Sofa, ChefHat, Paintbrush, Home } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="bg-parchment py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a range of woodworking services to bring your vision to life, utilizing traditional techniques and modern innovations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard 
            title="Custom Furniture" 
            description="Bespoke pieces designed for your space, from dining tables to statement shelving, crafted with the finest hardwoods."
            icon={<Sofa size={24} />}
            delay={0.1}
          />
          <ServiceCard 
            title="Kitchen Installations" 
            description="Handcrafted cabinets, islands, and countertops that combine functionality with timeless aesthetic appeal."
            icon={<ChefHat size={24} />}
            delay={0.2}
          />
          <ServiceCard 
            title="Wood Restoration" 
            description="Revitalize antique furniture and architectural elements to preserve their heritage while enhancing their beauty."
            icon={<Paintbrush size={24} />}
            delay={0.3}
          />
          <ServiceCard 
            title="Home Renovations" 
            description="Custom built-ins, staircases, and architectural details that transform your living space with warm, natural elements."
            icon={<Home size={24} />}
            delay={0.4}
          />
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="btn-primary">
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
