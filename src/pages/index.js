import React, { useEffect, useState, lazy, Suspense } from "react";
import { Link as ScrollLink } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";

// Import images directly
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
const loadClientData = (lang) => {
  switch (lang) {
    case 'fr':
      return import('../components/locales/fr/translation').then(module => module.Titlefr);
    case 'ar':
      return import('../components/locales/ar/translation').then(module => module.TitleAR);
    case 'en':
    default:
      return import('../components/locales/en/translation').then(module => module.TitleEN);
  }
};

export default function Index() {
  const { i18n } = useTranslation();
  const [clientData, setClientData] = useState([]);
  const images = [heroImage1, heroImage2, heroImage3]; // Array of images
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current image index
  useEffect(() => {
    // Load client data whenever the language changes
    loadClientData(i18n.language).then(data => setClientData(data));
    
    // Initialize AOS animations
  
  }, [i18n.language]);

  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 1000,
      easing: "ease-in-out",
      delay: 100,
    });
    AOS.refresh();
  }, [i18n.language]);

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
          /* Default styles for PC/desktop screens */
          .image-container {
            position: relative;
            width: 600px;
            height: 400px;
          }

          .image-container img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0;
            transition: opacity 1.5s ease-in-out;
          }

          .image-container img.active {
            opacity: 1;
            z-index: 1;
            transform: scale(1.05);
            transition: transform 1.5s ease-in-out, opacity 1.5s ease-in-out;
          }

          /* Mobile-specific adjustments */
          @media (max-width: 768px) {
            .image-container {
              position: relative;
              width: 100%; /* Full width for mobile */
              height: 250px; /* Fixed height for mobile */
              max-width: 100%; /* Limit max width */
              margin-top: 20px; /* Ensure the image is below the text content */
            }

            .text-center {
              text-align: center;
              word-wrap: break-word; /* Ensure text wraps properly */
              overflow-wrap: break-word; /* Prevent overflow of long words */
              overflow: hidden; /* Prevent content overflow */
              padding: 0 16px; /* Add padding to prevent text touching edges */
              max-width: 100%; /* Ensure container doesn't exceed screen */
              padding-top: 20px; /* Add top padding for mobile to create more space */
            }

            .md\\:flex-row {
              flex-direction: column; /* Vertical stacking on mobile */
              justify-content: center;
              align-items: center;
            }

            .md\\:space-x-8 {
              margin: 0; /* Remove horizontal space on mobile */
            }

            .md\\:text-left {
              text-align: center; /* Center text on mobile */
            }

            .scroll-link {
              padding: 12px 24px; /* Reduce button padding on mobile */
              font-size: 12px; /* Further reduce button text size for mobile */
            }

            .cta-buttons {
              flex-direction: column;
              gap: 12px; /* Space between buttons on mobile */
            }

            .hero-text {
              font-size: 1.8rem; /* Further reduce hero text size for mobile */
              line-height: 1.2; /* Reduce line height */
              word-break: break-word; /* Ensure text doesn't overflow */
              max-width: 100%; /* Ensure text fits within screen */
              padding-top: 90px; /* Add top padding for mobile to avoid overlap */
            }

            .sub-text {
              font-size: 0.9rem; /* Reduce subtext font size */
              margin-top: 1rem;
              padding: 0 16px; /* Add padding for proper spacing */
              word-wrap: break-word; /* Ensure long words wrap correctly */
              overflow: hidden; /* Prevent overflow */
              max-width: 100%; /* Ensure it fits mobile screen */
            }

            body {
              overflow-x: hidden; /* Prevent horizontal scroll on mobile */
            }

            .container {
              max-width: 100%; /* Ensure the container doesn’t overflow */
              overflow-x: hidden; /* Prevent horizontal overflow */
            }

            .overflow-hidden {
              overflow: hidden; /* Ensure the content doesn’t overflow */
            }
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-200 via-purple-200 to-blue-300 min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center z-10 space-y-8 md:space-y-0 md:space-x-8">
          
          {/* Hero Text and Buttons */}
          <div className="text-center md:text-left flex-1 space-y-6" data-aos="fade-right">
          <p className=" md:mt-0 text-6xl font-extrabold text-gray-900 leading-tight">
  {clientData.map((item, index) => (
    <span key={index}>{i18n.t(item.Title)}</span>
  ))}
</p>

            

            {/* CTA Buttons */}
            <div className="mt-4 flex justify-center md:justify-start space-x-4">
              <ScrollLink
                to="getInTouch"
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
      <section id="contact">
      <Footer /></section>
    </Suspense>
  );
}
