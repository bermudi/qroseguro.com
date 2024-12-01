// import React from 'react';
import contentManager from '../../utils/contentManager';

export default function Hero() {
  const heroContent = contentManager.getHero();

  return (
    <div className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/imgs/home-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7) blur(2px)'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
            {heroContent.title}
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            {heroContent.subtitle}
          </p>
          <div className="flex space-x-4 relative z-20">
            <a
              href="#contact"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              {heroContent.ctaText}
            </a>
            <a
              href="#how-it-works"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              {heroContent.ctaSecondaryText}
            </a>
          </div>
        </div>
      </div>

      {/* QR Code Overlay Container */}
      <div className="absolute bottom-[5%] right-[5%] lg:bottom-[10%] lg:right-[10%] z-10 w-24 md:w-32 lg:w-40 h-24 md:h-32 lg:h-40 bg-white/90 rounded-lg shadow-lg flex items-center justify-center transform translate-y-0 md:translate-y-0">
        <img
          src="/imgs/qr-code-styling.png"
          alt="QR Code"
          className="w-full h-full object-contain p-2"
        />
      </div>
    </div>
  );
}