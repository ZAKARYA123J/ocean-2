import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from '../navbar';
import Footer from '../footer';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

const loadClientData = (lang) => {
    const locales = {
        fr: () => import('../locales/fr/translation').then(module => module.GalleryFR),
        ar: () => import('../locales/ar/translation').then(module => module.GalleryAR),
        en: () => import('../locales/en/translation').then(module => module.GalleryEN),
    };
    return locales[lang] ? locales[lang]() : locales['en']();
};

const GalleryDetail = () => {
    const { i18n, t } = useTranslation();
    const [galleryAlbum, setGalleryAlbum] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        loadClientData(i18n.language).then(data => {
            const album = data.find(post => post.id === parseInt(id));
            setGalleryAlbum(album);
        });
    }, [i18n.language, id]);

    useEffect(() => {
        if (galleryAlbum) {
            Fancybox.bind('[data-fancybox="gallery"]', {
                Toolbar: false,
                animated: false,
            });
        }
    }, [galleryAlbum]);

    if (!galleryAlbum) {
        return <div className="text-center py-4 text-red-500">Gallery album not found.</div>;
    }

    return (
        <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
            <Navbar />
            <section className="flex-grow mb-20">
                <div className="mt-24 container mx-auto px-4 lg:px-8 max-w-6xl">
                    <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white mb-8 text-center">
                        {t(galleryAlbum.titlealbum)} <span className="text-lg text-gray-500">{t(galleryAlbum.datealbum)}</span>
                    </h1>
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {galleryAlbum.img.map((image, index) => (
                            <div
                                className="rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 ease-in-out cursor-pointer hover:scale-105 hover:shadow-2xl"
                                key={index}
                                role="button"
                                aria-label={`Gallery image ${index + 1}`}
                            >
                                <a data-fancybox="gallery" href={image.url} data-caption={`Image ${index + 1}`}>
                                    <img
                                        src={image.url}
                                        alt={`Gallery ${index + 1}`}
                                        className="w-full h-48 object-cover rounded-t-lg transition-opacity duration-300 hover:opacity-90"
                                    />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default GalleryDetail;
