import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from "../navbar";
import Footer from "../footer";

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

const GalleryDetail = () => {
    const { i18n, t } = useTranslation();
    const [galleryData, setgalleryData] = useState([]);
    const { id } = useParams();
    const galleryalbum = galleryData.find(post => post.id === parseInt(id));

    useEffect(() => {
        loadClientData(i18n.language).then(data => setgalleryData(data));
    }, [i18n.language]);

    if (!galleryalbum) {
        return <div className="text-center py-4 text-red-500">Blog post not found.</div>;
    }

    return (
        <>
            <Navbar />
            <section className="">
                <div className=" mt-40 container relative">
                    <div className="grid lg:grid-cols-12 md:grid-cols-2 mt-12 items-center gap-[200px]">
                        <div className="lg:col-span-7">
                            <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen p-4 lg:p-4">
                                <div className="w-full lg:w-2/3 mb-8 lg:mb-0">
                                    <div className="mb-6">
                                        <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">{t(galleryalbum.title)}</h1>
                                    </div>
                                    <div className="mb-6">
                                        <img
                                            src={galleryalbum.image}
                                            alt={galleryalbum.title}
                                            className="w-full rounded-lg"
                                        />
                                    </div>
                                    <div className="prose prose-gray text-base lg:text-lg">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default GalleryDetail;
