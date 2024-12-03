"use client";

import { DataTableDemo } from "@/components/shared/table-data";
import { useAddDialog } from "@/hooks/custom-dialog";
import { useEditDialog } from "@/hooks/custom-edit-dialog";
import { useConfirmMessage } from "@/hooks/delete-dialog";
import { handleDeleteRow } from "@/lib/actions/delete-server";
import { addQuranicLessonFields, editQuranicLessonFields } from "./constant-data";
import { toast } from "sonner";

export default function QuranicLessonDataTable({lesson}) {
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
  const lessonData = lesson?.results.map((lesson) => {
    return {
      id: lesson.id,
    }
  }
  );
  
console.log(lesson);
  // handle edit function
  const [handleEditQuranLesson, editQuranLessonConfirmDialog] = useEditDialog({
    onConfirm: (state) => handleEdit(state),
    title: "Edit Recorded Session",
    fields: editQuranicLessonFields,
  });

  // handle add function
  const [handleAddQuranicLesson, addQuranicLessonConfirmDialog] = useAddDialog({
    onConfirm: (state) => console.log("Add", state),
    title: "Add a Quranic Lesson",
    fields: addQuranicLessonFields,
  });

  // handle delete function
  const [handleDelete, deleteComponentConfirmDialog] = useConfirmMessage({
    onConfirm: (row) => handleDeleteRow("/dashboard/quran-lessons/",row?.id,"/content"),
    text: "Do you sure you wanna to delete this lesson ? ",
    title: "Delete Lesson",
  });

 // Handle the edit employee request
 const handleEdit = (state) => {
  try {
    lessonData.forEach(async (row) => {
      if (row.id === state.id) {
        const changes = compareData(row, state);
        if (Object.keys(changes).length > 0) {
          console.log("changes=>", changes);
          // Call the API to update the student
          const formData=changes
          const response = await handleUpdateInServer(
            `/dashboard/quran-lessons/${row?.id}/`,
            "PATCH",
            formData,
            true,
            "object",
            "/content"
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
        data={lessonData}
        columns={columns}
        isPending={false}
        onDelete={handleDelete}
        onEdit={handleEditQuranLesson}
      />
      {deleteComponentConfirmDialog}
      {addQuranicLessonConfirmDialog}
      {editQuranLessonConfirmDialog}
    </div>
  );
}
