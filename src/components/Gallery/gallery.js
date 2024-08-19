import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Navbar from "../navbar";
import Footer from "../footer";
import WhatsAppFloatingButton from '../WhatsAppFloatingButton';
import Switcher from "../switcher";
import { useTranslation } from 'react-i18next';
import { FaImages } from "react-icons/fa";

const loadClientData = (lang) => {
    switch (lang) {
        case 'fr':
            return import('../locales/fr/translation').then(module => module.GalleryFR);
        case 'ar':
            return import('../locales/ar/translation').then(module => module.GalleryAR);
        case 'en':
        default:
            return import('../locales/en/translation').then(module => module.GalleryEN);
    }
};
const Gallery = () => {
    const [Gallerydata, setGallerydata] = useState([]);
    const { i18n, t } = useTranslation();
  
    useEffect(() => {
      const fetchData = async () => {
        const data = await loadClientData(i18n.language);
        setGallerydata(data);
      };
      fetchData();
    }, [i18n.language]);



    return (
        <>
            <Navbar />
            <section className="py-20 bg-gray-50" id="blog">
                <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
                {Gallerydata.map((item, index) => (
                    <div className="text-center mb-8 mt-8" key={index}>
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">{t(item.title)}</h1>
                        <p className="text-lg text-gray-600">{t(item.desc)}</p>
                    </div>
                    ))}
                    <div className="mt-20 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 ">
                        {Gallerydata.map((item, index) => (
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden mx-auto transform transition-transform duration-300 hover:scale-105 hover:bg-sky-200" key={index}>
                                <Link to={`/gallery/${index + 1}`}>
                                    <img
                                        src={item.image}
                                        className="w-full h-60 object-cover"
                                        alt={t(item.title)}
                                        style={{ transform: 'scale(1.05)' }}
                                    />
                                    <div className="p-4">
                                    <div className="flex items-center space-x-2 ">
                                        <FaImages className="text-sky-500 text-xl" />
                                        <span className="text-lg text-gray-700">{t(item.numberimage)}</span>
                                        <div className="flex-1 flex justify-end">
                                            <span className="text-lg text-gray-700">{t(item.datealbum)}</span>
                                        </div>
                                    </div>
                                    <h2 className="text-xl font-semibold mb-2 mt-2 ">{t(item.titlealbum)}</h2>
                                </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <WhatsAppFloatingButton />
            <Footer />
            <Switcher />
        </>
    );
};

export default Gallery;
