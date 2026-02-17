import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);

  // 1. Check if user is already logged in (on page refresh)
  useEffect(() => {
    if (token) {
      // Set the default Authorization header for ALL axios requests
      axios.defaults.headers.common['x-auth-token'] = token;
      // Ideally, you'd fetch user profile here, but for now we decode or just set true
      setUser({ token }); 
    } else {
      delete axios.defaults.headers.common['x-auth-token'];
      setUser(null);
    }
    setLoading(false);
  }, [token]);

  // 2. Login Action
  const login = async (email, password) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password
      });
      
      // Save token to storage and state
      localStorage.setItem('token', res.data.token);
      setToken(res.data.token);
      setUser(res.data.user);
      return { success: true };
    } catch (err) {
      return { 
        success: false, 
        msg: err.response?.data?.msg || 'Login failed' 
      };
    }
  };

  // 3. Register Action
  const register = async (email, password) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', {
        email,
        password
      });

      localStorage.setItem('token', res.data.token);
      setToken(res.data.token);
      setUser(res.data.user);
      return { success: true };
    } catch (err) {
      return { 
        success: false, 
        msg: err.response?.data?.msg || 'Registration failed' 
      };
    }
  };

  // 4. Logout Action
  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    delete axios.defaults.headers.common['x-auth-token'];
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};