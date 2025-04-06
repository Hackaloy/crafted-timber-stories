
const About = () => {
  return (
    <section id="about" className="bg-cream py-28 md:py-32">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-wood-oak opacity-50" />
            <img 
              src="/lovable-uploads/9aeba952-949a-4458-9bb6-7efa771e7b53.png" 
              alt="Craftsman at work" 
              className="w-full h-[500px] object-cover shadow-xl rounded-sm"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-wood-oak opacity-50" />
          </div>
          
          <div>
            <h2 className="section-title">Our Craft, Our Passion</h2>
            <p className="text-lg mb-6 leading-relaxed">
              At Avb Carpentry, we believe that every piece of timber has a story to tell. Founded in 2010, our boutique carpentry studio has been dedicated to creating bespoke wooden furnishings that blend traditional craftsmanship with contemporary design.
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              Each project is approached with meticulous attention to detail, from selecting the finest sustainably sourced woods to hand-finishing with natural oils that enhance the unique grain patterns and textures. We don't just build furniture; we create heirlooms designed to be passed down through generations.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex flex-col items-center bg-cream shadow-sm rounded-sm p-6 hover:shadow-md transition-shadow">
                <span className="text-4xl font-serif font-bold text-wood-walnut">12+</span>
                <span className="text-muted-foreground mt-2">Years of Experience</span>
              </div>
              <div className="flex flex-col items-center bg-cream shadow-sm rounded-sm p-6 hover:shadow-md transition-shadow">
                <span className="text-4xl font-serif font-bold text-wood-walnut">200+</span>
                <span className="text-muted-foreground mt-2">Projects Completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
