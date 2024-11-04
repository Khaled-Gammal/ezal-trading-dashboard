import { Label } from '@radix-ui/react-dropdown-menu'
import React from 'react'
import { Input } from '../ui/input'

function PasswordField({ label, placeholder, value, onChange, className,name }) {
  return (
    <div className={className}>
      <Label className="text-base font-normal text-primary">
        {label}
      </Label>
      <Input
        name={name}
        placeholder={placeholder}
        type='password'
        value={value}
        onChange={onChange}
        className={`border border-primary rounded-[6px] w-full p-2 ${className}`}
      />
    </div>
  )
}

export default PasswordField