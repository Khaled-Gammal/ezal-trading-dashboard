'use client';
import React from 'react'
import { Button } from '../ui/button'
import OtpInput from '../shared/otp-input'

export default function VerifyForm() {
  return (
<div className='flex flex-col gap-12 mt-8 items-center'>
       <OtpInput />
        <Button
        className="mt-4 w-[311px] border border-primary h-11 hover:bg-primary"
        type="submit"
        // disabled={state?.loading}
      >
        {/* {state?.loading ? (
          <>
            <Loader2 className="animate-spin" />
            Please wait...
          </>
        ) : ( */}
          Submit
        {/* )} */}
      </Button>
    </div>
  )
}
