import React from 'react';
import { useTranslation } from 'react-i18next';
import saudi from './flags/saudi.png'
import french from './flags/fr.jpeg'
import english from './flags/eng.png'
const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div>
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
