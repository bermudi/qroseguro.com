import React from 'react';
import { Users, Shield, Clock } from 'lucide-react';
import contentManager from '../../utils/contentManager';

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  'users': Users,
  'shield': Shield,
  'clock': Clock,
};

export default function About() {
  const about = contentManager.getAbout();

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {about.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {about.subtitle}
          </p>
        </div>

        <div className="mb-16">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
            {about.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {about.team.map((member) => {
            const Icon = iconMap[member.icon] || Users;
            return (
              <div key={member.id} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-sm text-blue-600 mb-2">{member.role}</p>
                <p className="text-gray-600">
                  {member.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
