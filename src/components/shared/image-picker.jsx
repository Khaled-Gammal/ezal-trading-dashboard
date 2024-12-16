'use client'

import { Camera } from "lucide-react"
import Image from "next/image"
import { useRef } from "react"

export default function ImagePicker({ value, onChange, error , disabled=false }) {
    const inputRef = useRef() 

    const handleClick = () => {
        inputRef.current.click()
    }  

    const handleChange = (e) => {
        const image = e.target.files[0]
        onChange(image)
    }

    const isValidFile = value instanceof Blob || value instanceof File;
console.log(value);
    return (
        <div 
            className={`h-[70px] w-[70px] rounded-full bg-gray-300 flex justify-center items-center ${error ? 'border-2 border-red-800' : ''}`} 
            onClick={handleClick}
        >
            <input 
                disabled={disabled}
                type='file'
                ref={inputRef}
                style={{ display: 'none' }}
                onChange={handleChange}
            />
            {
                isValidFile ?
                <Image src={URL?.createObjectURL(value)||value} alt='image' height={70} width={70} className='h-[70px] w-[70px] rounded-full object-cover' />
                :
                <Camera size={32} color="#606060" strokeWidth={0.75}  />
            }
        </div>
    )
}
