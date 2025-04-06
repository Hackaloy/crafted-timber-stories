
import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real implementation, you would handle form submission to a backend
    console.log('Form data submitted:', formData);
    
    toast({
      title: "Message Sent",
      description: "Thank you for your inquiry. We'll get back to you soon!",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="bg-cream py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your custom woodworking project? Reach out to discuss your vision and get a personalized quote.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-wood-ash focus:outline-none focus:ring-1 focus:ring-wood-walnut"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-wood-ash focus:outline-none focus:ring-1 focus:ring-wood-walnut"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block mb-2 font-medium">Phone (Optional)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-wood-ash focus:outline-none focus:ring-1 focus:ring-wood-walnut"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Project Description</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-md border border-wood-ash focus:outline-none focus:ring-1 focus:ring-wood-walnut resize-none"
                  required
                />
              </div>
              
              <button type="submit" className="btn-primary w-full">
                Get a Custom Quote
              </button>
            </form>
          </div>
          
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-serif font-semibold mb-6 text-wood-walnut">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-wood-oak bg-opacity-10 rounded-full flex items-center justify-center text-wood-walnut mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-wood-oak bg-opacity-10 rounded-full flex items-center justify-center text-wood-walnut mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-muted-foreground">info@woodworksstudio.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-wood-oak bg-opacity-10 rounded-full flex items-center justify-center text-wood-walnut mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Workshop Location</h4>
                    <p className="text-muted-foreground">123 Craftsman Lane,<br />Timbertown, CA 90210</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 lg:mt-0 h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
              {/* In a real implementation, you would embed an actual map here */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <p className="text-muted-foreground">Map Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
