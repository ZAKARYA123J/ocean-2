import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const loadClientData = (lang) => {
  switch (lang) {
    case 'fr':
      return import('./locales/fr/translation').then(module => module.blogDataFR);
    case 'ar':
      return import('./locales/ar/translation').then(module => module.blogDataAR);
    case 'en':
    default:
      return import('./locales/en/translation').then(module => module.blogDataEN);
  }
};

const BlogDetail = () => {
  const { i18n, t } = useTranslation();
  const [blogData, setBlogData] = useState([]);
  const { id } = useParams();
  const blogPost = blogData.find(post => post.id === parseInt(id));

  useEffect(() => {
    loadClientData(i18n.language).then(data => setBlogData(data));
  }, [i18n.language]);

  if (!blogPost) {
    return <div className="text-center py-4 text-red-500">Blog post not found.</div>;
  }

    return (
        <>
            <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen p-4 lg:p-4">
                <div className="w-full lg:w-2/3 mb-8 lg:mb-0">
                    <div className="mb-6">
                        <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">{t(blogPost.title)}</h1>
                    </div>
                    <div className="mb-6">
                        <img 
                            src={blogPost.image} 
                            alt={blogPost.title} 
                            className="w-full rounded-lg"
                        />
                    </div>
                    <div className="prose prose-gray text-base lg:text-lg">
                        <p>{t(blogPost.detail)}</p>
                    </div>
                </div> 
                <div className="lg:w-2/3 mb-9 lg:mb-80 p-5 bg-white rounded-lg shadow-lg flex flex-col justify-center items-center lg:ml-8">
                    <p className="lg:w-2/3 mb-5 lg:mb-6">{t(blogPost.resrvedatail)}{t(blogPost.title)}{t(blogPost.register)} </p>
                    <button className="bg-purple-600 text-white py-3 lg:py-4 px-5 lg:px-10 rounded-lg text-lg lg:text-xl font-semibold flex items-center">
              <span className="mr-2">⚡</span> {t(blogPost.resrveButton)}
                    </button>
</div>
            </div>
        </>
    );
};

export default BlogDetail;
