
import TasksDataTable from "@/data/tasks/TasksDataTable";
import { PRODUCTION_URL } from "@/lib/utils";

export default async function TasksPage() {
  const res=await fetch(`http://localhost:3000/api/employees/`)
  const data=res.json()
console.log(data);
  return (
      <div>
       <TasksDataTable />
      </div>
    )
  }
  