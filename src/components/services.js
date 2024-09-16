import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import './i18n';
import { useTranslation } from 'react-i18next';

// Define loadClientData function
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

const CTA = styled.button`
  background-color: #ffffff;
  color: #3a86ff;
  padding: 0.5rem 1rem;
  margin-top: auto; /* Push button to the bottom */
  border-radius: 20px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s, background-color 0.2s;
  border: solid 1px #3a86ff;
  white-space: nowrap; /* Prevents text wrapping */

  &:hover {
    transform: scale(1.05);
    background-color: #e0f2fe;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column; /* Ensure button is at the bottom */
  justify-content: space-between; /* Pushes button to the bottom */
  height: 100%; /* Full height for uniform card sizing */

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

const IconWrapper = styled.div`
  font-size: 4rem;
  color: #0ea5e9; /* Updated icon color */
  margin-bottom: 10px;
`;

const Header = styled.h1`
  font-size: 2.5rem;
  color: #4a4a4a; /* Dark gray for headings */
  text-align: center;
  margin-bottom: 2rem;
`;

const ServiceWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

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
    <div className="bg-white dark:bg-gray-900 dark:text-white py-12 sm:grid sm:place-items-center" id="services">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <Header>{t('Services')}</Header>

        {/* Services cards */}
        <ServiceWrapper>
          {limitedItems.map((skill) => (
            <Card
              key={skill.id}
              data-aos="fade-up"
              data-aos-delay={skill.aosDelay}
            >
              <IconWrapper>
                {skill.icon}
              </IconWrapper>
              <h1 className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-white">{t(skill.title)}</h1>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {t(skill.desc)}
              </p>
              <Link to={`/service/${skill.id}`}>
                <CTA>{t(skill.Bouton)}</CTA>
              </Link>
            </Card>
          ))}
        </ServiceWrapper>
      </div>
    </div>
  );
};

export default Services;
