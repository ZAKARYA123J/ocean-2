import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { FiCalendar, FiClock } from '../assets/icons/vander';

// Styled CTA Button with Modern Look
const CTA = styled.button`
  background-color: #3a86ff; /* Blue */
  color: #ffffff;
  padding: 0.5rem 1.5rem;
  margin-top: 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s, background-color 0.3s;
  border: none;

  &:hover {
    transform: translateY(-3px);
    background-color: #2563eb; /* Blue-600 */
  }

  &:active {
    transform: translateY(1px);
  }
`;

const loadClientData = (lang) => {
  switch (lang) {
    case 'fr':
      return import('./locales/fr/translation').then(module => module.blogDataFR);
    case 'ar':
      return import('./locales/ar/translation').then(module => module.blogDataAR);
    case 'en':
    default:
      return import('./locales/en/translation').then(module => module.blogDataEN);
  }
};

export default function Blogs() {
  const { i18n, t } = useTranslation();
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    loadClientData(i18n.language).then(data => setBlogData(data));
  }, [i18n.language]);

  const limitedItems = blogData.slice(0, 3);

  return (
    <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-gray-900" id="blog">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('Latest Articles')}
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {t('Stay updated with our latest news and articles')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {limitedItems.map((item, index) => (
            <div key={index} className="group bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={item.image} 
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
                  alt={t(item.title)} 
                />
              </div>
              <div className="p-6">
                {/* Meta Information */}
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span className="flex items-center">
                    <FiCalendar className="mr-1.5" />
                    {item.date}
                  </span>
                  <span className="flex items-center ml-4">
                    <FiClock className="mr-1.5" />
                    5 min read
                  </span>
                </div>
                
                <Link to={`/blog/${item.id}`} className="block">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors">
                    {t(item.title)}
                  </h4>
                </Link>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {t(item.desc)}
                </p>

                <Link to={`/formation/${item.id}`}>
                  <CTA>
                    {t(item.button)} <i className="mdi mdi-chevron-right align-middle ml-1"></i>
                  </CTA>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
