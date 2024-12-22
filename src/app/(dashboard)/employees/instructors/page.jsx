

import MainSkelton from "@/components/pages/skelton/main-skelton";
import InstructorsDataTable from "@/data/employees/instructors/InstructorsDataTable";
import { GetDataInServerSide } from "@/lib/actions/get-server";
import { Suspense } from "react";



export default async function EmployeesPage({ searchParams }) {
console.log(searchParams);
const page = searchParams.page || 1; 
  

  return (
      <div>
       <Suspense fallback={<MainSkelton />}>
       <IstructorsPage page={page}/>
       </Suspense>
      </div>
    )
  }
  
async function IstructorsPage({page}){
  const instructors = await GetDataInServerSide(
    '/dashboard/instructors/',
    page,
  )

  return <InstructorsDataTable instructors={instructors} />
}