import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 flex justify-center">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Contact Us</h1>
          <p className="text-slate-500 text-lg">Have a question or need support? We're here to help.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Email Block */}
          <div className="flex flex-col items-center p-6 bg-slate-50 rounded-xl border border-slate-100 text-center">
            <div className="bg-blue-100 p-4 rounded-full text-blue-600 mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Send an E-mail</h3>
            <a href="mailto:info@skylandweb.com" className="text-blue-600 hover:text-blue-700 transition-colors text-sm">
              info@skylandweb.com
            </a>
          </div>

          {/* Phone Block */}
          <div className="flex flex-col items-center p-6 bg-slate-50 rounded-xl border border-slate-100 text-center">
            <div className="bg-blue-100 p-4 rounded-full text-blue-600 mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Call Us</h3>
            <a href="tel:+13478151556" className="text-blue-600 hover:text-blue-700 transition-colors text-sm">
              +1 347 815 1556
            </a>
          </div>

          {/* Address Block */}
          <div className="flex flex-col items-center p-6 bg-slate-50 rounded-xl border border-slate-100 text-center">
            <div className="bg-blue-100 p-4 rounded-full text-blue-600 mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Office Address</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              9717 105TH ST 2ND FLR<br />
              OZONE PARK NY, 11416
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;