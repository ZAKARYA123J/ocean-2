import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

// Styled CTA Button with a Clean, Modern Look
const CTA = styled.button`
  background-color: #2563eb; /* Blue-600 */
  color: #ffffff;
  padding: 0.6rem 1.4rem;
  margin-top: 1rem;
  border-radius: 25px;
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
    background-color: #1e40af; /* Blue-800 */
  }

  &:active {
    transform: translateY(1px);
  }
`;

// Function to load recruitment data based on language
const loadClientData = (lang) => {
  switch (lang) {
    case "fr":
      return import("./locales/fr/translation").then((module) => module.recruitmentFR);
    case "ar":
      return import("./locales/ar/translation").then((module) => module.recruitmentAR);
    case "en":
    default:
      return import("./locales/en/translation").then((module) => module.recruitmentEN);
  }
};

export default function AgencyTab() {
  const [activeIndex, setActiveIndex] = useState(1);
  const { type } = useParams();
  const [recruitment, setRecruitment] = useState([]);
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      const data = await loadClientData(i18n.language);
      setRecruitment(data);
    };

    fetchData();
  }, [i18n.language]);

  return (
    <section className="relative py-16 bg-gray-50 dark:bg-gray-900" id="jobs">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        {recruitment.map((item, index) => (
          <div key={index} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {t(item.h1)}
            </h2>
          </div>
        ))}

        <div className="grid md:grid-cols-12 grid-cols-1 gap-8">
          {/* Tabs Navigation */}
          <div className="lg:col-span-4 md:col-span-5">
            <div className="sticky top-20 space-y-4">
              {recruitment.map((item) => (
                <div
                  className={`p-5 rounded-lg cursor-pointer transition-all duration-300 ${
                    activeIndex === item.id
                      ? "bg-blue-500 text-white shadow-lg"
                      : "bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-200 border dark:border-gray-700 hover:shadow-md"
                  }`}
                  key={item.id}
                  onClick={() => setActiveIndex(item.id)}
                >
                  <h3 className="text-lg font-semibold mb-1">{t(item.title)}</h3>
                  <p className="text-sm">{t(item.desc)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="lg:col-span-8 md:col-span-7">
            <div className="p-8 bg-white dark:bg-slate-800 rounded-lg shadow-lg dark:shadow-gray-700 transition-all duration-300">
              {recruitment.map((item) => (
                <div key={item.id} className={activeIndex === item.id ? "" : "hidden"}>
                  <img
                    src={item.image}
                    className="w-full h-auto rounded-lg shadow-md dark:shadow-gray-700 mb-6"
                    alt={t(item.title)}
                  />
                  <div>
                    <h5 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      {t(item.title2)}
                    </h5>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{t(item.desc2)}</p>
                    <Link to={`/jobs/${t(item.type)}`}>
                      <CTA>
                        {t(item.button)}
                        <i className="mdi mdi-chevron-right align-middle ml-1"></i>
                      </CTA>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
