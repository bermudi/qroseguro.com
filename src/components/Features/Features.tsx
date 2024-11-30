import React from 'react';
import { Smartphone, Camera, Monitor, Settings } from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
  {
    title: 'Instant Access',
    description: 'Quick and secure entry using smartphone QR codes',
    Icon: Smartphone
  },
  {
    title: 'Real-Time Monitoring',
    description: 'Track and monitor access activities as they happen',
    Icon: Camera
  },
  {
    title: 'User-Friendly Interface',
    description: 'Intuitive dashboard for easy management',
    Icon: Monitor
  },
  {
    title: 'Customizable Permissions',
    description: 'Fine-tune access levels for different user groups',
    Icon: Settings
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Access Control
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage access to your community efficiently and securely
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}