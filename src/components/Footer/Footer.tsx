import React from 'react';
import contentManager from '../../utils/contentManager';

export default function Footer() {
  const footer = contentManager.getFooter();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">QRoseguro</h3>
            <p className="text-gray-400">
              Secure access management for modern communities
            </p>
          </div>
          {footer.sections.map((section) => (
            <div key={section.id}>
              <h4 className="text-lg font-semibold text-white mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.url}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            {footer.bottomText}
          </p>
        </div>
      </div>
    </footer>
  );
}
