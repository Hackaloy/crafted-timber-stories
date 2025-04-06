
import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  delay: number;
}

const ServiceCard = ({ title, description, icon, delay }: ServiceCardProps) => {
  return (
    <div 
      className="bg-cream p-8 rounded-lg shadow-md border border-wood-oak border-opacity-10 hover:shadow-xl transition-all duration-300 h-full flex flex-col opacity-0 animate-slide-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-wood-oak bg-opacity-10 rounded-full flex items-center justify-center text-wood-walnut">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-serif font-semibold mb-3 text-wood-walnut">{title}</h3>
      <p className="text-muted-foreground mb-6 flex-grow">{description}</p>
      <button className="text-wood-oak font-medium flex items-center mt-auto group">
        Learn more <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
      </button>
    </div>
  );
};

export default ServiceCard;
