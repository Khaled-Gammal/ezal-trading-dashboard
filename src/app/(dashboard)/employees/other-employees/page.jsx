
import EmployeesDataTable from "@/data/employees/other-employees/OtherEmployeesDataTable";
import { GetDataInServerSide } from "@/lib/actions/get-server";


export default async function EmployeesPage() {

  const admins = await GetDataInServerSide(
    '/dashboard/admins/'
  )
  return (
      <div>
       <EmployeesDataTable admins={admins}/>
      </div>
    )
  }
  