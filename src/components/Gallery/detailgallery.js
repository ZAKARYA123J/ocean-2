import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from '../navbar';
import Footer from '../footer';
import { Fancybox } from '@fancyapps/ui'; // Correct import
import '@fancyapps/ui/dist/fancybox/fancybox.css'; // Alternative import

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
            Fancybox.bind('[data-fancybox="gallery"]'); // Bind only when the album is loaded
        }
    }, [galleryAlbum]);

    if (!galleryAlbum) {
        return <div className="text-center py-4 text-red-500">Gallery album not found.</div>;
    }

    return (
        <div className="flex flex-col">
            <Navbar />
            <section className="flex-grow mb-20">
                <div className="mt-40 container relative">
                    <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
                        {t(galleryAlbum.titlealbum)} {t(galleryAlbum.datealbum)}
                    </h1>
                    <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {galleryAlbum.img.map((image, index) => (
                            <div className="rounded-lg shadow-lg overflow-hidden mx-auto" key={index}>
                                <a data-fancybox="gallery" href={image.url} data-caption={`Image ${index + 1}`}>
                                    <img src={image.url} alt={`Gallery ${index + 1}`} className="cursor-pointer w-full h-auto rounded shadow-md" />
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