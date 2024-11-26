import GroupsDataTable from "@/data/groups/GroupsDataTable";
import { GetDataInServerSide } from "@/lib/actions/get-server";

export default async function GroupsPage() {
  const groups = await GetDataInServerSide(
    '/dashboard/groups/'
 )

  return (
    <div>
      <GroupsDataTable groups={groups} />
    </div>
  )
}
