import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import './i18n';
import { useTranslation } from 'react-i18next';

const CTA = styled.button`
  background-color: var(--white);
  color: #3a86ff;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  display: flex;
  align-items: center;
  transition: transform 0.2s;
  border: solid 1px blue;

  @media only screen and (max-width: 48em) {
    padding: 0.2rem 1rem;
  }

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }
`;

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

// const loadHTML = async (lang) => {
//   try {
//     switch (lang) {
//       case 'fr':
//         return (await import('./locales/fr/translation')).htmlFR;
//       case 'ar':
//         return (await import('./locales/ar/translation')).htmlAR;
//       case 'en':
//       default:
//         return (await import('./locales/en/translation')).htmlEN;
//     }
//   } catch (error) {
//     console.error(`Failed to load HTML for language ${lang}`, error);
//     return [];
//   }
// };

const Services = () => {
  const [serviceData, setServiceData] = useState([]);
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      const data = await loadClientData(i18n.language);
      setServiceData(data);


    };

    fetchData();
  }, [i18n.language]);

  const limitedItems = serviceData.slice(0, 4);

  return (      
    <div className="bg-white-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center" id="services">
      <div className="container">
        {/* Header */}
        <div className="pb-12 text-center space-y-3">
          {serviceData.map((title, index) => (
            <h1
              key={index}
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary"
            >
              {t(title.Servicetitle)}
            </h1>
          ))}
        </div>

        {/* Services cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {limitedItems.map((skill) => (
            <div
              key={skill.id}
              data-aos="fade-up"
              data-aos-delay={skill.aosDelay}
              className="card space-y-3 sm:space-y-4 p-4"
            >
              <div style={{ color: 'skyblue' }} className="text-4xl text-primary">
                {skill.icon}
              </div>
              <h1 className="text-lg font-semibold">{t(skill.title)}</h1>
              <p className="text-gray-600 dark:text-gray-400">
                {t(skill.desc)}
              </p>
              <Link to={`/service/${skill.id}`}>
                <CTA>{t(skill.Button)}</CTA>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
