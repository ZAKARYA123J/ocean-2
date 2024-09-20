import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Navbar from "../navbar";
import Footer from '../footer';
import WhatsAppFloatingButton from '../WhatsAppFloatingButton';
import Switcher from "../switcher";
import { useTranslation } from 'react-i18next';
import { FaImages } from "react-icons/fa";
import { motion } from 'framer-motion';
import styled from 'styled-components';

// Function to load gallery data based on language
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

// Styled Components for Professional Gallery Design
const GallerySection = styled.section`
  padding: 5rem 0;
  background-color: #f9fafb;
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const GalleryContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const GalleryGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const GalleryItem = styled(motion.div)`
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

const GalleryImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const GalleryImage = styled(motion.img)`
  width: 100%;
  height: 220px;
  object-fit: cover;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 0.9;
  }
`;

const ImageOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 1;
  }
`;

const ImageTitle = styled.h2`
  position: absolute;
  bottom: 15px;
  left: 15px;
  font-size: 1.2rem;
  color: white;
`;

const GalleryInfo = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #2d3748;
  font-size: 1rem;
`;

const GalleryMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #718096;
`;

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
      <GallerySection id="gallery">
        <GalleryContainer>
          {Gallerydata.length > 0 && (
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
                {t(Gallerydata[0].title)}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {t(Gallerydata[0].desc)}
              </p>
            </div>
          )}

          <GalleryGrid
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  delayChildren: 0.3,
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {Gallerydata.map((item, index) => (
              <GalleryItem
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to={`/gallery/${index + 1}`}>
                  <GalleryImageWrapper>
                    <GalleryImage
                      src={item.image}
                      alt={t(item.title)}
                      aria-label={`Gallery image for ${t(item.title)}`}
                    />
                    <ImageOverlay />
                    <ImageTitle>{t(item.titlealbum)}</ImageTitle>
                  </GalleryImageWrapper>
                  <GalleryInfo>
                    <GalleryMeta>
                      <FaImages className="text-sky-500" />
                      {t(item.numberimage)}
                    </GalleryMeta>
                    <GalleryMeta>{t(item.datealbum)}</GalleryMeta>
                  </GalleryInfo>
                </Link>
              </GalleryItem>
            ))}
          </GalleryGrid>
        </GalleryContainer>
      </GallerySection>
      <WhatsAppFloatingButton />
      <Footer />
      <Switcher />
    </>
  );
};

export default Gallery;
