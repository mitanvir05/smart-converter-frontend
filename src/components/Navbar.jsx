import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Zap, LogOut, User, LogIn, UserPlus, LayoutDashboard, History } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-blue-600 text-white p-1.5 rounded-lg group-hover:bg-blue-700 transition-colors">
              <Zap className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
              SmartTransfer
            </span>
          </Link>

          {/* NAVIGATION LINKS */}
          <div className="flex items-center gap-4">

            {user ? (
              // SCENARIO 1: USER IS LOGGED IN
              <>
                {/* Dashboard Link */}
                <Link
                  to="/send-file"
                  className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
                >
                  <LayoutDashboard className="w-4 h-4" />
                  Send File
                </Link>

                {/* History Link */}
                <Link
                  to="/history"
                  className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
                >
                  <History className="w-4 h-4" />
                  History
                </Link>

                {/* User Email Badge */}
                <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-full border border-slate-200 ml-2">
                  <User className="w-4 h-4 text-slate-500" />
                  <span className="text-sm font-medium text-slate-600">{user.email}</span>
                </div>

                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            ) : (
              // SCENARIO 2: USER IS GUEST (LOGGED OUT)
              <>
                <Link
                  to="/login"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
                >
                  <LogIn className="w-4 h-4" />
                  Login
                </Link>

                <Link
                  to="/register"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md shadow-blue-200 transition-all"
                >
                  <UserPlus className="w-4 h-4" />
                  Register
                </Link>
              </>
            )}

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;