import React, { useEffect, useRef,useState } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import nurseVideo from '../assets/images/done/TeamNurse/nurse2.mp4';
import CardNurse from './CardNurse';
import ContactForm from './ContactForm';
import TestimonialsSection from './TestimonialsSection';
import ServicesSection from './ServicesSection';
import './i18n';
import { useTranslation } from 'react-i18next';

const loadClientData = async (lang) => {
  try {
    switch (lang) {
      case 'fr':
        return (await import('./locales/fr/translation')).NurseFR;
      case 'ar':
        return (await import('./locales/ar/translation')).NurseAR;
      case 'en':
      default:
        return (await import('./locales/en/translation')).NurseEN;
    }
  } catch (error) {
    console.error(`Failed to load client data for language ${lang}`, error);
    return [];
  }
};
const NursingServicesPage = () => {
  const videoRef = useRef(null);
  const [nursedata, setNurseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { i18n, t } = useTranslation();
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await loadClientData(i18n.language);
        setNurseData(data);
      } catch (error) {
        console.error("Error fetching service data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [i18n.language]);
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => {
        console.error('Error attempting to autoplay video:', error);
      });
    }
  }, []);
  if (loading) {
    return <p>Loading services...</p>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Navbar />
      {nursedata.map((item,key)=>(
        <div key={key}>  
      <section className="relative flex items-center justify-center h-screen text-white text-center">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover video-background"
          src={nurseVideo}
          onLoadedData={() => console.log('Video loaded successfully.')}
          onError={(e) => console.error('Error loading video:', e)}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-50 z-[1]"></div>
        <div className="relative z-10 container mx-auto px-6 lg:px-12">
         

       
          <h1 className="text-5xl font-extrabold mb-4">{t(item.title)}</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
          {t(item.desc)}
          </p>
          <a href="#contact" className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
          {t(item.contact)}
          </a>
        </div>
      </section>
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl text-center">
          <h2 className="text-4xl font-bold text-blue-800 dark:text-white mb-12 animate-fade-in">
          {t(item.about)}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          {t(item.descab)}

          </p>
        </div>
      </section>
      </div>
))}
      <CardNurse />
      <ServicesSection/>
      <ContactForm />
      {/* <TestimonialsSection /> */}
      
      <Footer />
    </div>
  );
};

export default NursingServicesPage;
