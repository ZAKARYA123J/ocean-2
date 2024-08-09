import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white p-2 rounded-lg shadow-lg">
      <select
        className="px-4 py-2  text-black rounded-lg"
        onChange={handleLanguageChange}
        defaultValue={i18n.language}
      >
        <option value="en">English</option>
        <option value="fr">Français</option>
        <option value="ar">Arabe</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
