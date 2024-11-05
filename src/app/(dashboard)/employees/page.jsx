
import EmployeesDataTable from "@/data/employees/EployeesDataTable";
import { PRODUCTION_URL } from "@/lib/utils";

export default async function EmployeesPage() {
  const res=await fetch(`http://localhost:3000/api/employees/`)
  const data=res.json()
console.log(data);
  return (
      <div>
       <EmployeesDataTable />
      </div>
    )
  }
  