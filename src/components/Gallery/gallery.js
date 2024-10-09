import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Navbar from "../navbar";
import Footer from "../foooter"; // Note: Corrected 'foooter' to 'footer'
import WhatsAppFloatingButton from '../WhatsAppFloatingButton';
import Switcher from "../switcher";
import { useTranslation } from 'react-i18next';
import { FaImages } from "react-icons/fa";

const fetchAPIData = async () => {
    const response = await fetch('https://hono-on-vercel123-54cp.vercel.app/api/galleries');
    const data = await response.json();
    return data;
};
const Gallery = () => {
    const [galleryData, setGalleryData] = useState([]);
    const { i18n, t } = useTranslation();
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchAPIData();
            const sortedData = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            setGalleryData(sortedData);
        };
        fetchData();
    }, [i18n.language]);
    return (
        <>
            <Navbar />
            <section className="py-20 bg-gray-50 dark:bg-gray-900" id="gallery">
                <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
                    <div className="text-center mb-12 mt-8">
                        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
                            Welcome to Our Gallery!
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            Discover the creativity and passion behind our work through these images. Enjoy the view!
                        </p>
                    </div>
                    <div className="mt-16 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8">
                        {galleryData.map((item) => (
                            <div
                                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
                                key={item.id} 
                            >
                                <Link to={`/gallery/${item.id}`}>
                                    <div className="relative group">
                                        <img
                                            src={item.img[0]}
                                            className="w-full h-60 object-cover object-center transition-opacity duration-300 group-hover:opacity-75"
                                            alt={`Gallery image for ${t(item.title)}`}
                                            aria-label={`Gallery image for ${t(item.title)}`}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                                        <div className="absolute bottom-0 p-4 text-white">
                                            <h2 className="text-lg font-semibold">
                                                {t(item.title)}
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="p-3">
                                        <div className="flex items-center space-x-3 ">
                                            <FaImages className="text-sky-500 text-2xl" />
                                            <span className="text-lg text-gray-700 dark:text-gray-300">
                                                {t(item.numberimage)}
                                            </span>
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
