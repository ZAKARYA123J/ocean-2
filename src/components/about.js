import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import aboutImage from '../assets/images/about.jpg';
import { useTranslation } from "react-i18next";
import CountUp from 'react-countup';

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
    <section className="relative md:py-24 py-16" id="about">
      <div className="container relative">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
          {serviceAbout.map((item, index) => (
            <React.Fragment key={index}>
              <div className="md:col-span-6">
                <div className="lg:me-8">
                  <div className="relative">
                    <img
                      src={aboutImage}
                      className="rounded-full shadow dark:shadow-gray-700"
                      alt="About Us"
                    />
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 mx-auto size-56 flex justify-center items-center bg-white dark:bg-slate-900 rounded-full shadow dark:shadow-gray-700">
                      <div className="text-center">
                        <span className="text-sky-500 text-2xl font-semibold mb-0 block">
                          <CountUp className="counter-value text-6xl font-semibold" start={0} end={15} />+
                        </span>
                        <span className="font-semibold block mt-2">Years <br /> Experience</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="lg:ms-8">
                  <h6 className="text-sky-500 text-sm font-semibold uppercase mb-2">{t(item.ask)}</h6>
                  <h3 className="font-semibold text-2xl leading-normal mb-4">{t(item.title)}</h3>
                  <p className="text-slate-400 max-w-xl mb-6">
                    {t(item.desc)}
                  </p>
                  {/* Uncomment and modify if needed */}
                  {/* <Link to="" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-sky-500 text-white">Read More <i className="mdi mdi-chevron-right align-middle ms-0.5"></i></Link> */}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
