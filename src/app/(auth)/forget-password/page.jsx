import Image from 'next/image'
import React from 'react'
import logo from "@/assets/images/logo.png";
import ForgetPasswordForm from '@/components/forms/forget-password-form';
import ButtonBack from '@/components/shared/button-back';
export default function ForgetPasswordPage() {
  return (
     <div className="flex flex-col justify-center h-screen w-full md:w-[614px] gap-4">
      {/* back page */}
       <ButtonBack path='/login' title='Back to login' />
       {/* logo */}
       <div className=" mb-[48px] flex justify-center items-center w-full ">
        <Image src={logo} alt="logo" height={133} width={151} />
        </div>
      <div className="flex flex-col items-end justify-end">
        
        
     
        {/* section  */}
        <div className='flex flex-col  md:w-[492px] w-full'>
      
        <div className='flex flex-col gap-4 '>
        <h1 className="text-base font-medium text-gray-500 mb-4">Forget Password</h1>
        <p className='font-normal text-sm leading-[16.94px]' >Don’t worry, happens to all of us. Enter your email below to recover your password</p>
        </div>
        <ForgetPasswordForm /> 
         </div>
    </div>
  </div>
  )
}
