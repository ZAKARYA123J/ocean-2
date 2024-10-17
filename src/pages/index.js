import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Footer from '../components/foooter';
import About from "../components/about";
import Services from "../components/services";
import AgencyTab from "../components/agencyTab";
import Blogs from "../components/blog";
import GetInTouch from "../components/getInTuoch";
import Navbar from '../components/navbar';
import WhatsAppFloatingButton from '../components/WhatsAppFloatingButton';
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

// Import images directly
import heroImage1 from '../assets/images/done/TeamDev/service.png';
import heroImage2 from '../assets/images/done/TeamDev/service1.png';
import heroImage4 from '../assets/images/done/TeamDev/service2.png';

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
    width: 600px;
    height: 400px;
    object-fit: cover;
    transition: opacity 2s ease-in-out;
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
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
  const [currentImage, setCurrentImage] = useState(0);

  // List of images for automatic switching
  const images = [heroImage1, heroImage2, heroImage4];

  useEffect(() => {
    loadClientData(i18n.language).then(data => setClientData(data));
    
    // Initialize AOS animations
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, [i18n.language]);

  // Automatically switch images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <Helmet>
        <title>Home | Ocean Connecting</title>
        <meta name="description" content="We specialize in global job placement and document assistance, offering tailored support in multiple languages." />
        <meta name="keywords" content="global job placement, career support, document assistance, international jobs" />
      </Helmet>

      <Navbar />
      <Section id="home" className="bg-gradient-to-br from-blue-200 via-purple-200 to-blue-300">
        <ContentWrapper>
          <TextBlock data-aos="fade-right" className="pt-24" >
            <h1 className="sm:ml-20 sm:mb-20">
              {clientData.map((item, index) => (
                <span key={index}>{i18n.t(item.Title)}</span>
              ))}
            </h1>
            {/* <p>
              Elevate your business presence with our innovative design solutions
              for global recruitment and training.
            </p> */}
            <div className="flex justify-center md:justify-start space-x-4">
  {clientData.map((item, index) => (
    <div key={index}>
      <ScrollLink
        to="contact"
        smooth
        duration={500}
        className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-8 rounded-full shadow-lg transform transition hover:-translate-y-1 hover:shadow-dynamic cursor-pointer mr-2"
      >
        {i18n.t(item.button)}
      </ScrollLink>

      <ScrollLink
        to="services"
        smooth
        duration={500}
        className="inline-block bg-white border border-blue-600 text-blue-600 py-3 px-8 rounded-full shadow-lg transform transition hover:-translate-y-1 hover:shadow-dynamic cursor-pointer"
      >
        {i18n.t(item.Learn)}
      </ScrollLink>
    </div>
  ))}
</div>

          
          </TextBlock>
          <ImageWrapper data-aos="fade-left" className="" isVisible>
            <img src={images[currentImage]} alt="Design Team" />
          </ImageWrapper>
        </ContentWrapper>
      </Section>

      <Services />
      <Blogs />
      <AgencyTab />
      <About />
      <GetInTouch />
      {/* <ChatBot/> */}
      <WhatsAppFloatingButton />
      <Footer />
    </>
  );
}
