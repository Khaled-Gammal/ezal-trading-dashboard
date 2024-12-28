import React from 'react'
import InputField from '../shared/input-field'
import { Button } from '../ui/button'
import { Loader2 } from 'lucide-react'

export default function ForgetPasswordForm() {
  return (
    <div className='flex flex-col gap-12 mt-8 items-center'>
        <InputField label="Email Address" type="email" placeholder="Enter your email" className='md:w-[492px] sm:w-[50%]'/>
        <Button
        className="mt-4 md:w-[311px] sm:w-[50%] hover:bg-primary"
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
