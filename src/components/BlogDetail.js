import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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
    <>
      <style jsx="true">{`
        .main-container {
          display: flex;
          flex-direction: row; /* Keep the items in a row */
          gap: 20px;
          padding: 30px;
          margin: 40px auto;
          max-width: 1200px; /* Increased max width */
          align-items: flex-start; /* Align items to the top */
        }

        .section-large {
          flex: 3; /* Increased flex to make the image section wider */
          display: flex;
          flex-direction: column;
          padding: 20px;
          border-radius: 16px;
          background: #f9f9f9;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .section-small {
          flex: 1; /* Set to the same width ratio */
          display: flex;
          flex-direction: column;
          padding: 20px;
          border-radius: 16px;
          background: #ffffff;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
          height: fit-content;
          margin-top: 0; /* Removes any top margin */
          align-self: flex-start; /* Aligns the button card to the top */
        }

        .section-image {
          width: 100%;
          max-width: 700px;
          object-fit: cover;
          border-radius: 8px;
          margin: 0 auto 15px;
          display: block;
        }

        .section-large h2 {
          font-size: 1.6rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 12px;
        }

        .section-large p {
          font-size: 1rem;
          line-height: 1.6;
          color: #4a4a4a;
          margin-bottom: 20px;
        }

        .blog-detail {
          font-size: 1rem;
          line-height: 1.6;
          color: #4a4a4a;
          text-align: justify;
          margin-top: 15px;
        }

        .section-small h2 {
          font-size: 1.3rem;
          font-weight: 700;
          color: #2c3e50;
          text-align: center;
          margin-bottom: 10px;
        }

        .cta-button {
          width: 100%; /* Button takes full width of its container */
          background-color: #7e3af2;
          color: #ffffff;
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          border: none;
          transition: background 0.3s ease, transform 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 10px; /* Space above button */
        }

        .cta-button:hover {
          background-color: #6b5b95;
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(107, 91, 149, 0.3);
        }

        @media (max-width: 768px) {
          .main-container {
            flex-direction: column; /* Stack sections vertically on smaller screens */
            padding: 20px;
          }

          .section-small {
            margin-top: 20px;
          }
        }
      `}</style>

      <div className="main-container">
        <div className="section-large">
          <h2>{t(blogPost.title)}</h2>
          <img
            src={blogPost.image}
            alt={blogPost.title}
            className="section-image"
          />
          <p className="blog-detail">{t(blogPost.detail)}</p>
        </div>

        <div className="section-small ">
          <h2>Welcome to our platform tailored for {t(blogPost.title)}</h2>
          <button className="cta-button">
            <span>⚡</span> For reservation
          </button>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
