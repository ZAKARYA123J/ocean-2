import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import projectAlphaLogo from '../assets/images/done/glass3.png';
import projectBetaLogo from '../assets/images/done/ocean3.png';
import solarcell from '../assets/images/done/solar-cell.png';
import test from '../assets/images/done/test.svg';
import bardage from '../assets/images/done/bardage.svg';
import vitrine from '../assets/images/done/vitrine.svg';

// Step 3: Define translation resources
const resources = {
  en: {
    translation: {
      title: "Cleaning Services",
      description:
        "Offices, large areas, administrative buildings, condominiums, factories… Our versatile agents adapt to all your surfaces and offer you their expertise. We offer you a 100% tailor-made offer for the exterior cleanliness of your premises.",
      services: {
        facade: "Facade",
        bardage: "Bardage",
        exterior_coating: "Exterior Coating",
        sign: "Sign",
      },
    },
  },
  fr: {
    translation: {
      title: "Services de Nettoyage",
      description:
        "Bureaux, grandes surfaces, bâtiments administratifs, copropriétés, usines… Nos Agents Polyvalents s’adaptent à toutes vos surfaces et vous font profiter de leur savoir-faire. Nous vous proposons une offre 100% sur mesure pour la propreté extérieure de vos locaux.",
      services: {
        facade: "Façade",
        bardage: "Bardage",
        exterior_coating: "Revêtement extérieur",
        sign: "Enseigne",
      },
    },
  },
  ar: {
    translation: {
      title: "خدمات التنظيف",
      description:
        "المكاتب، المساحات الكبيرة، المباني الإدارية، الشقق المشتركة، المصانع… يتكيف وكلاؤنا المتعددون مع جميع الأسطح ويوفرون لك خبراتهم. نقدم لك عرضًا مخصصًا بنسبة 100% لنظافة خارجية لمقراتك.",
      services: {
        facade: "الواجهة",
        bardage: "البردج",
        exterior_coating: "الطلاء الخارجي",
        sign: "العلامة",
      },
    },
  },
};

// Initialize i18next
i18n.use(LanguageDetector).use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // React already escapes
  },
});

// Simulate fetching projects
const fetchProjects = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { nameKey: 'services.facade', logoPath: vitrine },
        { nameKey: 'services.bardage', logoPath: bardage },
        { nameKey: 'services.exterior_coating', logoPath: test },
        { nameKey: 'services.sign', logoPath: solarcell },
      ]);
    }, 1000);
  });
};

const ProjectsPage = () => {
  const { t, i18n } = useTranslation();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects().then((data) => {
      setProjects(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <section className="flex-grow pt-7">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl mt-10">
          <h1 className="text-5xl font-bold text-center mb-10 text-gray-900 dark:text-white">
            {t('title')}
          </h1>
          <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
            {t('description')}
          </p>
          
          {loading ? (
            <div className="flex justify-center items-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-8 w-8 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
            </div>
          ) : (
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {projects.map((project, index) => (
                <li
                  key={index}
                  className="group flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                >
                  <div className="flex justify-center items-center h-32 w-full mb-4">
                    <img
                      src={project.logoPath}
                      alt={`${t(project.nameKey)} Logo`}
                      className="h-24 w-24 object-contain transition-transform transform group-hover:rotate-3 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-4">
                    {t(project.nameKey)}
                  </h3>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
