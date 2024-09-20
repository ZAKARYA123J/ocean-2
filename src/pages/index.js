import React, { useEffect, useState, lazy, Suspense } from "react";
import { Link as ScrollLink } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import heroImage1 from '../assets/images/done/TeamDev/service.png';
import heroImage2 from '../assets/images/done/TeamDev/service1.png';
import heroImage3 from '../assets/images/done/TeamDev/service2.png';

// Lazy Loaded Components
const Footer = lazy(() => import('../components/footer'));
const About = lazy(() => import("../components/about"));
const Services = lazy(() => import("../components/services"));
const AgencyTab = lazy(() => import("../components/agencyTab"));
const Blogs = lazy(() => import("../components/blog"));
const GetInTouch = lazy(() => import("../components/getInTuoch"));
const Navbar = lazy(() => import('../components/navbar'));
const WhatsAppFloatingButton = lazy(() => import('../components/WhatsAppFloatingButton'));

export default function Index() {
  const { i18n } = useTranslation();
  const images = [heroImage1, heroImage2, heroImage3]; // Array of images
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current image index

  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 1000,
      easing: "ease-in-out",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  // Automatically switch between images every few seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop through images
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Clear interval when component unmounts
  }, [images.length]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />

      {/* CSS for Image Crossfade Effect */}
      <style>
        {`
          /* Container for the image crossfade effect */
          .image-container {
            position: relative;
            width: 600px;
            height: 400px;
          }

          /* All images stacked on top of each other */
          .image-container img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0;
            transition: opacity 1.5s ease-in-out; /* Smooth crossfade effect */
          }

          /* Only the active image will have full opacity */
          .image-container img.active {
            opacity: 1;
            z-index: 1;
          }

          /* Add subtle zoom effect on image */
          .image-container img.active {
            transform: scale(1.05); /* Slight zoom */
            transition: transform 1.5s ease-in-out, opacity 1.5s ease-in-out;
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-200 via-purple-200 to-blue-300 min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center z-10 space-y-8 md:space-y-0 md:space-x-8">
          
          {/* Hero Text and Buttons */}
          <div className="text-center md:text-left flex-1 space-y-6" data-aos="fade-right">
            <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 leading-tight">
              Elevate Your Business Presence
            </h1>
            <p className="text-xl text-gray-700 max-w-lg mx-auto md:mx-0" data-aos="fade-up" data-aos-delay="200">
              With our innovative design solutions for global recruitment and training, your business can stand out.
            </p>

            {/* CTA Buttons */}
            <div className="mt-4 flex justify-center md:justify-start space-x-4">
              <ScrollLink
                to="contact"
                smooth
                duration={500}
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-8 rounded-full shadow-lg transform transition hover:-translate-y-1 hover:shadow-dynamic cursor-pointer"
              >
                Contact Us
              </ScrollLink>
              <ScrollLink
                to="services"
                smooth
                duration={500}
                className="inline-block bg-white border border-blue-600 text-blue-600 py-3 px-8 rounded-full shadow-lg transform transition hover:-translate-y-1 hover:shadow-dynamic cursor-pointer"
              >
                Learn More
              </ScrollLink>
            </div>
          </div>

          {/* Image Container with Crossfade Effect */}
          <div className="image-container">
            {/* Loop through images and apply the "active" class to the current image */}
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${index + 1}`}
                className={index === currentIndex ? 'active' : ''}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Other Sections Below */}
      <section id="services">
        <Services />
      </section>

      <section id="blogs">
        <Blogs />
      </section>

      <section id="agencyTab">
        <AgencyTab />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="getInTouch">
        <GetInTouch />
      </section>

      <WhatsAppFloatingButton />
      <Footer />
    </Suspense>
  );
}
