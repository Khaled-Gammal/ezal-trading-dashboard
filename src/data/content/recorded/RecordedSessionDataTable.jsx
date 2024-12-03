
'use client';
import { DataTableDemo } from "@/components/shared/table-data";
import ViewCard from "@/components/shared/view-card";
import { useAddDialog } from "@/hooks/custom-dialog";
import { useEditDialog } from "@/hooks/custom-edit-dialog";
import { useConfirmMessage } from "@/hooks/delete-dialog";
import { addRecordedFields, editRecordedFields } from "./constant-data";

export default function RecordedSessionDataTable() {
  const columns = [
    {
      id: "select",
      header: "",
      className: "text-center",
      accessorKey: "select",
    },
    {
      id: "id",
      header: "ID",
      accessorKey: "id",
      className: "text-left",
    },
    {
      id: "amount",
      header: "Amount",
      accessorKey: "amount",
    },
    {
      id: "status",
      header: "Status",
      accessorKey: "status",
    },
    {
      id: "email",
      header: "Email",
      accessorKey: "email",
    },
    {
      id: "actions",
      header: "Actions",
      accessorKey: "actions",
      className: "text-center",
    },
  ];
  const data = [
    {
      id: "m5gr84i9",
      amount: 316,
      status: "success",
      email: "louda@mail.com",
    },
    {
      id: "3u1reuv4",
      amount: 242,
      status: "success",
      email: "louda@mail.com",
    },
    {
      id: "derv1ws0",
      amount: 837,
      status: "processing",
      email: "louda@mail.com",
    },
    {
      id: "derv1ws",
      amount: 837,
      status: "processing",
      email: "louda@mail.com",
    },
    {
      id: "dervws0",
      amount: 837,
      status: "processing",
      email: "louda@mail.com",
    },
    {
      id: "dev1ws0",
      amount: 837,
      status: "processing",
      email: "louda@mail.com",
    },
    {
      id: "derv1ws0",
      amount: 837,
      status: "processing",
      email: "louda@mail.com",
    },
    {
      id: "derv1ws0",
      amount: 837,
      status: "processing",
      email: "louda@mail.com",
    },
    {
      id: "derv1ws0",
      amount: 837,
      status: "processing",
      email: "louda@mail.com",
    },
    {
      id: "derv1ws0",
      amount: 837,
      status: "processing",
      email: "louda@mail.com",
    },
  ];

  
  // handle edit function
  const [handleEditRecorded, editRecordedConfirmDialog] = useEditDialog({
    onConfirm: (state) => handleEdit(state),
    title: "Edit Recorded Session",
    fields: editRecordedFields,
  });

  // handle add function
  const [handleAddRecorded, addRecordedConfirmDialog] = useAddDialog({
    onConfirm: (state) => console.log("Add", state),
    title: "Add a Recorded Session",
    fields: addRecordedFields,
  });

  // handle delete function
  const [handleDelete, deleteComponentConfirmDialog] = useConfirmMessage({
    onConfirm: (id) => console.log("Delete", id),
    text: "Do you sure you wanna to delete this group ? ",
    title: "Delete Group",
  });


 // Handle the edit recorded request
 const handleEdit = (state) => {
  try {
    adminsData.forEach(async (row) => {
      if (row.id === state.id) {
        const changes = compareData(row, state);
        if (Object.keys(changes).length > 0) {
          console.log("changes=>", changes);
          // Call the API to update the student
          const formData=changes
          const response = await handleUpdateInServer(
            `/dashboard/admins/${row?.id}/`,
            "PATCH",
            formData,
            true,
            "object",
            "/employees/other-employees"
          );
          if (response.success) {
          toast.success(response.success);
          console.log("Update response=>", response);
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
      <DataTableDemo
        data={data}
        columns={columns}
        isPending={false}
        onDelete={handleDelete}
        onEdit={handleEditRecorded}
      />
      {deleteComponentConfirmDialog}
      {addRecordedConfirmDialog}
      {editRecordedConfirmDialog}
    </div>
  );
}
