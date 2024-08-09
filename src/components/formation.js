// components/CourseCard.js
import React, { useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import { FiCalendar, FiClock } from '../assets/icons/vander';
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
const CourseCard = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('All');
    const { i18n, t } = useTranslation();
    const [bloggDta, setBlogdata] = React.useState([]);
  
    useEffect(() => {
      loadClientData(i18n.language).then(data => setBlogdata(data));
    }, [i18n.language]);
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const filteredBlogData = bloggDta.filter(item => {
        const matchesSearchTerm = item.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filter === 'All' || item.type.includes(filter);
        return matchesSearchTerm && matchesFilter;
    });

    const filterOptions = [
        { label: 'All', value: 'All' },
        { label: 'Formation', value: 'Formation' },
        { label: 'language', value: 'language' }
    ];

    return (
        <section className="relative md:py-24 py-16" id="blog">
            <div className="container relative">
                 <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="font-semibold text-2xl leading-normal mb-4">Formation</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">Cette formation en gestion administrative enseigne aux participants les compétences essentielles pour exceller dans les tâches administratives, en couvrant la gestion de la documentation, l'optimisation des processus organisationnels, et la communication professionnelle. Elle combine théorie et pratique pour des compétences applicables immédiatement en entreprise.</p>
                    <div className="relative flex justify-center items-center mt-4">
                       <div className="relative flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 p-6">
        <input 
        type="text" 
        placeholder="Search by title" 
        value={searchTerm} 
        onChange={handleSearch} 
        className="w-full md:w-2/3 p-4 text-xl md:text-lg border border-gray-300 rounded-md focus:outline-none focus:border-teal-500 transform md:scale-100 scale-110"
        style={{ minHeight: '50px' }}
                            />
                            
    <select 
        value={filter} 
        onChange={handleFilterChange} 
        className="w-full md:w-1/3 p-4 text-xl md:text-lg border border-gray-300 rounded-md focus:outline-none focus:border-teal-500 transform md:scale-100 scale-110"
        style={{ minHeight: '50px' }}
    >
                            {filterOptions.map(option => (
                                <option key={option.value} value={option.value}>{t(option.label)}</option>
                            ))}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                    {filteredBlogData.map((item, index) => {
                        return (
                            <div className="group relative overflow-hidden" key={index}>
                                <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                                    <img  src={item.image}  className="group-hover:scale-110 transition-transform duration-500" alt=""/>
                                </div>

                                <div className="mt-6">
                                    <div className="flex mb-4">
                                    </div>
                                    <Link to={`/formation/${index+1}`} className="title text-lg font-semibold hover:text-teal-500 duration-500 ease-in-out">{item.title}</Link>
                                    <p className="text-slate-400 mt-2">{item.desc}</p>

                                    <div className="mt-3">
                                        <Link to={`/formation/${index+1}`} className="text-teal-500">{t(item.button)}<i className="mdi mdi-chevron-right align-middle"></i></Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CourseCard;
