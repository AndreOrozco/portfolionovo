"use client"
import React from 'react';
import { LanguageContext } from './LanguageContext';
import { dictionaryList } from './languages';

export function LanguageProvider({ children } : any) {
  
  let defaultLanguage: any;
    if (typeof window !== 'undefined') {
      defaultLanguage = localStorage.getItem('rcml-lang');
    }
    const [userLanguage, setUserLanguage] = React.useState<string>(defaultLanguage || 'en_us');
    const provider:any = {
      userLanguage,
      dictionary: dictionaryList[userLanguage],
      userLanguageChange: (selected:any) => {
        setUserLanguage(selected);
        if (typeof window !== 'undefined') {
          localStorage.setItem('rcml-lang', selected);
        }
      
      }
    };
    return (
      <LanguageContext.Provider value={provider}>
        {children}
      </LanguageContext.Provider>
    );
  };