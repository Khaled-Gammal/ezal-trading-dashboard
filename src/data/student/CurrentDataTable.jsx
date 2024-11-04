
'use client';

import { DataTableDemo } from "@/components/shared/table-data";
import { useConfirmMessage } from "@/hooks/delete-dialog";



export default function CurrentDataTable() {
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
  const [handleDelete, deleteComponentConfirmDialog] = useConfirmMessage({
    onConfirm: (id) => console.log("Delete",id),
    text: "Do you sure you wanna to delete this group ? ",
    title: "Delete Group",
  });
  return (
    <div>
      <DataTableDemo data={data} columns={columns} isPending={false} 
      onDelete={handleDelete}
      
      />
     {deleteComponentConfirmDialog}
    </div>
  );
}
