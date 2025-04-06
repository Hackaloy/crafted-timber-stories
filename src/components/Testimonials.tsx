
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 relative bg-cover bg-center bg-fixed" style={{ 
      backgroundImage: "url('/lovable-uploads/d80ed1c7-9e36-48ac-ab11-a1cc8afdc867.png')"
    }}>
      <div className="absolute inset-0 bg-wood-walnut bg-opacity-90"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title text-white">Our Clients' Stories</h2>
          <p className="text-lg text-cream max-w-2xl mx-auto">
            Hear what our clients have to say about their experience working with WoodWorks Studio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard 
            quote="The custom dining table that WoodWorks Studio created for us is absolutely stunning. The attention to detail and the quality of craftsmanship exceeded our expectations."
            author="James Wilson"
            role="Homeowner"
            delay={0.1}
          />
          <TestimonialCard 
            quote="Our kitchen renovation was transformed by the custom cabinetry. The team was professional, punctual, and the finished product is both beautiful and functional."
            author="Sarah Thompson"
            role="Interior Designer"
            delay={0.2}
          />
          <TestimonialCard 
            quote="The restoration work done on our antique sideboard was impeccable. They preserved the character while giving it new life. Truly impressive work."
            author="Michael Chen"
            role="Antique Collector"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
