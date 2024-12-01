// import React from 'react';
import { Send } from 'lucide-react';
import contentManager from '../../utils/contentManager';

export default function Contact() {
  const contact = contentManager.getContact();
  const content = contentManager.getSectionContent('contact');

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            {content.title}
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto backdrop-blur-lg bg-white/95 rounded-2xl shadow-2xl">
          <div className="p-10">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    required
                    className="peer w-full border-b-2 border-gray-300 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all focus:border-blue-500 focus:outline-0 disabled:border-0"
                  />
                  <label htmlFor="name"
                    className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-blue-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:after:scale-x-100 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                  >
                    {contact.form.namePlaceholder}
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    required
                    className="peer w-full border-b-2 border-gray-300 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all focus:border-blue-500 focus:outline-0 disabled:border-0"
                  />
                  <label htmlFor="email"
                    className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-blue-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:after:scale-x-100 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                  >
                    {contact.form.emailPlaceholder}
                  </label>
                </div>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  required
                  className="peer w-full border-b-2 border-gray-300 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all focus:border-blue-500 focus:outline-0 disabled:border-0"
                />
                <label htmlFor="subject"
                  className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-blue-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:after:scale-x-100 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                >
                  {contact.form.subjectPlaceholder}
                </label>
              </div>
              <div className="relative">
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="peer w-full border-b-2 border-gray-300 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all focus:border-blue-500 focus:outline-0 disabled:border-0 resize-none"
                />
                <label htmlFor="message"
                  className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-blue-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:after:scale-x-100 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                >
                  {contact.form.messagePlaceholder}
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2 hover:shadow-lg"
              >
                <span>{contact.form.submitText}</span>
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
          <div className="bg-gray-50/50 px-10 py-4 border-t border-gray-100 rounded-b-2xl">
            <p className="text-center text-gray-600 flex items-center justify-center gap-2">
              <span className="h-px w-8 bg-gray-300"></span>
              {contact.ctaSubtext}
              <span className="h-px w-8 bg-gray-300"></span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
