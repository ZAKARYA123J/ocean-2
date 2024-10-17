import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

// CTA Button with a gradient and hover effect
const CTA = styled.button`
  background: linear-gradient(135deg, #3a86ff 0%, #7b2cbf 100%);
  color: white;
  padding: 0.75rem 1.5rem;
  margin-top: 1rem;
  border-radius: 30px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: linear-gradient(135deg, #2cb5e8 0%, #6a0dad 100%);
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.95);
  }
`;

const loadClientData = (lang) => {
  switch (lang) {
    case 'fr':
      return import('./locales/fr/translation').then(module => module.serviceDataFR);
    case 'ar':
      return import('./locales/ar/translation').then(module => module.serviceDataAR);
    case 'en':
    default:
      return import('./locales/en/translation').then(module => module.serviceDataEN);
  }
};

export default function Daitalservice() {
  const { id } = useParams();
  const [activeIndex, setActiveIndex] = useState(Number(id));
  const [serviceData, setServiceData] = useState([]);
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      const data = await loadClientData(i18n.language);
      setServiceData(data);
    };
    fetchData();
  }, [i18n.language]);

  // Filter the serviceData to get the selected formation
  const selectedFormation = serviceData.find((item) => item.id === activeIndex);

  return (
    <section className="relative md:py-24 py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 pb-6 text-center">
        {serviceData.map((item, index) => (
          <>
                     <h3 className="font-semibold text-2xl leading-normal mb-4">{t(item.title2)}</h3>
                     <p className="text-slate-400 max-w-xl mx-auto">
                       {t(item.desc2)}
                     </p>
                     </>
                    ))}
        </div>

        <div className="grid md:grid-cols-12 grid-cols-1 mt-6 gap-8">
          {/* Left Sidebar - Service List */}
          <div className="lg:col-span-4 md:col-span-5 bg-white shadow-lg rounded-lg p-6">
            <div className="sticky top-20">
              {serviceData.map((item) => (
                <ul className="space-y-4" key={item.id}>
                  <li>
                    <button
                      className={`w-full text-start p-4 text-lg font-medium rounded-lg border ${
                        activeIndex === item.id
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                      }`}
                      onClick={() => setActiveIndex(item.id)}
                    >
                      <span className="block text-xl font-semibold">{t(item.title)}</span>
                      <span className="block mt-1 text-base">{t(item.desc)}</span>
                    </button>
                  </li>
                </ul>
              ))}
            </div>
          </div>

          {/* Right Content Section */}
          <div className="lg:col-span-8 md:col-span-7">
            <div className="p-8 bg-white shadow-lg rounded-lg">
              {selectedFormation ? (
                <div>
                  <img
                    src={selectedFormation.image}
                    className="shadow-lg rounded-md mb-6 w-full h-64 object-cover"
                    alt="Service"
                  />
                  <div>
                    <h5 className="text-2xl font-semibold text-gray-900 mb-4">{t(selectedFormation.para1)}</h5>
                    <p className="text-gray-600 text-lg mb-6">{t(selectedFormation.desc_para1)}</p>

                    {/* Additional paragraphs */}
                    {selectedFormation.para2 && (
                      <>
                        <h5 className="text-xl font-medium text-gray-900 mb-4">{t(selectedFormation.para2)}</h5>
                        <p className="text-gray-600 text-base mb-6">{t(selectedFormation.desc_para2)}</p>
                      </>
                    )}

                    {selectedFormation.para3 && (
                      <>
                        <h5 className="text-xl font-medium text-gray-900 mb-4">{t(selectedFormation.para3)}</h5>
                        <p className="text-gray-600 text-base mb-6">{t(selectedFormation.desc_para3)}</p>
                      </>
                    )}

                    <CTA>
                      <Link to="/apply" className="text-white">
                        {t(selectedFormation.link)}
                      </Link>
                    </CTA>
                  </div>
                </div>
              ) : (
                <p>No service found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
