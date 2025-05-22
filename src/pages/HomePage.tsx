import React from 'react';
import { MainLayout } from '../components/layout/MainLayout';
import { Hero } from '../components/home/Hero';
import { ServiceHighlights } from '../components/home/ServiceHighlights';

export const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <Hero />
      <ServiceHighlights />
      
      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">What Our Voyagers Say</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Hear from our satisfied travelers who have experienced our exceptional services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-neutral-50 p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-accent-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-neutral-700 mb-4">
                "The cruise ship management system made our voyage so effortless. Booking services and ordering food was incredibly simple, and everything arrived right on time!"
              </p>
              <div className="flex items-center">
                <div className="font-medium text-primary-800">Sarah M.</div>
                <span className="mx-2 text-neutral-400">•</span>
                <div className="text-sm text-neutral-500">Voyager</div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-neutral-50 p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-accent-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-neutral-700 mb-4">
                "We celebrated our 10th anniversary in the party hall, and the staff made it absolutely magical. The booking process was seamless and the service was exceptional."
              </p>
              <div className="flex items-center">
                <div className="font-medium text-primary-800">James & Emily T.</div>
                <span className="mx-2 text-neutral-400">•</span>
                <div className="text-sm text-neutral-500">Voyagers</div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-neutral-50 p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-accent-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-neutral-700 mb-4">
                "The fitness center was top-notch, and scheduling sessions through the app was so convenient. I particularly enjoyed the personal training option!"
              </p>
              <div className="flex items-center">
                <div className="font-medium text-primary-800">Robert K.</div>
                <span className="mx-2 text-neutral-400">•</span>
                <div className="text-sm text-neutral-500">Fitness Enthusiast</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Embark on Your Journey?</h2>
          <p className="text-lg text-primary-100 mb-8 max-w-3xl mx-auto">
            Sign up today and start exploring the myriad of services and amenities available on your voyage.
          </p>
          <a href="/signup" className="btn bg-accent-500 text-primary-900 hover:bg-accent-600 shadow-lg px-8 py-3 text-lg">
            Get Started
          </a>
        </div>
      </section>
    </MainLayout>
  );
};