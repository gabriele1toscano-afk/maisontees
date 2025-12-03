import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`} className="material-symbols-outlined !text-lg">star</span>);
    }
    if (hasHalfStar) {
      stars.push(<span key="half" className="material-symbols-outlined !text-lg">star_half</span>);
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
       stars.push(<span key={`empty-${i}`} className="material-symbols-outlined !text-lg">star_border</span>); // assuming star_border exists in the font set, fallback to empty loop
    }
    // The original HTML hardcoded 5 stars. My logic above dynamically renders.
    // However, to strictly follow the visual of the provided HTML:
    // 1st: 5 stars
    // 2nd: 5 stars
    // 3rd: 4.5 stars (star_half)
    // The logic above works for this.
    return stars;
  };

  return (
    <section className="mt-8 py-10 bg-white dark:bg-black/20">
      <h2 className="text-center text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-6">
        What Our Customers Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {TESTIMONIALS.map((testimonial) => (
          <div key={testimonial.id} className="flex flex-col items-center text-center p-6 bg-background-light dark:bg-background-dark rounded-lg">
            <div className="flex text-primary mb-2">
              {renderStars(testimonial.rating)}
            </div>
            <p className="text-gray-700 dark:text-gray-300 italic mb-4">"{testimonial.quote}"</p>
            <p className="font-bold text-gray-900 dark:text-white">- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;