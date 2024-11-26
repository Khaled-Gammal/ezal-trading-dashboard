

import InstructorsDataTable from "@/data/employees/instructors/InstructorsDataTable";
import { GetDataInServerSide } from "@/lib/actions/get-server";


export default async function InstructorsPage() {

  const instructors = await GetDataInServerSide(
    '/dashboard/instructors/'
  )
  return (
      <div>
       <InstructorsDataTable instructors={instructors}/>
      </div>
    )
  }
  