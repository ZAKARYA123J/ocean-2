import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './i18n';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../src/assets/css/Services.css';
import lange2 from '../../src/assets/images/lange/imagelange.png';
import odysseyImage from '../../src/assets/images/lange/equip.png';
import peopleImage from '../../src/assets/images/lange/hello.png';
import peopleImage1 from '../../src/assets/images/lange/logha.png';

// Services Component
const Services = () => {
  const servicesData = [
    { id: 1, title: "Spanish", description: "Learn the Beauty of Spanish" },
    { id: 2, title: "German", description: "Learn the Beauty of German" },
    { id: 3, title: "Arabic", description: "Learn the Beauty of Arabic" },
    { id: 4, title: "Mandarin", description: "Learn the Beauty of Mandarin" },
    { id: 4, title: "Mandarin", description: "Learn the Beauty of Mandarin" },
    { id: 4, title: "Mandarin", description: "Learn the Beauty of Mandarin" },
    { id: 4, title: "Mandarin", description: "Learn the Beauty of Mandarin" },
  ];
  const loadClientData = async (lang) => {
    try {
      switch (lang) {
        case 'fr':
          return (await import('./locales/fr/translation')).langeDataFR;
        case 'ar':
          return (await import('./locales/ar/translation')).langDataAR;
        case 'en':
        default:
          return (await import('./locales/en/translation')).langDataEN;
      }
    } catch (error) {
      console.error(`Failed to load client data for language ${lang}:`, error);
      return [];
    }
  };
  const [serviceData, setServiceData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await loadClientData(i18n.language);
        setServiceData(data);
      } catch (error) {
        console.error("Error fetching service data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [i18n.language]);

  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 700,
      easing: 'ease-in-out',
      delay: 100,
      once: true,
    });
    AOS.refresh();
  }, []);

  const limitedItems = serviceData.slice(0, 4);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        {/* Pulse effect for loading */}
        <div className="loading-pulse"></div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <div
      className="container mx-auto px-6 lg:px-8 text-center mb-16"
      style={{
        animationName: 'slideInUp',
        animationDuration: '600ms',
        animationTimingFunction: 'ease',
        animationDelay: '0ms',
        animationDirection: 'normal',
        animationFillMode: 'both',
      }}
    >
      <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
        {t('Your Gateway to Multilingual Proficiency')}
      </h1>
      <img
        src={lange2}
        alt="Multilingual Learning"
        className="w-full h-72 object-cover rounded-lg"
      />
      <style jsx>{`
        @keyframes slideInUp {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
        {t('Unlock the world by mastering languages. We offer an immersive, interactive, and personalized language learning.')}
      </p>

      {/* Services Grid Section */}
      <div
  className=""
  style={{
    backgroundImage: "url('/path-to-your-image/adde.PNG')", // Replace with the correct path to your background image
  }}
>
<div className="container mx-auto my-8" id="services">
  {/* Cards Section */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {servicesData.map((service) => (
      <Link
        to={`/service/${service.id}`}
        key={service.id}
        className="block p-6 bg-black rounded-lg shadow-lg hover:shadow-xl transition-shadow"
      >
        <div>
          <h2 className="text-white text-xl font-semibold mb-2">{service.title}</h2>
          <p className="text-gray-400">{service.description}</p>

          {/* Green Circular Button */}
          <div className="mt-4 flex items-center justify-center">
            <div className="bg-green-500 rounded-full p-3 transition-transform transform hover:scale-105">
              {/* SVG Arrow */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    ))}
  </div>
    
    {/* Repeat for other cards */}
  </div>
</div>

      {/* Linguistic Odyssey Section */}
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-white rounded-lg shadow-lg">
          {/* Left side: Image with Play Button */}
          <div className="relative">
            <img
              src={odysseyImage}
              alt="Linguistic Odyssey"
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute top-4 right-4 bg-green-500 text-white p-2 rounded-full cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.752 11.168l-4.586-2.287A1 1 0 009 9.764v4.472a1 1 0 001.166.986l4.586-2.287a1 1 0 000-1.767z"
                />
                <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" />
              </svg>
            </div>
          </div>

          {/* Right side: Title, Description, Enroll Button */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Delving into Our Linguistic Odyssey
            </h2>
            <p className="text-gray-700 mb-4">
              We are dedicated to fostering a vibrant community of language learners
              committed to linguistic proficiency and cultural appreciation.
              Established in 2002.
            </p>
            <p className="text-gray-700 mb-4">
              Our journey began with a vision to provide an immersive and comprehensive
              language education experience guided by expert instructors and a
              supportive community.
            </p>
            <Link to="/enroll" className="bg-green-500 text-white p-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300">
              Enroll Now
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side: Title and Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-16">
        <img src={peopleImage} alt="People Speaking Different Languages" className="w-full h-auto object-cover rounded-lg" />
        <div className="bg-a3e635 p-8 text-black">
          <h2 className="text-2xl font-bold mb-4">{t('Unraveling the Unique Why Us')}</h2>
          <div className="flex items-center mb-4">
            <img src="https://img.icons8.com/ios-filled/50/000000/user-group-man-man.png" alt="Expert Faculty" className="w-10 h-10 mr-4" />
            <div>
              <h3 className="font-semibold text-black">{t('Expert Faculty')}</h3>
              <p className="text-black">{t('Emphasize the qualifications and expertise of your instructors. Highlight their experience.')}</p>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <img src="https://img.icons8.com/ios-filled/50/000000/classroom.png" alt="Small Class Sizes" className="w-10 h-10 mr-4" />
            <div>
              <h3 className="font-semibold text-black">{t('Small Class Sizes')}</h3>
              <p className="text-black">{t('Emphasize the personalized attention provided in small groups.')}</p>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <img src="https://img.icons8.com/ios-filled/50/000000/virtual-reality.png" alt="Immersive Learning" className="w-10 h-10 mr-4" />
            <div>
              <h3 className="font-semibold text-black">{t('Immersive Learning')}</h3>
              <p className="text-black">{t('Provide an engaging learning experience through interactive and practical sessions.')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Unlock Your Language Potential Section */}
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-black text-white">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-4">Unlock Your Language Potential</h2>
            <p className="mb-6">
              Embark on an exhilarating journey to discover the joy of mastering multiple languages through our immersive programs.
            </p>
            <div className="flex gap-4">
              <Link to="/enroll" className="bg-a3e635 text-black px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300">
                Enroll Now
              </Link>
              <Link to="/contact" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition duration-300">
                Contact Us
              </Link>
            </div>
          </div>
          <div>
            <img src={peopleImage1} alt="Learning Environment" className="w-full h-auto object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
