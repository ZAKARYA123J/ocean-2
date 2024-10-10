import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaBolt } from 'react-icons/fa';
import styled from 'styled-components';

// Function to load blog data based on language
const loadClientData = (lang) => {
  switch (lang) {
    case 'fr':
      return import('./locales/fr/translation').then((module) => module.blogDataFR);
    case 'ar':
      return import('./locales/ar/translation').then((module) => module.blogDataAR);
    case 'en':
    default:
      return import('./locales/en/translation').then((module) => module.blogDataEN);
  }
};

// Styled Components for Professional Look
const PageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 50px 20px;
  background-color: #f5f7fa; /* Light gray background */
  min-height: 100vh;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const BlogContainer = styled(motion.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 40px;
  max-width: 800px;
  width: 100%;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1); /* Soft shadow */
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const BlogHeader = styled.div`
  text-align: center;
`;

const BlogTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2d3748; /* Darker gray-blue */
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const BlogImage = styled(motion.img)`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1); /* Subtle shadow */
`;

const BlogContent = styled(motion.div)`
  font-size: 1.1rem;
  line-height: 1.75;
  color: #4a5568;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ActionSection = styled(motion.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05); /* Light shadow */
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 280px;
  position: sticky;
  top: 100px;
  right: 20px;

  @media (max-width: 1024px) {
    position: relative;
    width: 100%;
    margin-top: 20px;
  }
`;

const ActionTitle = styled.h3`
  font-size: 1.5rem;
  color: #2d3748; /* Dark gray-blue */
`;

const CTAButton = styled(motion.button)`
  padding: 15px 40px;
  background-color: #3182ce; /* Blue button */
  color: #ffffff;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #2b6cb0; /* Darker blue */
    transform: translateY(-2px);
  }

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-left: 8px;
  }

  /* Media query for small screens */
  @media (max-width: 768px) {
    margin-bottom: 50px; /* Add margin-bottom for small screens */
  }
`;


const BlogDetail = () => {
  const { i18n, t } = useTranslation();
  const [blogData, setBlogData] = useState([]);
  const { id } = useParams();
  const blogPost = blogData.find((post) => post.id === parseInt(id));

  useEffect(() => {
    loadClientData(i18n.language).then((data) => setBlogData(data));
  }, [i18n.language]);

  if (!blogPost) {
    return <div className="text-center py-4 text-red-500">Blog post not found.</div>;
  }

  return (
    <PageContainer>
      <BlogContainer
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <BlogHeader>
          <BlogTitle>{t(blogPost.title)}</BlogTitle>
        </BlogHeader>

        <BlogImage
          src={blogPost.image}
          alt={blogPost.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />

        <BlogContent
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t(blogPost.detail)}
        </BlogContent>
      </BlogContainer>

      {/* Sticky Call to Action on the Right */}
      <ActionSection
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <ActionTitle>{t('Need help with this topic?')}</ActionTitle>
        <CTAButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t('Get Assistance')} <FaBolt />
        </CTAButton>
      </ActionSection>
    </PageContainer>
  );
};

export default BlogDetail;
