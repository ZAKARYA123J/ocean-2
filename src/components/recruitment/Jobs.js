import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../navbar';
import Footer from '../footer';
import { FaAngleRight, FaBriefcase, FaGlobeAmericas, FaLanguage, FaClock, FaFileAlt } from 'react-icons/fa'; // Professional icons
import Whatp from '../WhatsAppFloatingButton';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

// Function to dynamically load job data based on the selected language
import styled from 'styled-components';
import { motion } from 'framer-motion'; // For smooth animations

// Function to load client data based on the language
const loadClientData = (lang) => {
  switch (lang) {
    case 'fr':
      return import('../locales/fr/translation').then(module => module.jobsFR);
    case 'ar':
      return import('../locales/ar/translation').then(module => module.jobsAR);
    case 'en':
    default:
      return import('../locales/en/translation').then(module => module.jobsEN);
  }
};

// Styled Components for JobListings
const Section = styled.section`
  padding: 4rem 2rem;
  background-color: #f8f9fb;
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  color: #1f2937;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #6b7280;
  text-align: center;
  margin-bottom: 2rem;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const FilterSelect = styled.select`
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  font-size: 1rem;
  min-width: 300px;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: #3b82f6;
    outline: none;
  }
`;

const JobGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
`;

const JobCard = styled(motion.div)`
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Ensure the content is spaced evenly */
  height: 100%; /* Ensure all cards have equal height */
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
`;

const JobImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const JobContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-grow: 1; /* Ensures the content grows to fill the available space */
`;

const JobTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
`;

const JobDetail = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  color: #6b7280;
  font-size: 0.875rem;

  svg {
    min-width: 1.25rem; /* Ensures all icons have the same size */
    min-height: 1.25rem;
  }

  span {
    flex: 1;
    line-height: 1.5;
    word-break: break-word; /* Ensures long text wraps properly */
  }
`;

const JobType = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: #3b82f6;
  margin-top: 1rem;
`;

const ButtonWrapper = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
`;

const ButtonLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  background-color: #3b82f6;
  color: #ffffff;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2563eb;
  }

  svg {
    margin-left: 0.5rem;
  }
`;

const JobListings = () => {
  const [selectedType, setSelectedType] = useState('All');
  const { type } = useParams();
  const navigate = useNavigate();
  const [jobs, setJob] = useState([]);
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      const data = await loadClientData(i18n.language);
      setJob(data);
    };
    fetchData();
  }, [i18n.language]);

  // Get unique job types for dropdown options
  const jobTypes = [...new Set(jobs.map(job => job.type)), 'All'];

  // Filter jobs based on selected type
  const filteredJobs = selectedType === 'All' ? jobs : jobs.filter(job => job.type === selectedType);

  // Effect to set the selected type based on URL parameter
  useEffect(() => {
    if (type && jobTypes.includes(type)) {
      setSelectedType(type);
    } else {
      setSelectedType('All');
    }
  }, [type, jobTypes]);

  // Handle dropdown change and update URL
  const handleTypeChange = (e) => {
    const newType = e.target.value;
    setSelectedType(newType);
    navigate(`/jobs/${newType}`);
  };

  return (
    <>
      <Helmet>
        <title>Jobs | Ocean Connecting</title>
        <meta name="description" content="Learn more about the Jobs we offer for international career and document assistance." />
        <meta name="keywords" content="international services, career support, document assistance" />
      </Helmet>
      <div className="p-10 bg-gray-100">
        <Navbar />
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
            {/* Page Title */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">{t('Job Listings')}</h2>
              <p className="text-gray-600">{t('Find your dream job with us')}</p>
            </div>

            {/* Dropdown for selecting job type */}
            <div className="mb-8 flex justify-center">
              <select
                value={selectedType}
                onChange={handleTypeChange}
                className="p-2 w-full max-w-md border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {jobTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Job Listings */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <div className="h-40 bg-gray-200">
                    <img
                      className="w-full h-full object-cover"
                      src={job.image}
                      alt={`${job.title} company logo`}
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="text-blue-600 font-bold text-lg mb-1">{t(job.title)}</h3>
                      <p className="text-gray-600 text-sm mb-1"><strong>{t(job.menu1)}:</strong> {t(job.secteur)}</p>
                      <p className="text-gray-600 text-sm mb-1"><strong>{t(job.menu2)}:</strong> {t(job.niveaulanguage)}</p>
                      <p className="text-gray-600 text-sm mb-1"><strong>{t(job.menu3)}:</strong> {t(job.timevisa)}</p>
                      <p className="text-gray-600 text-sm mb-1"><strong>{t(job.menu4)}:</strong> {t(job.contratime)}</p>
                      <p className="text-gray-600 text-sm mb-1"><strong>{t(job.menu5)}:</strong> {t(job.pricecontrat)}</p>
                      <p className="text-gray-600 text-sm"><strong>{t(job.menu6)}:</strong> {t(job.more)}</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-blue-600 font-semibold text-sm">{job.type}</span>
                      <a
                        href={job.link}
                        download="form"
                        className="inline-flex items-center px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                      >
                        <span>{t(job.action)}</span>
                        <FaAngleRight className="ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Whatp />
        <Footer />
      </div>
      <Navbar />
      <Section>
        <Container>
          {/* Page Title */}
          <Title>{t('Job Listings')}</Title>
          <Subtitle>{t('Find your dream job with us')}</Subtitle>

          {/* Dropdown for selecting job type */}
          <FilterContainer>
            <FilterSelect value={selectedType} onChange={handleTypeChange}>
              {jobTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </FilterSelect>
          </FilterContainer>

          {/* Job Listings Grid */}
          <JobGrid>
            {filteredJobs.map((job) => (
              <JobCard
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <JobImage src={job.image} alt={`${job.title} company logo`} />
                <JobContent>
                  <JobTitle>{t(job.title)}</JobTitle>

                  {/* Conditionally render Job Details with Icons */}
                  {job.secteur && (
                    <JobDetail>
                      <FaBriefcase />
                      <span>{t(job.secteur)}</span>
                    </JobDetail>
                  )}
                  {job.niveaulanguage && (
                    <JobDetail>
                      <FaLanguage />
                      <span>{t(job.niveaulanguage)}</span>
                    </JobDetail>
                  )}
                  {job.timevisa && (
                    <JobDetail>
                      <FaClock />
                      <span>{t(job.timevisa)}</span>
                    </JobDetail>
                  )}
                  {job.contratime && (
                    <JobDetail>
                      <FaFileAlt />
                      <span>{t(job.contratime)}</span>
                    </JobDetail>
                  )}
                  {job.pricecontrat && (
                    <JobDetail>
                      <FaGlobeAmericas />
                      <span>{t(job.pricecontrat)}</span>
                    </JobDetail>
                  )}
                </JobContent>
                
                {/* Button placed at the bottom */}
                <ButtonWrapper>
                  <ButtonLink href={job.link} download="form">
                    {t(job.action)} <FaAngleRight />
                  </ButtonLink>
                </ButtonWrapper>
              </JobCard>
            ))}
          </JobGrid>
        </Container>
      </Section>
      <Whatp />
      <Footer />
    </>
  );
};

export default JobListings;
