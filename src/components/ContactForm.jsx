import React from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value || 'Not provided';
    const email = e.target.email.value || 'Not provided';
    const phone = e.target.phone.value || 'Not provided';
    const company = e.target.company.value || 'Not provided';
    const message = e.target.message.value || 'Not provided';

    const subject = encodeURIComponent(`New Enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\nMessage:\n${message}`
    );

    window.location.href = `mailto:enquiry@frozenstation.com?subject=${subject}&body=${body}`;
  };

  return (
    <form className="bg-white p-5 sm:p-8 md:p-10 rounded-3xl w-full shadow-xl border border-gray-100" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            id="name"
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition-all"
            placeholder="e.g. Raj Kumar"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
          <input
            type="email"
            id="email"
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition-all"
            placeholder="e.g. raj@example.com"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
          <input
            type="tel"
            id="phone"
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition-all"
            placeholder="e.g. +91 98765 43210"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
          <input
            type="text"
            id="company"
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition-all"
            placeholder="e.g. Fresh Catch Traders"
          />
        </div>
      </div>

      <div className="mb-8">
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
        <textarea
          id="message"
          rows="5"
          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition-all resize-none"
          placeholder="Please describe your seafood requirements in detail..."
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-brand-primary hover:bg-brand-secondary text-white font-bold text-lg py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group"
      >
        Send Message
        <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </button>
    </form>
  );
};

export default ContactForm;
