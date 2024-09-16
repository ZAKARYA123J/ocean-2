import React, { useState, useEffect } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import avatar1 from '../assets/images/done/TeamNurse/avatar.jpg';
import avatar2 from '../assets/images/done/TeamNurse/avatar.jpg';
import avatar3 from '../assets/images/done/TeamNurse/avatar.jpg';
import avatar4 from '../assets/images/done/TeamNurse/avatar.jpg';
import avatar5 from '../assets/images/done/TeamNurse/avatar.jpg';

const testimonials = [
  {
    quote:
      "The care I received was outstanding. The nurses were professional, kind, and truly cared about my well-being.",
    author: 'Sarah L.',
    avatar: avatar1,
  },
  {
    quote:
      "Thanks to the wonderful team, my recovery was smooth and comfortable. I couldn’t have asked for better care.",
    author: 'Michael P.',
    avatar: avatar2,
  },
  {
    quote:
      "Our family is grateful for the compassionate care provided to our elderly parents. Highly recommended!",
    author: 'Jessica W.',
    avatar: avatar3,
  },
  {
    quote:
      "The team was amazing! They made a tough situation so much easier for our family.",
    author: 'David M.',
    avatar: avatar4,
  },
  {
    quote:
      "Exceptional service, compassionate care, and very responsive. I highly recommend their services!",
    author: 'Emily R.',
    avatar: avatar5,
  },
  
];

const DynamicTestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl text-center">
        <h2 className="text-4xl font-bold text-blue-800 dark:text-white mb-12 animate-fade-in">
          What Our Clients Say
        </h2>
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {testimonials
            .slice(currentIndex, currentIndex + 3)
            .map((testimonial, index) => (
              <div
                key={index}
                className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-20 h-20 rounded-full mb-4 object-cover shadow-md"
                />
                <FaQuoteLeft className="text-blue-600 text-2xl mb-4" />
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  "{testimonial.quote}"
                </p>
                <p className="text-sm font-semibold text-blue-800 dark:text-blue-400">
                  {testimonial.author}
                </p>
              </div>
            ))}
        </div>
        <div className="mt-8 flex justify-center space-x-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full transition ${
                currentIndex === index ? 'bg-blue-600' : 'bg-gray-400'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DynamicTestimonialsSection;
