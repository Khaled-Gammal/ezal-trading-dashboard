'use client';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import CurrentDataTable from "./CurrentDataTable";
import PendingDataTable from "./PendingDataTable";

export default function StudentsPanel() {
  return (
    <Tabs defaultValue="currentstudents" className="w-full bg-inherit" >
      <TabsList className=" w-[25%] text-primary font-medium text-[15px] bg-inherit">
        <TabsTrigger value="currentstudents" className='bg-inherit data-[state=active]:text-gold data-[state=active]:border-b-2 data-[state=active]:border-gold rounded-none'>Current Students</TabsTrigger>
        <TabsTrigger value="pendingstudents" className='bg-inherit data-[state=active]:text-gold data-[state=active]:border-b-2 data-[state=active]:border-gold rounded-none'>Pending Students</TabsTrigger>
      </TabsList>
      <TabsContent value="currentstudents">
        <CurrentDataTable/>
      </TabsContent>
      <TabsContent value="pendingstudents">
       <PendingDataTable/>
      </TabsContent>
    </Tabs>
  )
}
