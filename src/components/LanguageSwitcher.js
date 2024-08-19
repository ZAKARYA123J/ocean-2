import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import saudi from './flags/saudi.png';
import french from './flags/fr.jpeg';
import english from './flags/eng.png';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState('en');

    useEffect(() => {
        // Check local storage for text direction and set language accordingly
        const storedDirection = localStorage.getItem('textDirection');
        const defaultLanguage = storedDirection === 'rtl' ? 'ar' : 'en';
        
        setSelectedLanguage(defaultLanguage);
        i18n.changeLanguage(defaultLanguage);
        document.documentElement.dir = storedDirection || 'ltr';
    }, [i18n]);

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
        i18n.changeLanguage(language);

        // Update the document direction based on the language
        const direction = language === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.dir = direction;
        localStorage.setItem('textDirection', direction);
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
                <img src={english} alt="English" className="w-6 h-6" />
            </button>
            <button 
                onClick={() => handleLanguageChange('fr')} 
                className={getButtonClass('fr')}
            >
                <img src={french} alt="Français" className={`w-6 h-6 ${selectedLanguage === 'ar' ? 'mr-2' : ''}`}/>
            </button>
            <button 
                onClick={() => handleLanguageChange('ar')} 
                className={getButtonClass('ar')}
            >
                <img src={saudi} alt="العربية" className="w-6 h-6"/>
            </button>
        </div>
    );
};

export default LanguageSwitcher;
