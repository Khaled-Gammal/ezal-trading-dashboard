"use client"

import { useState } from "react"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp"


export default function OtpInput() {
  const [value, setValue] = useState("")

  return (
    <div className="space-y-2">
      <InputOTP
        maxLength={6}
        value={value}
        onChange={(value) => setValue(value)}
        className="gap-2 flex justify-center"
      >
        <InputOTPGroup className="gap-4 flex justify-center">
          <InputOTPSlot index={0} className='h-[59px] w-[59px] rounded-[10px]'/>
          <InputOTPSlot index={1} className='h-[59px] w-[59px] rounded-[10px]' />
          <InputOTPSlot index={2} className='h-[59px] w-[59px] rounded-[10px]'/>
          <InputOTPSlot index={3} className='h-[59px] w-[59px] rounded-[10px]'/>
          <InputOTPSlot index={4} className='h-[59px] w-[59px] rounded-[10px]'/>
          <InputOTPSlot index={5} className='h-[59px] w-[59px] rounded-[10px]'/>
        </InputOTPGroup>
      </InputOTP>
      <div className="text-center text-sm">
        {value === "" ? (
          <>Enter your one-time password.</>
        ) : (
          <>You entered: {value}</>
        )}
      </div>
    </div>
  )
}
