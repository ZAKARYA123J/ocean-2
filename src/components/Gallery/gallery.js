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
            <section className="py-20 bg-gray-50 dark:bg-gray-900" id="gallery">
                <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
                    {/* Header Section */}
                    {Gallerydata.length > 0 && (
                        <div className="text-center mb-12 mt-8">
                            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
                                {t(Gallerydata[0].title)}
                            </h1>
                            <p className="text-lg text-gray-600 dark:text-gray-300">
                                {t(Gallerydata[0].desc)}
                            </p>
                        </div>
                    )}

                    {/* Gallery Items */}
                    <div className="mt-16 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8">
                        {Gallerydata.map((item, index) => (
                            <div
                                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
                                key={index}
                            >
                                <Link to={`/gallery/${index + 1}`}>
                                    <div className="relative group">
                                        <img
                                            src={item.image}
                                            className="w-full h-60 object-cover object-center transition-opacity duration-300 group-hover:opacity-75"
                                            alt={t(item.title)}
                                            aria-label={`Gallery image for ${t(item.title)}`}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                                        <div className="absolute bottom-0 p-4 text-white">
                                            <h2 className="text-lg font-semibold">
                                                {t(item.titlealbum)}
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center space-x-3 mb-2">
                                            <FaImages className="text-sky-500 text-2xl" />
                                            <span className="text-lg text-gray-700 dark:text-gray-300">
                                                {t(item.numberimage)}
                                            </span>
                                            <div className="flex-1 flex justify-end">
                                                <span className="text-lg text-gray-700 dark:text-gray-300">
                                                    {t(item.datealbum)}
                                                </span>
                                            </div>
                                        </div>
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
