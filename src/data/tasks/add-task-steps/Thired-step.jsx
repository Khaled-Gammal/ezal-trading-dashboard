'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useRouter, useSearchParams } from 'next/navigation'

export default function ThiredStep() {
    
    const router = useRouter()

    const handleConfirm = () => {
      router.push(window.location.pathname)
    }

  return (
    <div>
        <Card>
            <CardHeader>
                <CardTitle>Step 3</CardTitle>
                <CardDescription>Fill out the information below.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <div className="space-y-1">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" />
                </div>
                <div className="space-y-1">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" />
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button onClick={handleConfirm}>Confirm</Button>
            </CardFooter>
        </Card>
    </div>
  )
}
