import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import heroImage1 from '../assets/images/done/TeamDev/service.png';
import heroImage2 from '../assets/images/done/TeamDev/service1.png';
import heroImage3 from '../assets/images/done/TeamDev/service2.png';
import Footer from '../components/footer';
import About from "../components/about";
import Services from "../components/services";
import AgencyTab from "../components/agencyTab";
import Blogs from "../components/blog";
import GetInTouch from "../components/getInTuoch";
import Navbar from '../components/navbar';
import WhatsAppFloatingButton from '../components/WhatsAppFloatingButton';
import { SpeedInsights } from '@vercel/speed-insights/react';

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
  const { i18n, t } = useTranslation();
  const [clientData, setClientData] = useState([]);
  const images = [heroImage1, heroImage2, heroImage3];
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    loadClientData(i18n.language).then(data => setClientData(data));
    
    AOS.init({
      offset: 120,
      duration: 1000,
      easing: "ease-in-out",
      delay: 100,
    });
    AOS.refresh();
  }, [i18n.language]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <>
      <Navbar />
      <style>
        {`
          /* Loader Styles */
          .loader-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f3f4f6;
          }

          .spinner {
            border: 12px solid #f3f3f3;
            border-radius: 50%;
            border-top: 12px solid #3498db;
            width: 80px;
            height: 80px;
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

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
              width: 100%;
              height: 250px;
              max-width: 100%;
              margin-top: 20px;
            }

            .text-center {
              text-align: center;
              word-wrap: break-word;
              overflow-wrap: break-word;
              overflow: hidden;
              padding: 0 16px;
              max-width: 100%;
              padding-top: 20px;
            }

            .md\\:flex-row {
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }

            .md\\:space-x-8 {
              margin: 0;
            }

            .md\\:text-left {
              text-align: center;
            }

            .scroll-link {
              padding: 12px 24px;
              font-size: 12px;
            }

            .cta-buttons {
              flex-direction: column;
              gap: 12px;
            }

            .hero-text {
              font-size: 1.8rem;
              line-height: 1.2;
              word-break: break-word;
              max-width: 100%;
              padding-top: 90px;
            }

            .sub-text {
              font-size: 0.9rem;
              margin-top: 1rem;
              padding: 0 16px;
              word-wrap: break-word;
              overflow: hidden;
              max-width: 100%;
            }

            body {
              overflow-x: hidden;
            }

            .container {
              max-width: 100%;
              overflow-x: hidden;
            }

            .overflow-hidden {
              overflow: hidden;
            }
          }
        `}
      </style>
      <section className="relative bg-gradient-to-br from-blue-200 via-purple-200 to-blue-300 min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center z-10 space-y-8 md:space-y-0 md:space-x-8 container overflow-hidden">
          {clientData.map((item, index) => (
            <div className="text-center md:text-left flex-1 space-y-6" data-aos="fade-right" key={index}>
              <h1 className="hero-text text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
                {t(item.Title)}
              </h1>
              <div className="cta-buttons mt-4 flex justify-center md:justify-start space-x-4">
                <ScrollLink
                  to="contact"
                  smooth
                  duration={500}
                  className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-6 rounded-full shadow-lg transform transition hover:-translate-y-1 hover:shadow-dynamic cursor-pointer"
                >
                  {t(item.button)}
                </ScrollLink>
                <ScrollLink
                  to="services"
                  smooth
                  duration={500}
                  className="inline-block bg-white border border-blue-600 text-blue-600 py-2 px-6 rounded-full shadow-lg transform transition hover:-translate-y-1 hover:shadow-dynamic cursor-pointer"
                >
                  {t(item.Learn)}
                </ScrollLink>
              </div>
            </div>
          ))}
          
          <div className="image-container">
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
      <SpeedInsights />
    </>
  );
}
