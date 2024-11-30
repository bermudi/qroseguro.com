import React from 'react';
import { Send } from 'lucide-react';
import contentManager from '../../utils/contentManager';

export default function Contact() {
  const contact = contentManager.getContact();
  const content = contentManager.getSectionContent('contact');

  return (
    <section id="contact" className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            {content.title}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {content.subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    {contact.form.namePlaceholder}
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder={contact.form.namePlaceholder}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    {contact.form.emailPlaceholder}
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder={contact.form.emailPlaceholder}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  {contact.form.subjectPlaceholder}
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder={contact.form.subjectPlaceholder}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  {contact.form.messagePlaceholder}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder={contact.form.messagePlaceholder}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  {contact.form.submitText}
                  <Send className="ml-2 -mr-1 h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
          <div className="bg-gray-50 px-8 py-4 border-t border-gray-100">
            <p className="text-center text-gray-600">
              Or call us at (555) 123-4567
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
