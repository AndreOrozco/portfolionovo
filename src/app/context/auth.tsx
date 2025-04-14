'use client'
import React, { useEffect, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { object, string, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { faUser, faKey, faWarning, faArrowRight, faX } from '@fortawesome/free-solid-svg-icons'
import { useQuery } from 'react-query';
import Image from 'next/image'
import Link from 'next/link';
import { AuthContext } from '@/app/context/authContext';
import { LanguageContext } from './language/LanguageContext';
const loginSchema = object({
    email: string()
      .min(1, 'Email address is required')
      .email('Email Address is invalid'),
    password: string()
      .min(1, 'Password is required')
      .min(3, 'Password must be more than 8 characters')
      .max(32, 'Password must be less than 32 characters'),
  });
  export type LoginInput = TypeOf<typeof loginSchema>;

export default function AuthBox() {

  const { dictionary } = React.useContext(LanguageContext);

    const [authView, SetAuthView] = useState<boolean>(false);
    const methods = useForm<LoginInput>({
        resolver: zodResolver(loginSchema),
      });
    
      const { isOpen, toggle } = React.useContext(AuthContext);
      console.log(isOpen)
      const {
        reset,
        register,
        handleSubmit,
        formState: { isSubmitSuccessful },
      } = methods;
      const onSubmitHandler: SubmitHandler<LoginInput> = (values) => {
        console.log(values)
      };
return<>
{isOpen ? <>
<div className='fixed top:0 z:999  flex right:0 left:0 top:0 bottom:0 '>
<form className='rel w:380@desktop w:100%@mobile h:100%@mobile h:auto@desktop bg:#141838 r:25@desktop  p:25@desktop p:50@mobile m:auto shadow:0|10|30|#31326c'  onSubmit={handleSubmit(onSubmitHandler)}          >
<a onClick={() => toggle(false)} className='w:15 h:15 p:10 abs top:10 right:10 bg:#181c3d fg:#efe7ff z:999 r:50 text:center shadow:inset|0|1|5|1|#AF6CAA b:1|solid|#efe7ff15'  >
                                    <FontAwesomeIcon icon={faX} className=' h:15' />
                </a>
      <div className=' flex pt:30 pb:60'>
      <Image src="/logodark.svg" width={180} height={40} className='m:auto' alt='Logo takel.' />
      </div>
   
      <div className='bg:#ece5f9 r:7 p:20 mb:15'>
        <h2 className='fg:#564280  font:17 mb:5 font:medium'  >{dictionary.authbox.loginin} </h2>
        <p className='font:13 fg:#564280'>
        {dictionary.authbox.logininsub}</p>
      </div>
      <div className='flex flex:column '>
        <label className='fg:#efe7ff mb:15'>{dictionary.authbox.email}</label>
        <div className=' r:7  b:1|solid|#9985C3  flex' >
          <FontAwesomeIcon icon={faUser} className='fg:#efe7ff p:1 my:auto m:20|10|10|20  ' />
          <input
            className='font:16 p:15 bg:transparent fg:#efe7ff outline:none w:100% b:0|solid|transparent r:7'
            type="text"
            placeholder=""
            {...register("email")}
          />
        </div>

      </div>

      <div className='flex flex:column mt:15'>
        <label className='fg:#efe7ff mb:15'>{dictionary.authbox.password}</label>
        <div className=' r:7  b:1|solid|#9985C3  flex' >
          <FontAwesomeIcon icon={faKey} className='fg:#efe7ff p:1 my:auto m:20|10|10|20  ' />

          <input 
            className='font:16 p:15 bg:transparent fg:#efe7ff outline:none w:100% b:0|solid|transparent r:7'
            type="password"
            placeholder=""
            {...register("password")}

          />
        </div>
      </div>
      <button type='submit' className='bg:linear-gradient(90deg,#AF6CAA,#282E68)  w:100% font:16 fg:#ffffff b:0|solid|transparent p:14|20 r:10 mt:20'>
        <FontAwesomeIcon icon={faArrowRight} className='fg:#ffffff p:1 my:auto mr:20  ' />
        <span>{dictionary.authbox.submit}</span>
      </button>
      <div className='p:25|0|0  '>
            <Link className='p:15|0 m:10|0|0 fg:#fff fg:#c3a6fc:hover' href={''}> {dictionary.authbox.lost} </Link>
            <p className='fg:#efe7ff p:5|0 m:10|0'>{dictionary.authbox.access} <Link href={''} className='fg:#fff fg:#c3a6fc:hover'>Click here</Link></p>
          </div>
    </form>

    </div>
    <div className='w:100% fixed h:100vh top:0 right:0 bg:#00000066 z:800 bd:blur(1rem)'  >
            </div>
</>
: <></>
}
</>

}