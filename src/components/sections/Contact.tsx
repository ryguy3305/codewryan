'use client';

import { siteContent } from '@/data/siteContent';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {siteContent.contact.title}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {siteContent.contact.message}
          </p>
          <a
            href={`mailto:${siteContent.contact.email}`}
            className="inline-block text-xl text-blue-600 hover:text-blue-700 font-medium"
          >
            {siteContent.contact.email}
          </a>
        </div>
      </div>
    </section>
  );
} 