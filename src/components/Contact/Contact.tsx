import React from 'react';
import contentManager from '../../utils/contentManager';

export default function Contact() {
  const contact = contentManager.getContact();

  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          {contact.title}
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          {contact.subtitle}
        </p>
        <div className="flex flex-col items-center space-y-4">
          <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium text-lg">
            {contact.ctaText}
          </button>
          <p className="text-blue-100">
            {contact.ctaSubtext}
          </p>
        </div>
      </div>
    </section>
  );
}
