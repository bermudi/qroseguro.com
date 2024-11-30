import React from 'react';
import contentManager from '../../utils/contentManager';

const links = [
  { name: 'Home', href: '#' },
  { name: 'Features', href: '#features' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'About Us', href: '#about' },
  { name: 'Support', href: '#support' },
  { name: 'Contact', href: '#contact' },
];

export default function NavLinks() {
  const { links: navLinks } = contentManager.getNav();

  return (
    <div className="hidden md:flex md:gap-x-6">
      {navLinks.map((link) => (
        <a
          key={link.id}
          href={link.url}
          className="text-gray-900 hover:text-blue-600 transition-colors"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}