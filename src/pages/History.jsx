import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { FileText, Download, Calendar, Clock, AlertCircle } from 'lucide-react';

const History = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/files/history');
        setFiles(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching history:", err);
        setLoading(false);
      }
    };

    fetchHistory();
  }, [token]);

  // Helper to format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short', day: 'numeric', year: 'numeric'
    });
  };

  // Helper to check if file is expired (older than 24 hours)
  const isExpired = (dateString) => {
    const oneDay = 24 * 60 * 60 * 1000;
    return (new Date() - new Date(dateString)) > oneDay;
  };

  if (loading) return <div className="text-center mt-20">Loading history...</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Transfer History</h1>
          <p className="text-slate-500 mt-1">Manage your sent files and download links.</p>
        </div>
        <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-medium text-sm">
          {files.length} Files Sent
        </div>
      </div>

      {/* The Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        {files.length === 0 ? (
          <div className="text-center py-20">
            <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-lg font-medium text-slate-900">No transfers yet</h3>
            <p className="text-slate-500">Upload a file to see it listed here.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  <th className="px-6 py-4">File Name</th>
                  <th className="px-6 py-4">Size</th>
                  <th className="px-6 py-4">Date Sent</th>
                  <th className="px-6 py-4">Recipient</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {files.map((file) => (
                  <tr key={file._id} className="hover:bg-slate-50 transition-colors">
                    
                    {/* File Name */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-900 truncate max-w-[200px]" title={file.originalName}>
                            {file.originalName}
                          </p>
                          {file.isCompressed && <span className="text-xs text-green-600 font-medium">Compressed (Zip)</span>}
                        </div>
                      </div>
                    </td>

                    {/* Size */}
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {(file.size / (1024 * 1024)).toFixed(2)} MB
                    </td>

                    {/* Date */}
                    <td className="px-6 py-4 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-slate-400" />
                        {formatDate(file.createdAt)}
                      </div>
                    </td>

                    {/* Recipient */}
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {file.recipientEmail || <span className="text-slate-400 italic">No recipient</span>}
                    </td>

                    {/* Status Badge */}
                    <td className="px-6 py-4">
                      {isExpired(file.createdAt) ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                          <AlertCircle className="w-3 h-3" /> Expired
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                          <Clock className="w-3 h-3" /> Active
                        </span>
                      )}
                    </td>

                    {/* Action Button */}
                    <td className="px-6 py-4 text-right">
                      {!isExpired(file.createdAt) && (
                        <a 
                          href={`http://localhost:5000/download/${file.downloadToken}`} 
                          target="_blank" 
                          rel="noreferrer"
                          className="inline-flex items-center justify-center p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                          title="Download File"
                        >
                          <Download className="w-5 h-5" />
                        </a>
                      )}
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default History;