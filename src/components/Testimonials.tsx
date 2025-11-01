import { testimonials } from "../data/testimonials";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            What my clients say about my work quality and professional service
            on Fastwork
          </p>

          {/* Stats Section */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm">
            <div className="flex flex-col items-center gap-1 min-w-[120px]">
              <span className="text-3xl font-bold text-teal-600">8+</span>
              <span className="text-gray-600">Projects Completed</span>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-300"></div>
            <div className="flex flex-col items-center gap-1 min-w-[120px]">
              <span className="text-3xl font-bold text-teal-600">100%</span>
              <span className="text-gray-600">Completion Rate</span>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-300"></div>
            <div className="flex flex-col items-center gap-1 min-w-[120px]">
              <span className="text-3xl font-bold text-teal-600">4 min</span>
              <span className="text-gray-600">Response Time</span>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-300"></div>
            <div className="flex flex-col items-center gap-1 min-w-[120px]">
              <span className="text-3xl font-bold text-teal-600">5.0</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className="text-yellow-400 text-sm" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <FaQuoteLeft className="text-teal-500 text-3xl opacity-50" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <FaStar key={index} className="text-yellow-400 text-lg" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                {testimonial.review}
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-teal-500"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">
                    {testimonial.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://fastwork.id/user/supriyandi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors shadow-lg hover:shadow-xl"
          >
            <span>View All Reviews on Fastwork</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
