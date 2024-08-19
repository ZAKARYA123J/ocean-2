import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
// import {recruitment} from '../data/data';
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from "styled-components";


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
            return import('./locales/fr/translation').then(module => module.recruitmentFR);
        case 'ar':
            return import('./locales/ar/translation').then(module => module.recruitmentAR);
        case 'en':
        default:
            return import('./locales/en/translation').then(module => module.recruitmentEN);
    }
  };
export default function AgencyTab(){
    const [ activeIndex, setActiveIndex ] = useState(1)
    const {type}=useParams()
    // let [scroll, setScroll] = useState(false);
    // let [manu, setManu] = useState(false)
    // useSaveScrollPosition(); // Save scroll position on navigation
    // useRestoreScrollPosition(); 

    // useEffect(() => {
    //     const handleScroll = () => {
    //       setScroll(window.scrollY > 50);
    //     };
    
    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //       window.removeEventListener('scroll', handleScroll);
    //     };
    //   }, []);
    const navigate = useNavigate();
    const [recruitment, setrecruitment] = useState([]);
    const { i18n, t } = useTranslation();
  
    useEffect(() => {
      const fetchData = async () => {
        const data = await loadClientData(i18n.language);
        setrecruitment(data);
  
  
      };
  
      fetchData();
    }, [i18n.language]);
    useEffect(() => {
      // Save the scroll position in local storage
      const handleBeforeUnload = () => {
        localStorage.setItem('scrollPosition', window.scrollY);
      };
      
      window.addEventListener('beforeunload', handleBeforeUnload);
      
      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    }, []);
    const national = "National";
    const international="International";
    return(
        <section className="realtive md:py-24 py-16" id="jobs">
            <div className="container relative">
            {recruitment.map((item, index) => {
    return (
        <div key={index} className="grid grid-cols-1 pb-6 text-center">
          <h2 className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary">{t(item.h1)}</h2>
        </div>
    );
})}
              <div className="grid md:grid-cols-12 grid-cols-1 mt-6 gap-6">
                    <div className="lg:col-span-4 md:col-span-5">
                        <div className="sticky top-20">
                        {recruitment.map((item) => (
                            <ul className="flex-column p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md" key={item.id}>
                                <li role="presentation">
                                    <button className={`px-4 py-2 text-start text-base font-medium rounded-md w-full hover:text-sky-500 duration-500 ${activeIndex === item.id ? 'text-white bg-sky-500 hover:text-white' : ''}`} onClick={() => setActiveIndex(item.id)}>
                                    <span className="text-lg mt-2 block text-dark-600 font-semibold shadow-md p-2 rounded">{t(item.title)}</span>

                                        <span className="block mt-2">{t(item.desc)}</span>
                                    </button>
                                </li>
                                
                                {/* <li role="presentation">
                                    <button className={`px-4 py-2 text-start text-base font-medium rounded-md w-full mt-6 hover:text-teal-500 duration-500 ${activeIndex === 3 ? 'text-white bg-teal-500 hover:text-white' : ''}`} onClick={() => setActiveIndex(3)}>
                                        <span className="block">Step 3</span>
                                        <span className="text-lg mt-2 block">Results & Reporting</span>
                                        <span className="block mt-2">We offer flexible and comprehensive online marketing plans</span>
                                    </button>
                                </li> */}
                            </ul>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-8 md:col-span-7">
                        <div id="myTabContent" className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                        {recruitment.map((item) => (
                            <div className={activeIndex === item.id ? '' : 'hidden' }>
                                <img src={item.image} className="shadow dark:shadow-gray-700 rounded-md" alt=""/>

                                <div className="mt-6">
                                    <h5 className="text-lg font-medium">{t(item.title2)}</h5>
                                    <p className="text-slate-400 mt-4">{t(item.desc2)}</p>
                                    
                                    <div className="mt-4">
                                    {activeIndex === 1 ? (
                                      <Link to={`/jobs/${t(item.type)}`}>
                                       <CTA color="blue">{t(item.button)}<i className="mdi mdi-chevron-right align-middle"></i></CTA>
                                      </Link>
                                        ) : (
                                         <Link to={`/jobs/${t(item.type)}`}>
                                         <CTA color="blue">{t(item.button)}<i className="mdi mdi-chevron-right align-middle"></i></CTA>
                                        </Link>
                                            )}
                                    
                                </div>
                            </div>
                        </div>
                        ))}
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
