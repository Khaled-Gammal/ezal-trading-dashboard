import React from 'react'
import { Button } from '../ui/button'
import PasswordField from '../shared/password-field'


export default function ResetPasswordForm() {
  return (
    <div className='flex flex-col gap-12 mt-8 items-center'>
        <PasswordField label="Password" placeholder="Enter your password" className='md:w-[492px] sm:w-[50%]'/>
        <PasswordField label="Confirm Password" placeholder="Enter your confirm password" className='md:w-[492px] sm:w-[50%]'/>

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
          Done
        {/* )} */}
      </Button>
    </div>
  )
}
