import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Terms of Service</h1>
        <p className="text-sm text-slate-500 mb-10 border-b border-slate-100 pb-6">
          Last updated: August 24, 2026
        </p>
        
        <div className="space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using SmartTransfer, you accept and agree to be bound by the terms and provision of this agreement. 
              If you do not agree to abide by these terms, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">2. Description of Service</h2>
            <p>
              SmartTransfer provides users with a platform to compress, encrypt, and transfer large files via email. 
              We reserve the right to modify, suspend, or discontinue the service at any time with or without notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">3. User Responsibilities & Acceptable Use</h2>
            <p className="mb-2">You agree not to use the service to upload, post, or transmit any content that:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Is illegal, harmful, threatening, abusive, or harassing.</li>
              <li>Infringes on any patent, trademark, trade secret, copyright, or other proprietary rights.</li>
              <li>Contains software viruses or any other computer code designed to interrupt or destroy functionality.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">4. Data Storage and Privacy</h2>
            <p>
              Your use of SmartTransfer is also governed by our Privacy Policy. Files are encrypted during transfer and are 
              automatically and permanently deleted from our servers after 24 hours. We do not inspect the contents of your 
              transferred files unless legally compelled to do so.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">5. Advertising and Monetization</h2>
            <p>
              Our website may use third-party advertising partners, such as Google AdSense, to serve ads when you visit our website. 
              These companies may use information about your visits to this and other websites in order to provide advertisements about 
              goods and services of interest to you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-800 mb-3">6. Limitation of Liability</h2>
            <p>
              SmartTransfer shall not be liable for any indirect, incidental, special, consequential or punitive damages, 
              or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, 
              goodwill, or other intangible losses.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;