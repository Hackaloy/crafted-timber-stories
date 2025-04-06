
import { useState } from 'react';

interface GalleryImageProps {
  src: string;
  alt: string;
  className?: string;
}

const GalleryImage = ({ src, alt, className = "" }: GalleryImageProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        className={`overflow-hidden rounded-lg cursor-pointer ${className}`}
        onClick={() => setIsOpen(true)}
      >
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Simple Lightbox Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="max-w-5xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 bg-black bg-opacity-50 text-white w-10 h-10 rounded-full flex items-center justify-center"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
            <img 
              src={src} 
              alt={alt} 
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryImage;
