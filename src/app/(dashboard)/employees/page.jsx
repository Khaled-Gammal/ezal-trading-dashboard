
import EmployeesDataTable from "@/data/employees/EployeesDataTable";
import { PRODUCTION_URL } from "@/lib/utils";
import { toast } from "sonner";

export default async function EmployeesPage() {
  const res=await fetch(`${PRODUCTION_URL}/api/employees/`)
  const data=await res.json()

  return (
      <div>
       <EmployeesDataTable employees={data}/>
      </div>
    )
  }
  