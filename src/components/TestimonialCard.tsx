
interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  delay: number;
}

const TestimonialCard = ({ quote, author, role, delay }: TestimonialCardProps) => {
  return (
    <div 
      className="bg-cream bg-opacity-95 p-8 rounded-lg shadow-md border border-wood-oak border-opacity-10 opacity-0 animate-slide-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <svg 
        width="45" 
        height="36" 
        className="mb-6 text-wood-oak opacity-30"
        viewBox="0 0 45 36" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13.416 36C9.552 36 6.552 34.8 4.416 32.4C2.352 30 1.32 26.4 1.32 21.6C1.32 15.6 2.856 10.776 5.928 7.128C9.072 3.48 13.344 1.2 18.744 0.288L19.8 3.456C16.584 4.224 13.92 5.808 11.808 8.208C9.696 10.608 8.496 13.512 8.208 16.92C8.28 16.848 8.64 16.8 9.288 16.776C9.936 16.752 10.44 16.728 10.8 16.704C12.6 16.704 14.352 17.448 16.056 18.936C17.76 20.424 18.612 22.44 18.612 24.984C18.612 27.528 17.76 29.664 16.056 31.392C14.424 33.12 12.216 36 13.416 36ZM35.724 36C31.86 36 28.86 34.8 26.724 32.4C24.66 30 23.628 26.4 23.628 21.6C23.628 15.6 25.164 10.776 28.236 7.128C31.38 3.48 35.652 1.2 41.052 0.288L42.108 3.456C38.892 4.224 36.228 5.808 34.116 8.208C32.004 10.608 30.804 13.512 30.516 16.92C30.588 16.848 30.948 16.8 31.596 16.776C32.244 16.752 32.748 16.728 33.108 16.704C34.908 16.704 36.66 17.448 38.364 18.936C40.068 20.424 40.92 22.44 40.92 24.984C40.92 27.528 40.068 29.664 38.364 31.392C36.732 33.12 34.524 36 35.724 36Z" fill="currentColor"/>
      </svg>
      
      <p className="mb-6 italic text-gray-700">{quote}</p>
      
      <div className="flex items-center">
        <div className="w-1 h-12 bg-wood-oak mr-4"></div>
        <div>
          <h4 className="font-serif font-semibold text-wood-walnut">{author}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
