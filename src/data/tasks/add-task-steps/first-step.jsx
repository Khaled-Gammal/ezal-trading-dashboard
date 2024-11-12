'use client'
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
            <Card>
                <CardHeader>
                    <CardTitle>Step 1</CardTitle>
                    <CardDescription>Fill out the information below.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="space-y-1">
                        <Label htmlFor="name1">Name</Label>
                        <Input id="name1" />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="email1">Email</Label>
                        <Input id="email1" />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button onClick={handleNextClick}>Next</Button>
                </CardFooter>
            </Card>
        </div>
    )
}