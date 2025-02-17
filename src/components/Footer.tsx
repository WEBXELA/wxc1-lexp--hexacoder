import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="bg-white border-t border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3">
              <Search className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="text-xl font-bold text-gray-900">LEXP</h3>
                <p className="text-sm text-gray-500">Professional Lead Generation Tool</p>
              </div>
            </div>
            <p className="mt-4 text-gray-600 max-w-md">
              Transform your lead generation process with our powerful tools and insights.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/" className="text-base text-gray-600 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-base text-gray-600 hover:text-gray-900">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-base text-gray-600 hover:text-gray-900">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Contact</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-center space-x-3 text-gray-600">
                <Mail className="w-5 h-5" />
                <span>support@lexp.com</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600">
                <Phone className="w-5 h-5" />
                <span>+91 9724823602</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600">
                <MapPin className="w-5 h-5" />
                <span>Bengaluru, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} LEXP. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}