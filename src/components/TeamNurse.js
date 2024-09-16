import React, { useEffect, useRef } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import nurseVideo from '../assets/images/done/TeamNurse/nurse2.mp4';
import CardNurse from './CardNurse';
import ContactForm from './ContactForm';
import TestimonialsSection from './TestimonialsSection';
import ServicesSection from './ServicesSection';

const NursingServicesPage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => {
        console.error('Error attempting to autoplay video:', error);
      });
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Navbar />

      <section className="relative flex items-center justify-center h-screen text-white text-center">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover video-background"
          src={nurseVideo}
          onLoadedData={() => console.log('Video loaded successfully.')}
          onError={(e) => console.error('Error loading video:', e)}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-50 z-[1]"></div>
        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <h1 className="text-5xl font-extrabold mb-4">Compassionate Nursing Care You Can Trust</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our dedicated team of professional nurses is here to provide the highest quality of care with empathy and
            respect. Your health and comfort are our top priority.
          </p>
          <a href="#contact" className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
            Contact Us Today
          </a>
        </div>
      </section>
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl text-center">
          <h2 className="text-4xl font-bold text-blue-800 dark:text-white mb-12 animate-fade-in">
            About Us
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are a team of licensed and experienced nurses dedicated to providing exceptional care in the comfort of
            your own home. From post-surgical care to chronic disease management, our goal is to improve your quality of
            life with personalized, compassionate services.
          </p>
        </div>
      </section>

      <CardNurse />
      <ServicesSection/>
      <ContactForm />
      <TestimonialsSection />
      
      <Footer />
    </div>
  );
};

export default NursingServicesPage;
