
import GalleryImage from './GalleryImage';

const Gallery = () => {
  const projects = [
    { 
      id: 1, 
      src: '/lovable-uploads/cb7b76ca-19d4-47e4-aa35-a42f43609902.png', 
      alt: 'Wood railings and staircase installation',
      size: 'tall'
    },
    { 
      id: 2, 
      src: '/lovable-uploads/884315bb-b377-4d01-9326-39fc502377f6.png', 
      alt: 'Kitchen renovation with custom cabinetry',
      size: 'wide' 
    },
    { 
      id: 3, 
      src: '/lovable-uploads/c6139d06-cd6f-4afc-accd-1e3d52996582.png', 
      alt: 'Custom kitchen design with marble countertops',
      size: 'small' 
    },
    { 
      id: 4, 
      src: '/lovable-uploads/d509dc40-a709-444c-b3a1-239beb0c79ba.png', 
      alt: 'Custom staircase with wood and metal details',
      size: 'small' 
    },
    { 
      id: 5, 
      src: '/lovable-uploads/3daefa3f-df7b-4f85-a83a-6d511eacc883.png',
      alt: 'Bathroom vanity with wood cabinets',
      size: 'small' 
    },
    { 
      id: 6, 
      src: '/lovable-uploads/978d6af8-07a6-4167-adf8-55ba30453509.png', 
      alt: 'Custom wood bench with storage',
      size: 'wide' 
    },
    { 
      id: 7, 
      src: '/lovable-uploads/4f70bd3d-1616-4f2b-8c84-7c7f8a0d0bbf.png', 
      alt: 'Built-in cabinets around fireplace',
      size: 'tall' 
    },
    { 
      id: 8, 
      src: '/lovable-uploads/d4cfa920-11af-42ee-892d-55a04ead9d5e.png', 
      alt: 'Custom fireplace built-ins with lighted shelves',
      size: 'small' 
    }
  ];

  return (
    <section id="gallery" className="bg-cream py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of handcrafted wooden projects that showcase our attention to detail and commitment to quality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <GalleryImage 
              key={project.id}
              src={project.src} 
              alt={project.alt} 
              className={
                project.size === 'wide' 
                  ? 'col-span-1 md:col-span-2 aspect-video' 
                  : project.size === 'tall' 
                    ? 'col-span-1 row-span-2 aspect-[9/16]' 
                    : 'col-span-1 aspect-square'
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
