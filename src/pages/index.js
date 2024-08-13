import React,{useEffect} from "react";
import { Link as Link1 } from "react-scroll";
import { Link } from "react-router-dom";
import heroImg from "../assets/images/design-team.svg"
import desayn from '../assets/images/done/design-team.svg'

import Navbar from "../components/navbar";
import About from "../components/about";
import Services from "../components/services";
import AgencyTab from "../components/agencyTab";
import Cta from "../components/cta";
import Client from "../components/client";
import Blogs from "../components/blog";
import GetInTouch from "../components/getInTuoch";
import Footer from "../components/footer";
import Switcher from "../components/switcher";
import AOS from "aos";
import "aos/dist/aos.css";
import styled, { keyframes } from "styled-components";
import WhatsAppFloatingButton from '../components/WhatsAppFloatingButton';
import LanguageSwitcher from "../components/LanguageSwitcher";
import img from './result.svg';
import { useTranslation } from "react-i18next";
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
          return import('../components/locales/fr/translation').then(module => module.Titlefr);
      case 'ar':
          return import('../components/locales/ar/translation').then(module => module.TitleAR);
      case 'en':
      default:
          return import('../components/locales/en/translation').then(module => module.TitleEN);
  }
};

export default function Index(){
  const { i18n } = useTranslation(); 
  const [clientData, setClientData] = React.useState([]);

    React.useEffect(() => {
        // Load client data whenever the language changes
        loadClientData(i18n.language).then(data => setClientData(data));
    }, [i18n.language]);
    useEffect(() => {
        AOS.init({
          offset: 100,
          duration: 800,
          easing: "ease-in",
          delay: 100,
        });
        AOS.refresh();
      }, []);
    return(
        <>
        <Navbar/>
        <section className="relative overflow-hidden md:py-48 py-40 bg-teal-500/5 dark:bg-sky-500/20" id="home">
  <div className="container relative mt-8">
    <div className="grid md:grid-cols-2 grid-cols-1 gap-6 items-center">
      {clientData.map((item, index) => (
        <div key={index}>
          <h1 className="font-semibold lg:leading-normal leading-normal tracking-wide text-4xl lg:text-5xl mb-5">
            {i18n.t(item.Title)}
          </h1>
          <p className="text-slate-400 text-lg max-w-xl">
            {/* Add content here if needed */}
          </p>
          <div className="mt-6">
            <CTA>
              <Link1 to="contact">
                {i18n.t(item.button)} <i className="mdi mdi-chevron-right ms-1"></i>
              </Link1>
            </CTA>
          </div>
        </div>
      ))}
      <div className="lg:ms-8">
        <div className="relative">
          <img src={desayn} className="relative top-16" alt="" />
          <div className="overflow-hidden absolute md:size-[500px] size-[400px] bg-gradient-to-tl to-sky-500/20 via-sky-500/70 from-sky-500 bottom-1/2 translate-y-1/2 md:start-0 start-1/2 ltr:md:translate-x-0 ltr:-translate-x-1/2 rtl:md:translate-x-0 rtl:translate-x-1/2 -z-1 shadow-md shadow-sky-500/10 rounded-full"></div>
        </div>
      </div>
    </div>
  </div>
</section>
        {/* <LanguageSwitcher/> */}
        <Services/>
        <Blogs/>
        <AgencyTab/>
        {/* <Cta/>
    
        <Client/> */}
        {/* <Pricing/> */}
        
        <About/>
        <GetInTouch/>
        <WhatsAppFloatingButton/>
        <Footer/>
        {/* <Switcher/> */}
        
        </>
    )
}