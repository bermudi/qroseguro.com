import React from 'react';
import contentManager from '../../utils/contentManager';
import { Building, Users, QrCode, Activity } from 'lucide-react';

const iconMap: { [key: string]: React.ComponentType } = {
  'building': Building,
  'users': Users,
  'qr-code': QrCode,
  'activity': Activity,
};

export default function HowItWorks() {
  const steps = contentManager.getSteps();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started with QRoseguro in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = iconMap[step.icon] || Activity;
            return (
              <div key={step.id} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 w-full h-0.5 bg-blue-200 transform translate-y-[-50%] translate-x-[50%]" />
                )}
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
