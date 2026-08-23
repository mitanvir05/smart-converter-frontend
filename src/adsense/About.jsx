import React from 'react';
import { Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="max-w-3xl text-center mb-12">
        <div className="inline-flex bg-blue-600 text-white p-3 rounded-xl mb-6">
          <Zap className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">About SmartTransfer</h1>
        <p className="text-lg text-slate-600">Built by Skyland Web, we are on a mission to make large file sharing as simple and secure as sending a basic text message.</p>
      </div>
      
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 max-w-3xl w-full">
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">Our Story</h2>
        <p className="text-slate-600 mb-6 leading-relaxed">
          SmartTransfer was created out of a simple frustration: email attachments have rigid size limits, and traditional cloud storage requires too much setup just to send a single file. We built a streamlined, auto-compressing engine that handles the heavy lifting for you.
        </p>
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">Why Trust Us?</h2>
        <p className="text-slate-600 leading-relaxed">
          We prioritize your data privacy above all else. By adhering to strict 24-hour data deletion protocols and utilizing end-to-end encryption during transit, we ensure that your files remain yours.
        </p>
      </div>
    </div>
  );
};

export default About;