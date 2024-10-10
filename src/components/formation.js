import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FiCalendar, FiClock } from '../assets/icons/vander'; // Ensure these icons are imported correctly
import { useTranslation } from 'react-i18next';
import styled from "styled-components";

// Function to load client data based on the language
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

// Styled Components for CourseCard
const CardContainer = styled.div`
  background-color: #ffffff;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
`;

const CardImage = styled.img`
  border-radius: 12px;
  transition: transform 0.3s ease-in-out;
  width: 100%;
  height: 200px;
  object-fit: cover;

  &:hover {
    transform: scale(1.05);
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e293b;
  margin-top: 15px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  color: #475569;
  margin-bottom: 20px;
`;

const FilterInput = styled.input`
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  transition: border-color 0.2s;
  min-width: 200px;

  &:focus {
    border-color: #3a86ff;
    outline: none;
  }
`;

const FilterSelect = styled.select`
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  transition: border-color 0.2s;
  min-width: 150px;

  &:focus {
    border-color: #3a86ff;
    outline: none;
  }
`;

const ButtonLink = styled(Link)`
  color: #3a86ff;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #2a6bbf;
  }
`;

const CourseCard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  const { i18n, t } = useTranslation();
  const [bloggDta, setBlogdata] = useState([]);

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
    { label: 'Language', value: 'Language' }
  ];

  return (
    <section className="relative md:py-24 py-16" id="blog">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Title and Description */}
        <div className="grid grid-cols-1 pb-6 text-center">
          {/* <h3 className="font-semibold text-2xl leading-normal">{t('Courses')}</h3>
          <p className="text-slate-400 max-w-xl mx-auto mb-8">
            {t('Explore a variety of courses to boost your skills and knowledge.')}
          </p> */}

          {/* Search and Filter Inputs */}
          <div className="relative flex justify-center items-center mt-4">
            <div className="relative flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 p-6">
              <FilterInput
                type="text"
                placeholder="Search by title"
                value={searchTerm}
                onChange={handleSearch}
                className="focus:border-blue-500 transform md:scale-100 scale-110"
              />

              <FilterSelect
                value={filter}
                onChange={handleFilterChange}
                className="focus:border-blue-500 transform md:scale-100 scale-110"
              >
                {filterOptions.map(option => (
                  <option key={option.value} value={option.value}>{t(option.label)}</option>
                ))}
              </FilterSelect>
            </div>
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
          {filteredBlogData.map((item, index) => (
            <CardContainer key={index}>
              <Link to={`/formation/${index + 1}`}>
                <CardImage src={item.image} alt={item.title} />
              </Link>
              <div className="mt-4">
                <Title>{t(item.title)}</Title>
                <Description>{t(item.desc)}</Description>
                <ButtonLink to={`/formation/${index + 1}`}>
                  {t(item.button)} <i className="mdi mdi-chevron-right align-middle"></i>
                </ButtonLink>
              </div>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCard;
