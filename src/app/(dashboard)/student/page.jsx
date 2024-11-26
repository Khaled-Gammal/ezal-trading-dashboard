import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import CurrentDataTable from '@/data/student/current-students/CurrentDataTable'
import PendingDataTable from '@/data/student/pending-students/PendingDataTable'
import WaitingInterviewsDataTable from '@/data/student/waiting-interview/WaitingInterviewsDataTable'
import { GetDataInServerSide } from '@/lib/actions/get-server'


export default async function StudentPage() {
  const currentStudent = await GetDataInServerSide(
     '/dashboard/current-students/'
  )
 const pendingStudent = await GetDataInServerSide(
      '/dashboard/pending-students/'
    )
    const waitingInterviews = await GetDataInServerSide(
      '/dashboard/contacted-students/'
    )
   
  return (
    <Tabs defaultValue="currentstudents" className="w-full bg-inherit" >
      <TabsList className=" w-[40%] text-primary font-medium text-[15px] bg-inherit">
        <TabsTrigger value="currentstudents" className='bg-inherit data-[state=active]:text-gold data-[state=active]:border-b-2 data-[state=active]:border-gold rounded-none'>Current Students</TabsTrigger>
        <TabsTrigger value="pendingstudents" className='bg-inherit data-[state=active]:text-gold data-[state=active]:border-b-2 data-[state=active]:border-gold rounded-none'>Requested Students</TabsTrigger>
        <TabsTrigger value="waitinginterviews" className='bg-inherit data-[state=active]:text-gold data-[state=active]:border-b-2 data-[state=active]:border-gold rounded-none'>Waiting Interviews Students</TabsTrigger>
      </TabsList>
      <TabsContent value="currentstudents">
        <CurrentDataTable currentStudent={currentStudent}/>
      </TabsContent>
      <TabsContent value="pendingstudents">
       <PendingDataTable pendingStudent={pendingStudent}/>
      </TabsContent>
      <TabsContent value="waitinginterviews">
        <WaitingInterviewsDataTable waitingInterviews={waitingInterviews}/>
      </TabsContent>
    </Tabs>
  )
}
