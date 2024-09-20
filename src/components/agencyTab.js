import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styled, { keyframes } from "styled-components";
import { FiArrowRight, FiUserCheck, FiBriefcase, FiLayers } from "react-icons/fi";

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const iconAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Section = styled.section`
  position: relative;
  padding: 4rem 2rem;
  background-color: #f9fafb; /* bg-gray-50 for light mode */
  min-height: 100vh;

  @media (min-width: 768px) {
    padding: 6rem 2rem; /* md:py-24 for medium and large screens */
  }

  @media (prefers-color-scheme: dark) {
    background-color: #111827; /* bg-gray-900 for dark mode */
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Sidebar = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (prefers-color-scheme: dark) {
    background: #1f2937; /* Dark mode for the sidebar */
  }
`;

const Tab = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ active }) => (active ? "#1d4ed8" : "#f9fafb")};
  color: ${({ active }) => (active ? "#ffffff" : "#111827")};
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #1d4ed8;
    color: #ffffff;
    svg {
      animation: ${iconAnimation} 1s ease-in-out;
    }
  }

  @media (prefers-color-scheme: dark) {
    background-color: ${({ active }) => (active ? "#2563eb" : "#374151")};
    color: ${({ active }) => (active ? "#ffffff" : "#d1d5db")};
  }
`;

const CardWrapper = styled.div`
  background-color: #f9fafb; /* Light background for card */
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  }

  padding: 16px;

  @media (min-width: 768px) {
    padding: 24px; /* Larger padding on medium screens and up */
  }

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937; /* Dark background for card */
  }

  animation: ${fadeIn} 0.6s ease-out; /* Add content fade-in animation */
`;

const CardContent = styled.div`
  padding: 2rem;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937; /* Dark mode background inside card */
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #1f2937;
  margin-bottom: 1rem;

  @media (prefers-color-scheme: dark) {
    color: #f3f4f6; /* Dark mode text color */
  }
`;

const Description = styled.p`
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 2rem;

  @media (prefers-color-scheme: dark) {
    color: #d1d5db; /* Dark mode text color */
  }
`;

const CTAButton = styled.button`
  background-color: #1d4ed8;
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: #2563eb;
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4);
  }

  svg {
    transition: transform 0.3s;
  }

  &:hover svg {
    transform: translateX(5px);
  }
`;

const Image = styled.div`
  background: url(${({ src }) => src}) center/cover no-repeat;
  height: 200px;
  width: 100%;
  border-radius: 8px;
  margin-bottom: 16px;
`;

// Define the icons for the tabs
const icons = [
  <FiUserCheck size={24} />,
  <FiBriefcase size={24} />,
  <FiLayers size={24} />,
];

// Load the client data based on the language
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
    <Section>
      <Container>
        {/* Sidebar for the tabs */}
        <Sidebar>
          {recruitment.map((item, index) => (
            <Tab
              key={item.id}
              active={activeIndex === item.id}
              onClick={() => setActiveIndex(item.id)}
            >
              {t(item.title)}
              {icons[index % icons.length]}
            </Tab>
          ))}
        </Sidebar>

        {/* Redesigned Card */}
        <CardWrapper>
          {recruitment.map((item) => (
            activeIndex === item.id && (
              <React.Fragment key={item.id}>
                <Image src={item.image} />
                <CardContent>
                  <Title>{t(item.title2)}</Title>
                  <Description>{t(item.desc2)}</Description>
                  <Link to={`/jobs/${t(item.type)}`}>
                    <CTAButton>
                      {t(item.button)} <FiArrowRight />
                    </CTAButton>
                  </Link>
                </CardContent>
              </React.Fragment>
            )
          ))}
        </CardWrapper>
      </Container>
    </Section>
  );
}
