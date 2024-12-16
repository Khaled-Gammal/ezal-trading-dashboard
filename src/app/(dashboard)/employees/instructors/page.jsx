

import InstructorsDataTable from "@/data/employees/instructors/InstructorsDataTable";
import { GetDataInServerSide } from "@/lib/actions/get-server";



export default async function EmployeesPage() {

  const instructors = await GetDataInServerSide(
    '/dashboard/instructors/'
  )
  console.log(instructors);
  return (
      <div>
       <InstructorsDataTable instructors={instructors}/>
      </div>
    )
  }
  