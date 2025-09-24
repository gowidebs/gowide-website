import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const LanguageSelector = styled.select`
  background: transparent;
  border: 1px solid rgba(255, 137, 6, 0.3);
  color: var(--text-primary);
  padding: 0.5rem;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: var(--primary-orange);
  }
  
  option {
    background: var(--bg-primary);
    color: var(--text-primary);
  }
`;

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ar', name: 'العربية' },
    { code: 'ml', name: 'മലയാളം' },
    { code: 'fr', name: 'Français' },
    { code: 'es', name: 'Español' },
    { code: 'hi', name: 'हिन्दी' },
    { code: 'ta', name: 'தமிழ்' }
  ];

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <LanguageSelector value={i18n.language} onChange={handleLanguageChange}>
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.name}
        </option>
      ))}
    </LanguageSelector>
  );
};

export default LanguageSwitcher;