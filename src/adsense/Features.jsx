import React from 'react';

const Features = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Powerful Features</h1>
          <p className="text-lg text-slate-600">Everything you need to send large files seamlessly.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-3">Auto-Compression</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Our advanced engine automatically zips large files before transfer, saving bandwidth and time.</p>
          </div>
          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-3">No Account Required</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Send files instantly without the friction of signing up or logging into a portal.</p>
          </div>
          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-3">Instant Email Delivery</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Recipients get a beautifully formatted email with a secure, one-time download link.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;