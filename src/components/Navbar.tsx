import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Users, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const location = useLocation();
  const isAuthPage = ['/login', '/signup'].includes(location.pathname);
  const isDashboard = location.pathname === '/dashboard';

  if (isAuthPage) return null;

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white border-b border-gray-200 fixed w-full z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="flex items-center space-x-3">
            <Search className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                LEXP
              </h1>
              <p className="text-xs sm:text-sm text-gray-500">
                Professional Lead Generation Tool
              </p>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/pricing"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Pricing
            </Link>
            <Link 
              to="/contact"
              className="text-gray-600 hover:text-gray-900 transition-colors flex items-center space-x-1"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contact</span>
            </Link>
            {!isDashboard ? (
              <Link
                to="/dashboard"
                className="px-6 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200"
              >
                Dashboard
              </Link>
            ) : (
              <Link
                to="/login"
                className="px-6 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200"
              >
                Sign Out
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
}