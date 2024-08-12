import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import saudi from './flags/saudi.png';
import french from './flags/fr.jpeg';

import english from './flags/eng.png';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
  };

  const getButtonClass = (language) => (
    `focus:outline-none ${selectedLanguage === language ? 'border-2 border-sky-500' : ''}`
  );

  return (
    <div className="flex space-x-2">
      <button 
        onClick={() => handleLanguageChange('en')} 
        className={getButtonClass('en')}
      >
        <img src={english} alt="English" className="w-6 h-6 " />
      </button>
      <button 
        onClick={() => handleLanguageChange('fr')} 
        className={getButtonClass('fr')}
      >
        <img src={french} alt="Français" className="w-6 h-6 " />
      </button>
      <button 
        onClick={() => handleLanguageChange('ar')} 
        className={getButtonClass('ar')}
      >
        <img src={saudi} alt="العربية" className="w-6 h-6 " />
      </button>
     
     
    </div>
  );
};

export default LanguageSwitcher;
