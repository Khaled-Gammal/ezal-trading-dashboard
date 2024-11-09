
import SessionsDataTable from "@/data/sessions/SessionsDataTable";
import { PRODUCTION_URL } from "@/lib/utils";

export default async function SessionsPage() {
  const res=await fetch(`http://localhost:3000/api/employees/`)
  const data=res.json()
console.log(data);
  return (
      <div>
       <SessionsDataTable />
      </div>
    )
  }
  