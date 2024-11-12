'use client'
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter, useSearchParams } from "next/navigation";


export default function SecondStep() {
    const [searchParams] = useSearchParams()
    const router = useRouter()
  const handleNextClick = () => {
    const newParams = new URLSearchParams(searchParams?.toString())
        newParams.delete('step')
        newParams.set('step', '3')
        router.push(`?${newParams.toString()}`)
  };
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Step 2</CardTitle>
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
        <CardFooter>
          <Button onClick={handleNextClick}>Next</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
