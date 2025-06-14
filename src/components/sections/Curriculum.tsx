import { siteContent } from '@/data/siteContent';

export function Curriculum() {
  return (
    <section id="curriculum" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {siteContent.curriculum.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {siteContent.curriculum.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteContent.curriculum.levels.map((level) => (
            <div
              key={level.name}
              className="bg-white rounded-2xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {level.name}
              </h3>
              <ul className="space-y-3">
                {level.topics.map((topic, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-600"
                  >
                    <svg
                      className="h-5 w-5 text-green-500 mr-3"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 