import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './i18n';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../src/assets/css/Services.css';

const loadClientData = async (lang) => {
  try {
    switch (lang) {
      case 'fr':
        return (await import('./locales/fr/translation')).serviceDataFR;
      case 'ar':
        return (await import('./locales/ar/translation')).serviceDataAR;
      case 'en':
      default:
        return (await import('./locales/en/translation')).serviceDataEN;
    }
  } catch (error) {
    console.error(`Failed to load client data for language ${lang}`, error);
    return [];
  }
};

const Services = () => {
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
    <div className="bg-gray-50 dark:bg-gray-900 dark:text-white py-16" id="services">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Title section */}
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">
          {/* {t(skill.Servicetitle)} */}
        </h1>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {limitedItems.map((skill) => (
            <Link
              to={skill.link}
              key={skill.id}
              className="card-wrapper"
              data-aos="fade-up"
              data-aos-delay={skill.aosDelay}
            >
              <div className="card">
                <div className="card-image">
                  {/* Image */}
                  <img 
                    src={skill.image} 
                    alt={t(skill.title)} 
                    className="w-full h-48 object-cover"
                  />
                </div>

                <div className="card-content">
                  {/* Card content */}
                  <h2 id={`service-title-${skill.id}`} className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {t(skill.title)}
                  </h2>

                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    {t(skill.description)}
                  </p>

                  <div className="text-blue-600 dark:text-blue-400 font-medium">
                    {t(skill.Bouton)} &rarr;
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;