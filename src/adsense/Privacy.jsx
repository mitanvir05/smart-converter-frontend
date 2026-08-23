import React from 'react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">Privacy Policy</h1>
        <div className="space-y-6 text-slate-600 leading-relaxed">
          <p>At SmartTransfer, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by SmartTransfer and how we use it.</p>
          
          <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Log Files</h2>
          <p>SmartTransfer follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.</p>
          
          <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Google DoubleClick DART Cookie</h2>
          <p>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads" className="text-blue-600 hover:underline">https://policies.google.com/technologies/ads</a></p>

          <h2 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Data Security & Retention</h2>
          <p>Files uploaded to SmartTransfer are encrypted during transfer and are temporarily stored on our secure servers. All uploaded files and their associated data are permanently and irreversibly deleted from our servers within 24 hours of upload.</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;