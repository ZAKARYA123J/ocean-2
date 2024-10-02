import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './i18n';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';

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

  const limitedItems = serviceData.slice(0, 4); // Limiting to 4 items

  if (loading) {
    return <p className="text-center text-gray-700 dark:text-white">Loading services...</p>;
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 dark:text-white py-12" id="services">
      <div className="container mx-auto px-6 lg:px-8">
      {limitedItems.map((skill) => (   
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">
          {t(skill.Servicetitle)}
        </h1>))}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {limitedItems.map((skill) => (
            <div
              key={skill.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-xl"
              data-aos="fade-up"
              data-aos-delay={skill.aosDelay}
              role="region"
              aria-labelledby={`service-title-${skill.id}`}
            >
              <img 
                src={skill.image} 
                alt={t(skill.title)} 
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex justify-between items-center">
                <h2 id={`service-title-${skill.id}`} className="text-lg font-semibold text-gray-800 dark:text-white">
                  {t(skill.title)}
                </h2>
                <Link to={`/service/${skill.id}`} className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full transition-transform transform hover:scale-110">
                  <i className="mdi mdi-plus"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
