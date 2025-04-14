"use client"
import Image from 'next/image'
import React, { useContext } from 'react';
import styles from './LanguageSelector.module.css'
import { LanguageContext } from '../context/language/LanguageContext';
import { languageOptions } from '../context/language/languages';
export default function LanguageSelector() {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);
  const { dictionary } = useContext(LanguageContext);

  // set selected language by calling context method
  const handleLanguageChange = (e:any) => userLanguageChange(e);
  return (


    // <select
    //   // onChange={handleLanguageChange}
    //   value={userLanguage}
    // >
    //   {Object.entries(languageOptions).map(([id, name]) => (
    //     <option key={id} value={id}>{name}</option>
    //   ))}
    // </select>


    <>
    <div className={styles.drop}>
      <Image src={`/flags/${userLanguage}.png`} width="25" height="25" className='m:auto h:20 w:20 r:7' alt={''} />
      <div className='p:10 abs top:50 right:5 hidden '>
        <ul className='bg:white p:20 r:7 shadow:2|2|10|#00000026'>
        {Object.entries(languageOptions).map(([id, name]) => (
       <li key={id} className='flex p:7 bg:#ebeaec:hover r:7' onClick={() => handleLanguageChange(id)}>
        <Image src={`/flags/${id}.png`} width="25" height="25" className='mr:20' alt={name}
/> <span className='block my:auto'>{name}</span>
       </li>))}
 
        
        </ul>
      </div>
    </div>
    </>


  );
};