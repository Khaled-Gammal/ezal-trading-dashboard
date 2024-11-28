'use client';
import { DataTableDemo } from "@/components/shared/table-data";
import { useAddDialog } from "@/hooks/custom-dialog";
import { useEditDialog } from "@/hooks/custom-edit-dialog";
import { useConfirmMessage } from "@/hooks/delete-dialog";
import { handleDeleteRow } from "@/lib/actions/delete-server";
import { editGroupFields, addGroupFields ,viewGroupFields} from "./constant-data";
import { compareData } from "@/lib/utils";
import { handleUpdateInServer } from "@/lib/actions/patch-server";
import { toast } from "sonner";
import { useViewDialog } from "@/hooks/custom-view-dialog";

export default function GroupsDataTable({groups}) {
// columns for the table
  const columns = [
    {
        id: "select",
        header: "",
        className: "text-center",
        accessorKey: "select",

    },
    {
      id: "id",
      header: "Group ID",
      accessorKey: "id",
      className: "text-left",
    },
    {
      id: "name",
      header: "Group Name",
      accessorKey: "name",
    },
    {
      id: "instructor",
      header: "Assigned Instructor",
      accessorKey: "instructor",
    },
    {
      id: "number_students",
      header: "No.of Student",
      accessorKey: "number_students",
    },
    {
      id: "department",
      header: "Department Name ",
      accessorKey: "department",
      
    },
    {
      id: "actions",
      header: "Actions",
      accessorKey: "actions",
      className: "text-center",
    },
  ];

  // data for the table
  const Groups=groups?.results.map((group) => {
    return {
      id: group.group_id,
      name: group.name,
      instructor: group.instructor.full_name,
      number_students: group.total_students,
      department: group.department.department_name,
    };
  }
  );
 
  // edit group dialog
  const [handleEditGroup, editGroupConfirmDialog] = useEditDialog({
    onConfirm: (state) => handleEdit(state),
    title: "Edit Group",
    fields: editGroupFields,
  });

  // add group dialog
  const [handleAddGroup, addGroupConfirmDialog] = useAddDialog({
    onConfirm: (id) => console.log("Add",id),
    title: "Add a New Group",
    fields: addGroupFields,
  });

  const [handleViewGroup, viewGroupConfirmDialog] = useViewDialog({
    // onConfirm: (state) => handleEditCurrentStudent(state),
    title: "Group's Details",
    fields: viewGroupFields,
  });

  // delete group dialog
  const [handleDelete, deleteComponentConfirmDialog] = useConfirmMessage({
    onConfirm: (row) => handleDeleteRow("/dashboard/groups/",row?.id,"/groups"),
    text: "Do you sure you wanna to delete this group ? ",
    title: "Delete Group",
  });
  const handleEdit = (state) => {
    try {
      Groups.forEach(async (row) => {
        if (row.id === state.id) {
          const changes = compareData(row, state);
          if (Object.keys(changes).length > 0) {
            console.log("changes=>", changes);
            // Call the API to update the student
            const formData=changes
            const response = await handleUpdateInServer(
              `/dashboard/groups/${row?.id}/`,
              "PATCH",
              formData,
              true,
              "object",
              "/employees/other-employees"
            );
            if (response.success) {
            toast.success(response.success);
            }else {
              toast.error(response.error);
            }
          }
        }
      });
    } catch (error) {
      console.error("Error updating instructor:", error);
    }
  }
 
  return (
    <div>
      <DataTableDemo data={Groups} columns={columns} isPending={false} 
      onDelete={handleDelete}
      onEdit={handleEditGroup}
      onView={handleViewGroup}
      />
     {deleteComponentConfirmDialog}
     {editGroupConfirmDialog}
     {addGroupConfirmDialog}
      {viewGroupConfirmDialog}
    </div>
  );
}
