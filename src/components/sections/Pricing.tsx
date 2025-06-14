'use client';

import { siteContent } from '@/data/siteContent';
import { Button } from '@/components/ui/Button';

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {siteContent.pricing.title}
          </h2>
          <p className="text-xl text-gray-600">
            {siteContent.pricing.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {siteContent.pricing.plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-white rounded-2xl shadow-lg p-8 border-2 border-blue-100 hover:border-blue-300 transition-colors duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {plan.name}
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-blue-600">
                  {plan.price}
                </span>
                <span className="text-gray-600 ml-2">{plan.duration}</span>
              </div>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 