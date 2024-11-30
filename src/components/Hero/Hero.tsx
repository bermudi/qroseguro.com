import React from 'react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7) blur(2px)'
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
            Secure Your Community with Smart Access Control
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Effortless entry management using QR codes. Transform your community's security with our cutting-edge solution.
          </p>
          <div className="flex space-x-4">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Request a Demo
            </button>
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}