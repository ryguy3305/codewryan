'use client';

import { Button } from '@/components/ui/Button';
import { siteContent } from '@/data/siteContent';

export function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          {siteContent.hero.headline}
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-8">
          {siteContent.hero.subheadline}
        </p>
        <div className="flex flex-col items-center gap-4">
          <Button
            variant="primary"
            className="text-lg px-8 py-3"
            onClick={scrollToAbout}
          >
            {siteContent.hero.cta}
          </Button>
          <button
            onClick={scrollToAbout}
            className="mt-8 animate-bounce text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Scroll to About section"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
} 