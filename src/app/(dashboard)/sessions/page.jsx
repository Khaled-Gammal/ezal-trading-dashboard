
import SessionsDataTable from "@/data/sessions/SessionsDataTable";
import { GetDataInServerSide } from "@/lib/actions/get-server";
import { PRODUCTION_URL } from "@/lib/utils";

export default async function SessionsPage() {
  const sessions = await GetDataInServerSide(
    '/dashboard/live-sessions/'
 )

  return (
      <div>
       <SessionsDataTable sessions={sessions}/>
      </div>
    )
  }
  