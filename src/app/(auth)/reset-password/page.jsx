import Image from 'next/image'
import React from 'react'
import logo from "@/assets/images/logo.png";
import ResetPasswordForm from '@/components/forms/reset-password-form';
import ButtonBack from '@/components/shared/button-back';

export default function ResetPasswordPage() {
  return (
    <div className="flex flex-col justify-center h-screen w-full md:w-[614px] gap-4">
      {/* back page */}
       <ButtonBack path='/verify-code' title='Back to verify code' />
       {/* logo */}
       <div className=" mb-[48px] flex justify-center items-center w-full ">
        <Image src={logo} alt="logo" height={133} width={151} />
        </div>
      <div className="flex flex-col items-end justify-end">
        
        
     
        {/* section  */}
        <div className='flex flex-col w-full md:w-[492px] '>
      
        <div className='flex flex-col gap-4 '>
        <h1 className="text-base font-medium text-gray-500 mb-4">Set a password?</h1>
        <p className='font-normal text-sm leading-[16.94px]' >Your previous password has been reseted. Please set a new password for your account.</p>
        </div>
        <ResetPasswordForm /> 
         </div>
    </div>
  </div>
  )
}
