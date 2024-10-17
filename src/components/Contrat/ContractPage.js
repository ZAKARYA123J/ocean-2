import React from 'react';
import Navbar from '../navbar';
import Footer from '../foooter';
import HeroSection from './hero';
import ContractCardSection from './card';
import QuestionSection from './questions';
import StepsSection from './steps';
import GetInTouch from '../getInTuoch';
import FormSection from './formdetail';

const ContractWorksPage = () => {

  return (
    <>
      <Navbar />
      <HeroSection />
      <FormSection />
      <ContractCardSection />
      <StepsSection />
      <QuestionSection />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default ContractWorksPage;
