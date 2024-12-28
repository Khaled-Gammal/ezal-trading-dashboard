import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function ButtonBack({path,title}) {
  return (
    <Link href={path}
    className='flex items-center gap-1'
    >
    <ChevronLeft color="#76757B" />
    <p className='text-gray-500 font-medium text-sm leading-4'>{title}</p>
    </Link>
  )
}
