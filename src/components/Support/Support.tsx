import React from 'react';
import { BookOpen, Wrench, HelpCircle, GraduationCap, Mail, Phone, Clock } from 'lucide-react';
import contentManager from '../../utils/contentManager';

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  'book-open': BookOpen,
  'tool': Wrench,
  'help-circle': HelpCircle,
  'graduation-cap': GraduationCap,
};

export default function Support() {
  const support = contentManager.getSupport();

  return (
    <section id="support" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {support.title}
          </h2>
          <p className="text-xl text-gray-600">
            {support.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {support.topics.map((topic) => {
            const Icon = iconMap[topic.icon] || HelpCircle;
            return (
              <div key={topic.id} className="bg-gray-50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {topic.title}
                </h3>
                <p className="text-gray-600">
                  {topic.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            {support.title}
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <p className="text-gray-900 font-medium mb-2">Email</p>
              <a href={`mailto:${support.contactInfo.email}`} className="text-blue-600 hover:text-blue-700">
                {support.contactInfo.email}
              </a>
            </div>
            <div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <p className="text-gray-900 font-medium mb-2">Teléfono</p>
              <a href={`tel:${support.contactInfo.phone}`} className="text-blue-600 hover:text-blue-700">
                {support.contactInfo.phone}
              </a>
            </div>
            <div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <p className="text-gray-900 font-medium mb-2">Horario</p>
              <p className="text-gray-600">
                {support.contactInfo.hours}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
