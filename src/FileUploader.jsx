import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { motion, AnimatePresence } from 'framer-motion';
import { UploadCloud, FileText, Send, Loader2, CheckCircle, XCircle } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Helper for cleaner tailwind classes
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const FileUploader = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('idle'); // idle, uploading, compressing, completed
  const [sender, setSender] = useState('');
  const [recipient, setRecipient] = useState('');

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setStatus('idle');
      setProgress(0);
    }
  };

  const handleUpload = async () => {
    if (!file || !sender || !recipient) {
      Swal.fire({
        icon: 'warning',
        title: 'Missing Details',
        text: 'Please fill in all fields before sending.',
        confirmButtonColor: '#3b82f6'
      });
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('senderEmail', sender);
    formData.append('recipientEmail', recipient);

    try {
      setStatus('uploading');

      const res = await axios.post('http://localhost:5000/api/files/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress: (progressEvent) => {
          const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setProgress(percent);
          if (percent === 100) setStatus('compressing');
        },
      });

      setStatus('completed');
      
      // SweetAlert Success Popup
      Swal.fire({
        icon: 'success',
        title: 'File Sent!',
        html: `Your file has been processed securely.<br/><br/>
               <a href="${res.data.downloadLink}" target="_blank" class="text-blue-500 underline font-bold">
                 Test Download Link
               </a>`,
        confirmButtonText: 'Great!',
        confirmButtonColor: '#10b981' // Emerald green
      });

    } catch (err) {
      setStatus('idle');
      Swal.fire({
        icon: 'error',
        title: 'Upload Failed',
        text: 'Something went wrong with the server connection.',
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden"
      >
        {/* Header */}
        <div className="bg-blue-600 p-6 text-white text-center">
          <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
            <Send className="w-6 h-6" /> Smart Transfer
          </h2>
          <p className="text-blue-100 text-sm mt-1">Secure, Compressed, Fast.</p>
        </div>

        <div className="p-8 space-y-6">
          
          {/* Drop Zone */}
          <div 
            onClick={() => document.getElementById('fileInput').click()}
            className={cn(
              "border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-200 group",
              file ? "border-emerald-400 bg-emerald-50" : "border-slate-300 hover:border-blue-400 hover:bg-slate-50"
            )}
          >
            <input id="fileInput" type="file" className="hidden" onChange={handleFileChange} />
            
            <div className="flex flex-col items-center gap-3">
              {file ? (
                <>
                  <FileText className="w-10 h-10 text-emerald-500" />
                  <div>
                    <p className="font-semibold text-slate-700 truncate max-w-[200px]">{file.name}</p>
                    <p className="text-xs text-slate-500">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                  </div>
                </>
              ) : (
                <>
                  <UploadCloud className="w-12 h-12 text-slate-400 group-hover:text-blue-500 transition-colors" />
                  <p className="text-slate-500 font-medium">Click to upload or drag file</p>
                  <p className="text-xs text-slate-400">Supports large files (Auto-Compression)</p>
                </>
              )}
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-3">
            <div className="relative">
              <input 
                type="email" 
                placeholder="Sender Email"
                className="w-full pl-4 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                value={sender}
                onChange={e => setSender(e.target.value)}
              />
            </div>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Recipient Email"
                className="w-full pl-4 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                value={recipient}
                onChange={e => setRecipient(e.target.value)}
              />
            </div>
          </div>

          {/* Action Button & Progress */}
          <div className="mt-4">
            <AnimatePresence mode='wait'>
              {status === 'idle' || status === 'completed' ? (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleUpload}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-lg shadow-blue-200 transition-all flex items-center justify-center gap-2"
                >
                  Send File Now <Send className="w-4 h-4" />
                </motion.button>
              ) : (
                <div className="w-full bg-slate-100 rounded-full h-12 relative overflow-hidden flex items-center justify-center">
                  {/* The Blue Filling Bar */}
                  <motion.div 
                    className="absolute left-0 top-0 bottom-0 bg-blue-500/20"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ type: "spring", stiffness: 50 }}
                  />
                  
                  {/* Text Status */}
                  <span className="relative z-10 font-semibold text-blue-700 flex items-center gap-2">
                    {status === 'compressing' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" /> Compressing...
                      </>
                    ) : (
                      `${progress}% Uploaded`
                    )}
                  </span>
                </div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default FileUploader;