import React, { useRef, useState, useEffect } from "react";
import contact2 from '../assets/images/done/contact.svg';
import styled from "styled-components";
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

  // State to hold form data
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

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
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
        // Handle successful response
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          comments: ''
        });
      } else {
        // Handle error response
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
        <div className="container relative" key={index}>
          <div className="grid grid-cols-1 pb-6 text-center">
            <h3 className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary">{t(item.title)}</h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              {t(item.desc)}
            </p>
          </div>
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
            <div className="lg:col-span-7 md:col-span-6">
              <img src={contact2} alt="Contact" />
            </div>
            <div className="lg:col-span-5 md:col-span-6">
              <div className="lg:ms-5">
                <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700 p-6">
                  <form onSubmit={handleSubmit}>
                    <div className="grid lg:grid-cols-12 grid-cols-1 gap-3">
                      <div className="lg:col-span-6">
                        <label htmlFor="name" className="font-semibold">{t(item.name)}</label>
                        <input name="name" id="name" type="text" className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder={t(item.name)} value={formData.name} onChange={handleChange} required />
                      </div>
                      <div className="lg:col-span-6">
                        <label htmlFor="email" className="font-semibold">{t(item.email)}</label>
                        <input name="email" id="email" type="email" className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder={t(item.email)} value={formData.email} onChange={handleChange} required />
                      </div>
                      <div className="lg:col-span-12">
                        <label htmlFor="subject" className="font-semibold">{t(item.question)}</label>
                        <input name="subject" id="subject" className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder={t(item.question)} value={formData.subject} onChange={handleChange} required />
                      </div>
                      <div className="lg:col-span-12">
                        <label htmlFor="comments" className="font-semibold">{t(item.comment)}</label>
                        <textarea name="comments" id="comments" className="mt-2 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder={t(item.comment)} value={formData.comments} onChange={handleChange} required></textarea>
                      </div>
                    </div>
                    <CTA>
                      <button type="submit" id="submit" name="send">{t(item.Message)}</button>
                    </CTA>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
