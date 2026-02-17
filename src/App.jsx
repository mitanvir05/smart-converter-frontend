import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import FileUploader from './FileUploader';
import { AuthContext } from './context/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';

// 1. Protected Route Component (The Bouncer)
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-slate-500">
        Loading...
      </div>
    );
  }
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 font-sans">
        <Navbar />

        {/* Main Content Area (Padded top so Navbar doesn't cover it) */}
        <div className="pt-16">
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Protected Dashboard (Only for Logged In Users) */}
            <Route 
              path="/" 
              element={
                <ProtectedRoute>
                  <FileUploader />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;