import React from 'react';
import { Lock, Menu } from 'lucide-react';
import NavLinks from './NavLinks';

export default function Header() {
  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Lock className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">SecureGate</span>
          </div>
          
          <NavLinks />

          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-blue-600 hover:text-blue-700 font-medium">
              Sign In
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Get Started
            </button>
          </div>
          
          <button className="md:hidden">
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
}