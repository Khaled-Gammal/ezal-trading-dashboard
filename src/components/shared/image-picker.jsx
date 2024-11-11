'use client'

import { Camera } from "lucide-react"
import Image from "next/image"
import { useRef } from "react"

export default function ImagePicker({ value, onChange, error }) {
    const inputRef = useRef() 

    const handleClick = () => {
        inputRef.current.click()
    }  

    const handleChange = (e) => {
        const image = e.target.files[0]
        onChange(image)
    }

    console.log(error);

    return (
        <div 
            className={`h-[70px] w-[70px] rounded-full bg-gray-300 flex justify-center items-center ${error ? 'border-2 border-red-800' : ''}`} 
            onClick={handleClick}
        >
            <input 
                type='file'
                ref={inputRef}
                style={{ display: 'none' }}
                onChange={handleChange}
            />
            {
                value ?
                <Image src={URL.createObjectURL(value)} alt='image' height={70} width={70} className='h-[70px] w-[70px] rounded-full object-cover' />
                :
                <Camera size={32} color="#606060" strokeWidth={0.75}  />
            }
        </div>
    )
}
