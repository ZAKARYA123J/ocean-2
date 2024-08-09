import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300" onClick={() => i18n.changeLanguage('en')}>English</button>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300" onClick={() => i18n.changeLanguage('fr')}>Français</button>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300" onClick={() => i18n.changeLanguage('ar')}>Arabe</button>
    </div>
  );
};

export default LanguageSwitcher;
