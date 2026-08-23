import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h1>
          <p className="text-lg text-slate-600">Start sending files for free, upgrade when you need more power.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Tier */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Basic</h3>
            <p className="text-slate-500 mb-6">Perfect for occasional transfers.</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-slate-900">Free</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center text-slate-600">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>Up to 2GB per transfer</span>
              </li>
              <li className="flex items-center text-slate-600">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>Standard auto-compression</span>
              </li>
              <li className="flex items-center text-slate-600">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>Files deleted after 24 hours</span>
              </li>
            </ul>
            <button className="w-full bg-slate-100 text-slate-800 font-medium py-3 px-4 rounded-xl hover:bg-slate-200 transition-colors">
              Get Started
            </button>
          </div>

          {/* Pro Tier */}
          <div className="bg-blue-600 p-8 rounded-2xl shadow-md border border-blue-500 flex flex-col relative">
            <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl uppercase tracking-wide">
              Popular
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
            <p className="text-blue-100 mb-6">For professionals and heavy users.</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-white">$9</span>
              <span className="text-blue-200">/month</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center text-blue-50">
                <Check className="w-5 h-5 text-blue-200 mr-3 flex-shrink-0" />
                <span>Up to 20GB per transfer</span>
              </li>
              <li className="flex items-center text-blue-50">
                <Check className="w-5 h-5 text-blue-200 mr-3 flex-shrink-0" />
                <span>Maximum compression engine</span>
              </li>
              <li className="flex items-center text-blue-50">
                <Check className="w-5 h-5 text-blue-200 mr-3 flex-shrink-0" />
                <span>Custom expiration times (up to 7 days)</span>
              </li>
              <li className="flex items-center text-blue-50">
                <Check className="w-5 h-5 text-blue-200 mr-3 flex-shrink-0" />
                <span>Password protection</span>
              </li>
            </ul>
            <button className="w-full bg-white text-blue-600 font-bold py-3 px-4 rounded-xl hover:bg-blue-50 transition-colors shadow-sm">
              Upgrade to Pro
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;