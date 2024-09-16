import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import aboutImage from '../assets/images/about.jpg';
import { useTranslation } from "react-i18next";
import CountUp from 'react-countup';

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
    <section className="relative py-16 bg-gradient-to-r from-sky-50 to-gray-100 dark:from-gray-900 dark:to-gray-800" id="about">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-12">
          {/* Image Section */}
          <div className="flex justify-center md:justify-start">
            <div className="relative rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <img
                src={aboutImage}
                alt="About Us"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
              <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-80 p-4 rounded-lg shadow-md">
                <div className="text-center">
                  <span className="text-blue-500 text-4xl font-bold">
                    <CountUp className="counter-value" start={0} end={15} />+
                  </span>
                  <span className="block text-sm text-gray-800 dark:text-gray-200 mt-1">
                    Years Experience
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            {serviceAbout.map((item, index) => (
              <React.Fragment key={index}>
                <h3 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                  {t(item.h1)}
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 max-w-lg mx-auto mb-6 md:mx-0">
                  {t(item.desc)}
                </p>
                <h6 className="text-blue-600 text-sm font-semibold uppercase mb-2 tracking-wide">
                  {t(item.ask)}
                </h6>
                <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  {t(item.title)}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto mb-6 md:mx-0">
                  {t(item.desc)}
                </p>
                {/* Optional Call to Action */}
                {/* <Link to="" className="inline-flex items-center justify-center h-10 px-6 text-base font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 transition duration-300">
                  Read More <i className="mdi mdi-chevron-right align-middle ml-1"></i>
                </Link> */}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
