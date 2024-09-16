import React, { useState, useEffect } from "react";
import contact2 from '../assets/images/done/contact.svg';
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const CTA = styled.button`
  background-color: #3a86ff;
  color: #fff;
  padding: 0.75rem 1.5rem;
  margin-top: 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  transition: transform 0.2s, background-color 0.2s;
  border: none;
  text-transform: uppercase;
  display: inline-block;

  &:hover {
    transform: scale(1.05);
    background-color: #2a6bbf;
  }

  &:active {
    transform: scale(0.95);
  }
`;

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
      console.log("Loaded contact data:", data); 
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
    <section className="relative lg:py-24 py-16 bg-slate-50 dark:bg-slate-800" id="contact">
      {contact.map((item, index) => (
        <div className="container mx-auto px-6 md:px-12" key={index}>
          <div className="grid grid-cols-1 pb-6 text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t(item.title)}</h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t(item.desc)}
            </p>
          </div>
          <div className="grid md:grid-cols-2 items-center gap-12">
            <div className="md:col-span-1">
              <img src={contact2} alt="Contact" className="mx-auto" />
            </div>
            <div className="md:col-span-1">
              <div className="bg-white dark:bg-slate-900 rounded-md shadow-lg dark:shadow-gray-700 p-8">
                <form onSubmit={handleSubmit}>
                  <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                    <div className="lg:col-span-1">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t(item.name)}</label>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                        placeholder={t(item.name)}
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="lg:col-span-1">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t(item.email)}</label>
                      <input
                        name="email"
                        id="email"
                        type="email"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                        placeholder={t(item.email)}
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="lg:col-span-2">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t(item.question)}</label>
                      <input
                        name="subject"
                        id="subject"
                        type="text"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                        placeholder={t(item.question)}
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="lg:col-span-2">
                      <label htmlFor="comments" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t(item.comment)}</label>
                      <textarea
                        name="comments"
                        id="comments"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                        placeholder={t(item.comment)}
                        value={formData.comments}
                        onChange={handleChange}
                        rows="4"
                        required
                      />
                    </div>
                  </div>
                  <CTA type="submit">{t(item.Message)}</CTA>
                </form>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
