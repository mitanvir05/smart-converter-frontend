import React from 'react';
import { Users, Globe, Server, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-20 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            We make sending large files <br />
            <span className="text-blue-600">effortless.</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            SmartTransfer was born from a simple frustration: "Why is it so hard to email a video?" We built a smarter way to move data.
          </p>
        </div>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>
      </section>

      {/* 2. OUR MISSION GRID */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            {/* Left Side: Text */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                In a world of 4K videos and high-res design files, the 25MB email limit feels prehistoric. We set out to build a bridge between convenience and capacity.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Our technology doesn't just move files; it optimizes them. By combining intelligent compression with secure cloud infrastructure, we ensure your data arrives fast, safe, and intact.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <h4 className="font-bold text-2xl text-blue-600 mb-1">10k+</h4>
                  <p className="text-sm text-slate-500">Files Transferred</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <h4 className="font-bold text-2xl text-emerald-600 mb-1">99.9%</h4>
                  <p className="text-sm text-slate-500">Uptime Reliability</p>
                </div>
              </div>
            </div>

            {/* Right Side: Visuals */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-2xl shadow-xl shadow-slate-200 border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-full mb-4">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-800">Global Reach</h3>
                <p className="text-sm text-slate-500 mt-2">Servers optimized for speed worldwide.</p>
              </div>
              
              <div className="p-6 bg-white rounded-2xl shadow-xl shadow-slate-200 border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform mt-8">
                <div className="p-3 bg-purple-100 text-purple-600 rounded-full mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-800">Bank-Grade Security</h3>
                <p className="text-sm text-slate-500 mt-2">AES-256 encryption on every transfer.</p>
              </div>

              <div className="p-6 bg-white rounded-2xl shadow-xl shadow-slate-200 border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
                <div className="p-3 bg-emerald-100 text-emerald-600 rounded-full mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-800">User Focused</h3>
                <p className="text-sm text-slate-500 mt-2">Designed for simplicity first.</p>
              </div>

              <div className="p-6 bg-white rounded-2xl shadow-xl shadow-slate-200 border border-slate-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform mt-8">
                <div className="p-3 bg-orange-100 text-orange-600 rounded-full mb-4">
                  <Server className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-800">Scalable</h3>
                <p className="text-sm text-slate-500 mt-2">Built to handle gigabytes of data.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CTA SECTION */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to get started?</h2>
          <p className="text-slate-400 mb-8 text-lg">
            Join thousands of users who have switched to the smarter way of sending files.
          </p>
          <Link 
            to="/register" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-900/20"
          >
            Create Free Account <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default About;