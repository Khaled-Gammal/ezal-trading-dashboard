"use client";

import { DataTableDemo } from "@/components/shared/table-data";
import { useAddDialog } from "@/hooks/custom-dialog";
import { useEditDialog } from "@/hooks/custom-edit-dialog";
import { useConfirmMessage } from "@/hooks/delete-dialog";

export default function ArticlesDataTable() {
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
  const addArticleFields = [
    {
      type: "text",
      name: "title",
      id: "title",
      label: "Session Title",
      placeholder: "Enter Session Title",
    },
    {
      type: "selected",
      name: "author",
      id: "author",
      label: "Author Name",
      placeholder: "Select Author",
      options: ["Ali", "Ahmed", "Mohamed", "Omar"],
    },
    {
      type: "description",
      name: "content",
      id: "content",
      label: "Content Article",
      placeholder: "Enter Content Article",
    },
    
    {
      type: "date",
      name: "date",
      id: "date",
      label: "Date",
      placeholder: "Select Date",
    },
    {
      type: "time",
      name: "time",
      id: "time",
      label: "Time",
      placeholder: "Select Time",
    }
  ];
  const editArticleFields = [
    {
      type: "text",
      name: "title",
      id: "title",
      label: "Session Title",
      placeholder: "Enter Session Title",
    },
    {
      type: "selected",
      name: "author",
      id: "author",
      label: "Author Name",
      placeholder: "Select Author",
      options: ["Ali", "Ahmed", "Mohamed", "Omar"],
    },
    {
      type: "description",
      name: "content",
      id: "content",
      label: "Content Article",
      placeholder: "Enter Content Article",
    },
    
    {
      type: "date",
      name: "date",
      id: "date",
      label: "Date",
      placeholder: "Select Date",
    },
    {
      type: "time",
      name: "time",
      id: "time",
      label: "Time",
      placeholder: "Select Time",
    }
  ];
  const [handleEditArtile, editArticleConfirmDialog] = useEditDialog({
    onConfirm: (state) => handleEdit,
    title: "Edit Article",
    fields: editArticleFields,
  });
  
  const [handleAddArticle, addArticleConfirmDialog] = useAddDialog({
    onConfirm: (state) => console.log("Add", state),
    title: "Add a New Article",
    fields: addArticleFields,
  });
  const [handleDelete, deleteComponentConfirmDialog] = useConfirmMessage({
    onConfirm: (id) => console.log("Delete", id),
    text: "Do you sure you wanna to delete this group ? ",
    title: "Delete Group",
  });
  const handleEdit = (state) => {
    console.log("Edit", state);
  }
  return (
    <div>
      <DataTableDemo
        data={data}
        columns={columns}
        isPending={false}
        onDelete={handleDelete}
        onEdit={handleEditArtile}
      />
      {deleteComponentConfirmDialog}
      {editArticleConfirmDialog}
      {addArticleConfirmDialog}
    </div>
  );
}
