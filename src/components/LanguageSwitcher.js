import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const LanguageSelector = styled.select`
  background: var(--bg-primary);
  border: 2px solid var(--primary-orange);
  color: var(--text-primary);
  padding: 0.5rem 0.8rem;
  border-radius: 8px;
  font-size: 0.9rem;
  cursor: pointer;
  min-width: 120px;
  
  &:focus {
    outline: none;
    border-color: var(--primary-orange);
    box-shadow: 0 0 5px rgba(255, 137, 6, 0.3);
  }
  
  option {
    background: var(--bg-primary);
    color: var(--text-primary);
    padding: 0.5rem;
  }
  
  @media (max-width: 768px) {
    min-width: 100px;
    font-size: 0.8rem;
    padding: 0.4rem 0.6rem;
  }
`;

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ar', name: 'العربية' }
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