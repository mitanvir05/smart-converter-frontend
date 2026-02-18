import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { LogIn, Mail, Lock, AlertCircle } from 'lucide-react';
import Swal from 'sweetalert2'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors
    
    const res = await login(email, password);
    
    if (res.success) {
      // <--- 2. Show Success Alert
      Swal.fire({
        icon: 'success',
        title: 'Welcome Back!',
        text: 'Login successful. Redirecting...',
        timer: 1500, // Close automatically after 1.5 seconds
        showConfirmButton: false,
        timerProgressBar: true,
      }).then(() => {
        navigate('/send-file'); 
      });
    } else {
      // Keep error inline (better UX for failed logins than a popup)
      setError(res.msg || 'Login failed');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-800">Welcome Back</h2>
          <p className="text-slate-500 mt-2">Sign in to continue sharing files.</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg flex items-center gap-2 border border-red-100">
            <AlertCircle className="w-4 h-4" /> {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Email Field */}
          <div className="relative">
            <Mail className="w-5 h-5 text-slate-400 absolute left-3 top-3.5" />
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <Lock className="w-5 h-5 text-slate-400 absolute left-3 top-3.5" />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-200 transition-all flex justify-center items-center gap-2"
          >
            Sign In <LogIn className="w-4 h-4" />
          </button>
        </form>

        <p className="text-center mt-6 text-slate-600 text-sm">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-600 font-semibold hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;