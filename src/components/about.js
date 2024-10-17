import React, { useState, useEffect } from "react";
import aboutImage from '../assets/images/about.jpg'; // Replace with your image path
import { useTranslation } from "react-i18next";
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { FaGlobe, FaFileAlt } from 'react-icons/fa'; // Importing icons

// Function to load client data based on selected language
const loadClientData = (lang) => {
  switch (lang) {
    case 'fr':
      return import('./locales/fr/translation').then(module => module.AboutFR);
    case 'ar':
      return import('./locales/ar/translation').then(module => module.AboutAR);
    case 'en':
    default:
      return import('./locales/en/translation').then(module => module.AboutEN);
  }
};

export default function About() {
  const [serviceAbout, setServiceAbout] = useState([]);
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      const data = await loadClientData(i18n.language);
      setServiceAbout(data);
    };

    fetchData();
  }, [i18n.language]);

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden" id="about">
      {serviceAbout.map((item)=>(
      <div className="container mx-auto px-8 max-w-7xl flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
        
        {/* Left Content with Fade-in and 3D effect */}
        <motion.div
          className="flex-1 text-left space-y-8 order-2 md:order-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center space-x-3">
            <FaGlobe className="text-blue-600 text-4xl" /> {/* Icon */}
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white">
              {t(item.h1)}
            </h3>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {t(item.title)}
          </p>
        </motion.div>

        {/* Central Image with Parallax Hover Effect */}
        <motion.div
          className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-700 ease-in-out order-1 md:order-2"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={aboutImage}
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <motion.div
            className="absolute bottom-8 right-8 bg-white bg-opacity-90 dark:bg-gray-800 p-4 rounded-lg shadow-xl transform hover:scale-110 transition duration-700"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="text-center">
              <span className="text-blue-600 text-4xl font-bold">
                <CountUp start={0} end={15} duration={2.5} />+
              </span>
              <span className="block text-sm text-gray-800 dark:text-gray-300 mt-1">
                {t('about.experience', 'Years Experience')}
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content with Slide-in Effect */}
        <motion.div
          className="flex-1 text-left space-y-8 order-3 md:order-3"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center space-x-3">
            <FaFileAlt className="text-blue-600 text-4xl" /> {/* Icon */}
            <h6 className="text-blue-600 text-sm font-semibold uppercase tracking-wide">
              {t(item.Services)}
            </h6>
          </div>
          <h4 className="text-3xl font-semibold text-gray-800 dark:text-white">
            {t(item.International)}
          </h4>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {t(item.desc)}
          </p>
        </motion.div>

      </div>))}
    </section>
  );
}
