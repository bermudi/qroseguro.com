import React from 'react';

const links = [
  { name: 'Home', href: '#' },
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'About Us', href: '#about' },
  { name: 'Support', href: '#support' },
  { name: 'Contact', href: '#contact' },
];

export default function NavLinks() {
  return (
    <nav className="hidden md:flex space-x-8">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
}