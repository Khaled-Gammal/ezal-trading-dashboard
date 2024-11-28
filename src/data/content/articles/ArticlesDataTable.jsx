"use client";

import { DataTableDemo } from "@/components/shared/table-data";
import { useAddDialog } from "@/hooks/custom-dialog";
import { useEditDialog } from "@/hooks/custom-edit-dialog";
import { useConfirmMessage } from "@/hooks/delete-dialog";
import { addArticleFields, editArticleFields } from "./constant-dat";

export default function ArticlesDataTable({articles}) {

  console.log(articles);
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
  const articlesData = articles?.results.map((article) => {
    return {
      id: article.id,
    }
  });

  

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
        data={articlesData}
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
