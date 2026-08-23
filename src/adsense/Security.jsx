import React from 'react';
import { Shield, Lock, Clock, EyeOff } from 'lucide-react';

const Security = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex bg-emerald-100 text-emerald-600 p-3 rounded-xl mb-6">
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Bank-Grade Security</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Your data's privacy and security are built into the core of SmartTransfer. 
            We never look at your files, and we don't keep them any longer than necessary.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Item 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex gap-6">
            <div className="text-blue-600 flex-shrink-0">
              <Lock className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">End-to-End Encryption</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Files are encrypted in transit using TLS 1.3 and at rest using AES-256 bit encryption. Your data is protected from the moment it leaves your device.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex gap-6">
            <div className="text-blue-600 flex-shrink-0">
              <Clock className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">24-Hour Auto-Destruct</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To minimize risk and reduce our digital footprint, all uploaded files are permanently and irreversibly deleted from our servers exactly 24 hours after upload.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex gap-6">
            <div className="text-blue-600 flex-shrink-0">
              <EyeOff className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Zero-Knowledge Architecture</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We do not scan, mine, or monetize the contents of your files. What you send is strictly between you and your recipient.
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex gap-6">
            <div className="text-blue-600 flex-shrink-0">
              <Shield className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Secure Infrastructure</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our servers are hosted in secure, enterprise-grade data centers with strict physical and network access controls, monitored 24/7/365.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;