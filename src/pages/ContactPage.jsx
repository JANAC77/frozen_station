import React from 'react';
import ContactForm from '../components/ContactForm';
import { MapPin, Mail, Phone } from 'lucide-react';

const ContactPage = () => {
  return (
    <main className="pt-24 pb-20 bg-gray-50 min-h-screen relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-brand-secondary font-bold tracking-widest uppercase text-sm mb-3">Get In Touch</h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary">Contact Us</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-secondary to-blue-500 mx-auto mt-6 rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Whether you have a question about our products, pricing, or international shipping logistics, our team is ready to answer all your questions.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Information Side */}
          <div className="w-full lg:w-1/3 animate-fade-in-up animation-delay-100">
            <div className="bg-brand-primary p-8 md:p-10 rounded-3xl h-full flex flex-col justify-between shadow-2xl relative overflow-hidden">
              {/* Decorative background element for the card */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mt-10 -mr-10"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4 group">
                    <div className="bg-white/10 p-4 rounded-2xl text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white transition-colors">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">Our Office</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Bengaluru, Karnataka<br/>
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="bg-white/10 p-4 rounded-2xl text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white transition-colors">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">Email Us</h4>
                      <a href="mailto:sales.frozenstation@gmail.com" className="text-gray-300 hover:text-brand-secondary transition-colors">
                        sales.frozenstation@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="bg-white/10 p-4 rounded-2xl text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white transition-colors">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">Call Us</h4>
                      <a href="tel:+919036525993" className="text-gray-300 hover:text-brand-secondary transition-colors">
                        +91 90365 25993
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-white/10 relative z-10">
                <p className="text-gray-400 text-sm">
                  Available Monday - Friday, 9:00 AM to 6:00 PM (IST)
                </p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full lg:w-2/3 animate-fade-in-up animation-delay-200">
            <ContactForm />
          </div>
        </div>

      </div>
    </main>
  );
};

export default ContactPage;
