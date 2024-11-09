
import ContentPanel from "@/data/content/StudentPanel";
import { PRODUCTION_URL } from "@/lib/utils";

export default async function ContentPage() {
  const res=await fetch(`http://localhost:3000/api/employees/`)
  const data=res.json()
console.log(data);
  return (
      <div>
       <ContentPanel />
      </div>
    )
  }
  