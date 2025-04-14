"use client"
import { createContext } from 'react';
import { languageOptions, dictionaryList } from './languages';
// create the language context with default selected language
export const LanguageContext = createContext<any>({
    userLanguage: 'en',
    dictionary: dictionaryList.en_us
  });