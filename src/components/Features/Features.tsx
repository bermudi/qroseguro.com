import React from 'react';
import { Smartphone, Camera, Monitor, Shield, Users, QrCode } from 'lucide-react';
import FeatureCard from './FeatureCard';
import contentManager from '../../utils/contentManager';

const iconMap: { [key: string]: React.ComponentType } = {
  'qr-code': QrCode,
  'monitor': Monitor,
  'users': Users,
  'shield': Shield
};

export default function Features() {
  const features = contentManager.getFeatures().map(feature => ({
    ...feature,
    Icon: iconMap[feature.icon] || Monitor
  }));

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
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}