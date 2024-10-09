import React, { useState, useEffect } from "react";
import contact2 from '../assets/images/done/contact.svg';
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

// Minimized Button
const CTA = styled.button`
  background-color: #3a86ff;
  color: #fff;
  padding: 0.5rem 1rem;
  margin-top: 0.75rem;
  border-radius: 10px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  border: none;
  display: inline-block;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.05);
    background-color: #2a6bbf;
    box-shadow: 0 3px 10px rgba(58, 134, 255, 0.4);
  }

  &:active {
    transform: scale(0.95);
  }
`;

// Compact Section Layout with specified background color
const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  padding: 2rem;
  background-color: #f9fafb;
  background-color: var(--tw-bg-opacity, 1) #f9fafb;
  background: var(--bg-gray-50, bg-gray-900); 
  min-height: 80vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 70%; /* Increased the image size slightly */
    transition: transform 0.4s ease;
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const FormContainer = styled(motion.div)`
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
  border-radius: 12px;
  padding: 1.25rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  form {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
`;

// Function to load client data based on selected language
const loadClientData = async (lang) => {
  try {
    switch (lang) {
      case 'fr':
        return (await import('./locales/fr/translation')).ContactFR;
      case 'ar':
        return (await import('./locales/ar/translation')).ContactAR;
      case 'en':
      default:
        return (await import('./locales/en/translation')).ContactEN;
    }
  } catch (error) {
    console.error(`Failed to load client data for language ${lang}`, error);
    return [];
  }
};

export default function GetInTouch() {
  const [contact, setContactData] = useState([]);
  const { i18n, t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    comments: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await loadClientData(i18n.language);
      setContactData(data);
    };

    fetchData();
  }, [i18n.language]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://sendmailocean.onrender.com/Email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          comments: ''
        });
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <Section className="bg-gray-50 dark:bg-gray-900" id="contact">
      <ImageContainer>
        <img src={contact2} alt="Contact" />
      </ImageContainer>

      {contact.map((item, index) => (
        <FormContainer
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-3">{t(item.title)}</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              {t(item.name)}
            </label>
            <input
              name="name"
              id="name"
              type="text"
              className="mt-1 block w-full py-1.5 px-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder={t(item.name)}
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              {t(item.email)}
            </label>
            <input
              name="email"
              id="email"
              type="email"
              className="mt-1 block w-full py-1.5 px-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder={t(item.email)}
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
              {t(item.question)}
            </label>
            <input
              name="subject"
              id="subject"
              type="text"
              className="mt-1 block w-full py-1.5 px-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder={t(item.question)}
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <label htmlFor="comments" className="block text-sm font-medium text-gray-700">
              {t(item.comment)}
            </label>
            <textarea
              name="comments"
              id="comments"
              className="mt-1 block w-full py-1.5 px-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder={t(item.comment)}
              value={formData.comments}
              onChange={handleChange}
              rows="3"
              required
            />

            <CTA type="submit">{t(item.Message)}</CTA>
          </form>
        </FormContainer>
      ))}
    </Section>
  );
}
