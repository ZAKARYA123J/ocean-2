import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from "../navbar";
import Footer from "../footer";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import { FaArrowLeft, FaArrowRight, FaTimes, FaSearchPlus, FaSearchMinus } from 'react-icons/fa';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

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
    const [galleryData, setGalleryData] = useState([]);
    const [galleryAlbum, setGalleryAlbum] = useState(null);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [scale, setScale] = useState(1);
    const { id } = useParams();

    useEffect(() => {
        loadClientData(i18n.language).then(data => {
            setGalleryData(data);
            const album = data.find(post => post.id === parseInt(id));
            setGalleryAlbum(album);
        });
    }, [i18n.language, id]);

    if (!galleryAlbum) {
        return <div className="text-center py-4 text-red-500">Gallery album not found.</div>;
    }

    const images = galleryAlbum.img.map(image => image.url);

    const handleNext = () => {
        setPhotoIndex((photoIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setPhotoIndex((photoIndex + images.length - 1) % images.length);
    };

    const zoomIn = () => {
        setScale(prevScale => prevScale + 0.2);
    };

    const zoomOut = () => {
        setScale(prevScale => (prevScale > 1 ? prevScale - 0.2 : 1));
    };

    return (
        <>
            <Navbar />
            <section className="">
                <div className="mt-40 container relative">
                    <div className="lg:col-span-7">
                        <div className="mb-6">
                            <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
                                {t(galleryAlbum.titlealbum)}
                                {t(galleryAlbum.datealbum)}
                            </h1>
                        </div>
                        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
                            {galleryAlbum.img.map((image, index) => (
                                <div className="rounded-lg shadow-lg overflow-hidden mx-auto transform transition-transform duration-300 hover:scale-105" key={index}>
                                    <img
                                        src={image.url}
                                        alt={`Gallery ${index + 1}`}
                                        className="cursor-pointer w-full h-auto rounded shadow-md"
                                        onClick={() => {
                                            setPhotoIndex(index);
                                            setIsOpen(true);
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                        <Dialog
                            open={isOpen}
                            onClose={() => setIsOpen(false)}
                            maxWidth="md"
                            fullWidth
                            PaperProps={{
                                style: {
                                    position: 'relative',
                                    padding: 0,
                                    overflow: 'hidden',
                                    backgroundColor: '#444241',
                                    color: '#fff',
                                }
                            }}
                            TransitionComponent={Transition}
                        >
                            <DialogContent
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    position: 'relative',
                                    height: '80vh',
                                    padding: '30px',
                                    overflow: 'hidden',
                                }}
                            >
                                <button
                                    onClick={zoomOut}
                                    style={{
                                        position: 'absolute',
                                        top: 10,
                                        right: 130,
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        fontSize: '24px',
                                        color: '#fff'
                                    }}
                                >
                                    <FaSearchMinus />
                                </button>
                                <button
                                    onClick={zoomIn}
                                    style={{
                                        position: 'absolute',
                                        top: 10,
                                        right: 90,
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        fontSize: '24px',
                                        color: '#fff'
                                    }}
                                >
                                    <FaSearchPlus />
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    style={{
                                        position: 'absolute',
                                        top: 10,
                                        right: 10,
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        fontSize: '24px',
                                        color: '#fff'
                                    }}
                                >
                                    <FaTimes />
                                </button>
                                <button
                                    onClick={handlePrev}
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: 10,
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        fontSize: '24px',
                                        color: '#fff',
                                        transform: 'translateY(-50%)'
                                    }}
                                >
                                    <FaArrowLeft />
                                </button>
                                <button
                                    onClick={handleNext}
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        right: 10,
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        fontSize: '24px',
                                        color: '#fff',
                                        transform: 'translateY(-50%)'
                                    }}
                                >
                                    <FaArrowRight />
                                </button>
                                <div
                                    style={{
                                        width: '800px',  // Increase width
                                        height: '500px',  // Increase height
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        overflow: 'hidden',
                                        border: '2px solid #444241',  // Change border color to match the dialog
                                        boxSizing: 'border-box',
                                    }}
                                >
                                    <img
                                        src={images[photoIndex]}
                                        alt={`Image ${photoIndex}`}
                                        style={{
                                            transform: `scale(${scale})`,
                                            transition: 'transform 0.3s',
                                            maxWidth: '100%',
                                            maxHeight: '100%',
                                            objectFit: 'contain',
                                        }}
                                    />
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            </section>
            <div className='mt-10'>
                <Footer />
            </div>
        </>
    );
};

export default GalleryDetail;
