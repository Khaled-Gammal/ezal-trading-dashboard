import Image from 'next/image'
import React from 'react'
import logo from "@/assets/images/logo.png";
import VerifyForm from '@/components/forms/verify-form';
import ButtonBack from '@/components/shared/button-back';
export default function VerifyPage() {
  return (
    <div className="flex flex-col justify-center h-screen w-full md:w-[614px] gap-4">
      {/* back page */}
       <ButtonBack path='/forget-password' title='Back to forget password' />
       {/* logo */}
       <div className=" mb-[48px] flex justify-center items-center w-full ">
        <Image src={logo} alt="logo" height={133} width={151} />
        </div>
      <div className="flex flex-col items-end justify-end">
        
        
     
        {/* section  */}
        <div className='flex flex-col w-full md:w-[492px] '>
      
        <div className='flex flex-col gap-4'>
        <h1 className="text-base font-medium text-gray-500 mb-4">Verify code</h1>
        <p className='font-normal text-sm leading-[16.94px]' >An authentication code has been sent to your email.</p>
        </div>
        <VerifyForm /> 
         </div>
    </div>
  </div>
  )
}
