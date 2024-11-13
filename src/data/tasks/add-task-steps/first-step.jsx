'use client'
import { DatePickerDemo } from '@/components/shared/date-picker'
import InputField from '@/components/shared/input-field'
import SelectField from '@/components/shared/select-field'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useSearchParams, useRouter } from 'next/navigation'
import React from 'react'

export default function FirstStep() {
    const [searchParams] = useSearchParams()
    const router = useRouter()

    const handleNextClick = () => {
        const newParams = new URLSearchParams(searchParams?.toString())
        newParams.delete('step')
        newParams.set('step', '2')
        router.push(`?${newParams.toString()}`)
    }

    return (
        <div>
           <div className="mt-4 flex flex-col gap-[14px]">
            <InputField
            name={'title'}
            label={'Title'}
            placeholder={'Enter the title of the task'}
            value={'title'}
            />
            <SelectField
            name={'Assigned To'}
            label={'Assigned To'}
            placeholder={'Select the person'}
            value={'assignedTo'}
            />
            <SelectField
            name={'Status'}
            label={'Status'}
            placeholder={'Select the status'}
            value={'status'}
            options={['Started','Not Started','Completed']}
            />
            <DatePickerDemo
            id={'creationDate'}
            label={'Creation Date'}
            placeholder={'Select the date'}
            value={'1/1/1990'}
            />
            <InputField
            name="Due Date"
            label="Due Date"
            placeholder="Select the date"
            value="2 days"
            />
            </div>
            <div className="mt-8 flex justify-around gap-20">
            <Button className='cancel-button w-full'>Cancel</Button>
            <Button className='confirm-button w-full' onClick={handleNextClick}>Next</Button>
           
            </div>
        </div>
    )
}