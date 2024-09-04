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
            <section className="py-20 bg-gray-50 dark:bg-gray-900" id="blog">
                <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
                    {/* Header Section */}
                    {Gallerydata.map((item, index) => (
                        <div className="text-center mb-12 mt-8" key={index}>
                            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                                {t(item.title)}
                            </h1>
                            <p className="text-lg text-gray-600 dark:text-gray-300">
                                {t(item.desc)}
                            </p>
                        </div>
                    ))}
                    
                    {/* Gallery Items */}
                    <div className="mt-16 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6">
                        {Gallerydata.map((item, index) => (
                            <div 
                                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm transform transition-transform duration-300 hover:scale-105 hover:bg-sky-200 dark:hover:bg-sky-700" 
                                key={index}
                            >
                                <Link to={`/gallery/${index + 1}`}>
                                    <div className="relative h-60 overflow-hidden">
                                        <img
                                            src={item.image}
                                            className="w-full h-full object-cover object-center rounded-t-lg transition-opacity duration-300"
                                            alt={t(item.title)}
                                            aria-label={`Gallery image for ${t(item.title)}`}
                                        />
                                    </div>
                                    <div className="p-5">
                                        <div className="flex items-center space-x-3 mb-2">
                                            <FaImages className="text-sky-500 text-xl" />
                                            <span className="text-lg text-gray-700 dark:text-gray-300">
                                                {t(item.numberimage)}
                                            </span>
                                            <div className="flex-1 flex justify-end">
                                                <span className="text-lg text-gray-700 dark:text-gray-300">
                                                    {t(item.datealbum)}
                                                </span>
                                            </div>
                                        </div>
                                        <h2 className="text-xl font-semibold mb-2 mt-1 text-gray-800 dark:text-white">
                                            {t(item.titlealbum)}
                                        </h2>
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
