'use client';
import { DataTableDemo } from "@/components/shared/table-data";
import { useAddDialog } from "@/hooks/custom-dialog";
import { useConfirmMessage } from "@/hooks/delete-dialog";


export default function GroupsDataTable({groups}) {
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
  const addEmployFields = [
    {
      id: "name",
      label: "Employee Name",
      placeholder: "Enter your name",
      type: "text",
    },
    {
      id: "phone",
      label: " Phone Number",
      placeholder: "Enter your phone number",
      type: "tel",
    },
    {
      id: "email",
      label: "Email",
      placeholder: "Enter your email",
      type: "email",
    },
    
  ];
  const [handleAddEmployee, addEmployeeConfirmDialog] = useAddDialog({
    onConfirm: (id) => console.log("Add",id),
    title: "Add a New Employee",
    fields: addEmployFields,
  });
  const [handleDelete, deleteComponentConfirmDialog] = useConfirmMessage({
    onConfirm:  async (id) => console.log("Delete",id),
    text: "Do you sure you wanna to delete this group ? ",
    title: "Delete Group",
  });
  const handleEdit = (id) => {
    console.log("Edit",id);
  }
 
  return (
    <div>
      <DataTableDemo data={data} columns={columns} isPending={false} 
      onDelete={handleDelete}
      onEdit={handleEdit}
      />
     {deleteComponentConfirmDialog}
     {addEmployeeConfirmDialog}
    </div>
  );
}
