import React, { useState,useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Link as Link1 } from "react-scroll";
import { serviceData } from "../data/data";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
const CTA = styled.button`
  background-color: var(--white);
  color: #3a86ff;
  padding: 0.5rem 1rem;
  margin-top: 2px;
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
  const selectedFormation = serviceData.find(item => item.id === activeIndex);

  return (
    <section className="relative md:py-24 py-16">
      <div className="container relative">
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
        <div className="grid md:grid-cols-12 grid-cols-1 mt-6 gap-6">
          <div className="lg:col-span-4 md:col-span-5">
            <div className="sticky top-20">
              {serviceData.map((item) => (
                <ul className="flex-column p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md" key={item.id}>
                  <li role="presentation">
                    <button
                      className={`px-4 py-2 text-start text-base font-medium rounded-md w-full hover:text-sky-500 duration-500 ${activeIndex === item.id ? 'text-white bg-sky-500 hover:text-white' : ''}`}
                      onClick={() => setActiveIndex(item.id)}
                    >
                      <span className="text-lg mt-2 block text-dark-600 font-semibold shadow-md p-2 rounded text-lg mt-2 block text-center"><strong>{t(item.title)}</strong></span>
                      <span className="block mt-2">{t(item.desc)}</span>
                    </button>
                  </li>
                </ul>
              ))}
            </div>
          </div>
          <div className="lg:col-span-8 md:col-span-7">
            <div id="myTabContent" className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
              {selectedFormation ? (
                <div>
                  <img src={selectedFormation.image} className="shadow dark:shadow-gray-700 rounded-md" alt="" />
                  <div className="mt-6">
                    <div className="flex items-center" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <h5 className="text-lg font-medium"><strong>{t(selectedFormation.para1)}</strong></h5>
                      <CTA>
                        {selectedFormation.link}
                      </CTA>
                    </div>
                    <p className="text-slate-400 mt-4">{t(selectedFormation.desc_para1)}</p>
                    <br />
                    <h5 className="text-lg font-medium"><strong>{t(selectedFormation.para2)}</strong></h5>
                    <p className="text-slate-400 mt-4">{selectedFormation.desc_para2}</p>
                    <br />
                    <h5 className="text-lg font-medium"><strong>{t(selectedFormation.para3)}</strong></h5>
                    <p className="text-slate-400 mt-4">{t(selectedFormation.desc_para3)}</p>
                    <br />
                    <h5 className="text-lg font-medium"><strong>{t(selectedFormation.para4)}</strong></h5>
                    <p className="text-slate-400 mt-4">{t(selectedFormation.desc_para4)}</p>
                    <br />
                    <h5 className="text-lg font-medium"><strong>{t(selectedFormation.para5)}</strong></h5>
                    <p className="text-slate-400 mt-4">{t(selectedFormation.desc_para5)}</p>
                    <div className="mt-4">
                      <CTA>
                        {selectedFormation.link}
                        {/* <Link1 to="contact" className="text-sky-500"smooth={true} duration={1000} activeClass='active' spy={true}>{selectedFormation.Button} <i className="mdi mdi-chevron-right align-middle"></i></Link1> */}
                      </CTA>
                    </div>
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
