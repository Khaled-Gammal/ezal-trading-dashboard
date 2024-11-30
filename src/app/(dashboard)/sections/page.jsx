
import SectionsDataTable from "@/data/sections/SectionsDataTable";
import { GetDataInServerSide } from "@/lib/actions/get-server";

export default async function SectionsPage() {
  const sections = await GetDataInServerSide(
    '/dashboard/sections/'
 )

  return (
      <div>
       <SectionsDataTable sections={sections}/>
      </div>
    )
  }
  