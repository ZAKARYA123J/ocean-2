import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import designImage from '../assets/images/done/hero.png';
import Footer from '../components/footer';
import About from "../components/about";
import Services from "../components/services";
import AgencyTab from "../components/agencyTab";
import Blogs from "../components/blog";
import GetInTouch from "../components/getInTuoch";
import Navbar from '../components/navbar';
// import Team from "../components/Team";
// import Profile from "../components/Profile";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import WhatsAppFloatingButton from '../components/WhatsAppFloatingButton';
import { useTranslation } from "react-i18next";

// Styled Components
const CTAButton = styled.button`
  background-color: #1d4ed8;
  color: #ffffff;
  padding: 14px 28px;
  margin-top: 20px;
  border-radius: 25px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(29, 78, 216, 0.4);
  cursor: pointer;

  &:hover {
    background-color: #1e40af;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(29, 78, 216, 0.5);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 3px 10px rgba(29, 78, 216, 0.3);
  }
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 0;
  background: linear-gradient(to right, #e0f7fa, #e3f2fd);
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  h1 {
    font-size: 2.5rem;
    line-height: 1.2;
    color: #0f172a;
  }

  p {
    font-size: 1.125rem;
    color: #475569;
    max-width: 480px;
    margin: 0 auto;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

// Define the loadClientData function
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

export default function Index() {
  const { i18n } = useTranslation();
  const [clientData, setClientData] = useState([]);

  // Load client data based on language change
  useEffect(() => {
    loadClientData(i18n.language).then(data => setClientData(data));
  }, [i18n.language]);

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 700,
      easing: "ease-in-out",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <Section id="home">
        <ContentWrapper>
          <TextBlock data-aos="fade-right">
            <h1>
              {clientData.map((item, index) => (
                <span key={index}>{i18n.t(item.Title)}</span>
              ))}
            </h1>
            <p>
              Elevate your business presence with our innovative design solutions
              for global recruitment and training.
            </p>
            <CTAButton>
              <ScrollLink to="contact" smooth duration={500}>
                {clientData.length > 0 ? i18n.t(clientData[0].button) : 'Contact Us'} <i className="mdi mdi-chevron-right ms-1"></i>
              </ScrollLink>
            </CTAButton>
          </TextBlock>
          <ImageWrapper data-aos="fade-left">
            <img src={designImage} alt="Design Team" />
          </ImageWrapper>
        </ContentWrapper>
      </Section>
      <Services />
      <Blogs />
      <AgencyTab />
      <About />
      <GetInTouch />
      <WhatsAppFloatingButton />
      <Footer />
    </>
  );
}
