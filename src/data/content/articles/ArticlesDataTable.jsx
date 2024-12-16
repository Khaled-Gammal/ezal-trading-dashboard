"use client";

import { DataTableDemo } from "@/components/shared/table-data";
import { useAddDialog } from "@/hooks/custom-dialog";
import { useEditDialog } from "@/hooks/custom-edit-dialog";
import { useConfirmMessage } from "@/hooks/delete-dialog";
import { addArticleFields, editArticleFields } from "./constant-dat";
import { handlePostInServer } from "@/lib/actions/post-server";
import { toast } from "sonner";
import { handleDeleteRow } from "@/lib/actions/delete-server";

export default function ArticlesDataTable({ articles }) {
//  columns for the table
  const columns = [
    {
      id: "select",
      header: "",
      className: "text-center",
      accessorKey: "select",
    },
    {
      id: "title",
      header: "Title",
      accessorKey: "title",
    },
    {
      id: "publisher_name",
      header: "Publisher",
      accessorKey: "publisher_name",
      className: "text-center",
    },
    {
      id: "image",
      header: "Image",
      accessorKey: "image",
      // className: "text-center",
    },
    {
      id: "actions",
      header: "Actions",
      accessorKey: "actions",
      className: "text-center",
    },
  ];

  // data for the table
  const articlesData = articles?.results.map((article) => {
    return {
      id: article.id,
      title: article.title,
      publisher_name: article.publisher_name,
      image: article.image,
    };
  });

  // edit Article dialog

  const [handleEditArtile, editArticleConfirmDialog] = useEditDialog({
    onConfirm: (state) => handleEdit,
    title: "Edit Article",
    fields: editArticleFields,
  });

  // add Article dialog
  const [handleAddArticle, addArticleConfirmDialog] = useAddDialog({
    onConfirm: (state) => handleAddNewArticle(state),
    title: "Add a New Article",
    fields: addArticleFields,
  });

  // delete Article dialog
  const [handleDelete, deleteComponentConfirmDialog] = useConfirmMessage({
    onConfirm: (row) => handleDeleteRow("/dashboard/articles/",row?.id,"/content"),
    text: "Do you sure you wanna to delete this Article ? ",
    title: "Delete Article",
  });
  const handleEdit = (state) => {
    console.log("Edit", state);
  };
  const handleAddNewArticle = async (state) => {
    console.log("Add", state);
    try {
      const data = new FormData();
      for (let key in state) {
        data.append(key, state[key]);
      }
      const response = await handlePostInServer(
        "/dashboard/articles/create/",
        data,
        "/content",
        false,
        "formData"
      );

      if (response.success) {
        toast.success(response.success);
      } else {
        toast.error(response.error);
      }
    } catch (error) {
      console.error("Error adding section:", error);
      toast.error("Error adding section");
    }
  };
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
