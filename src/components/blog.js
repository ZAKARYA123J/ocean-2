import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { blogData } from "../data/data";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { FiCalendar, FiClock } from '../assets/icons/vander';

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
  const [bloggDta, setBlogdata] = React.useState([]);

  useEffect(() => {
    loadClientData(i18n.language).then(data => setBlogdata(data));
  }, [i18n.language]);

  const limitedItems = bloggDta.slice(0, 3);

  return (
    <section className="relative md:py-24 py-16" id="blog">
      <div className="container relative">
      
            <div className="grid grid-cols-1 pb-6 text-center">
            {limitedItems.map((item, index) => (
                        <h3 className="font-semibold text-2xl leading-normal mb-4" key={index}>
                            {i18n.t(item.blogetitle)}
                        </h3>
                    ))}
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
              {limitedItems.map((item, index) => (
                <div className="group relative overflow-hidden" key={index}>
                  <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                    <img src={item.image} className="group-hover:scale-110 duration-500" alt="" />
                  </div>
                  <div className="mt-6">
                    {/* Uncomment and use the following if needed */}
                    {/* <div className="flex mb-4">
                      <span className="flex items-center text-slate-400 text-sm">
                        <FiCalendar className="size-4 text-slate-900 dark:text-white me-1.5" />
                        {item.date}
                      </span>
                      <span className="flex items-center text-slate-400 text-sm ms-3">
                        <FiClock className="size-4 text-slate-900 dark:text-white me-1.5" />
                        5 min read
                      </span>
                    </div> */}
                   
                    <Link to={`/blog/${item.id}`} className="title text-lg font-semibold hover:text-sky-500 duration-500 ease-in-out">
                      {t(item.title)}
                    </Link>
                    <p className="text-slate-400 mt-2">
                      {t(item.desc)}
                    </p>

                    <div className="mt-3">
                      <CTA>
                        <Link to={`/formation/${item.id}`}>
                          {t(item.button)} <i className="mdi mdi-chevron-right align-middle"></i>
                        </Link>
                      </CTA>
                    </div>
                  </div>
                </div>
              ))}
            </div>
      </div>
    </section>
  );
}
