"use client";

import { DataTableDemo } from "@/components/shared/table-data";
import { useAddDialog } from "@/hooks/custom-dialog";
import { useEditDialog } from "@/hooks/custom-edit-dialog";
import { useConfirmMessage } from "@/hooks/delete-dialog";
import { handleDeleteRow } from "@/lib/actions/delete-server";
import {
  addQuranicLessonFields,
  editQuranicLessonFields,
  viewQuranicLessonFields,
} from "./constant-data";
import { toast } from "sonner";
import moment from "moment";
import { handlePostInServer } from "@/lib/actions/post-server";
import { useViewDialog } from "@/hooks/custom-view-dialog";

export default function QuranicLessonDataTable({ lesson }) {
  console.log(lesson);

  // columns for the table
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
      className: "text-left",
    },
    {
      id: "publisher_name",
      header: "Publisher Name",
      accessorKey: "publisher_name",
      className: "text-center",
    },
    {
      id: "date",
      header: "Date",
      accessorKey: "date",
      className: "text-center",
    },
    {
      id: "image",
      header: "Image",
      accessorKey: "image",
    },
    {
      id: "pdf",
      header: "PDF",
      accessorKey: "pdf",
    },
    {
      id: "video",
      header: "Video",
      accessorKey: "video",
    },
    {
      id: "actions",
      header: "Actions",
      accessorKey: "actions",
      className: "text-center",
    },
  ];
  // data for the table
  const lessonData = lesson?.results?.map((lesson) => {
    return {
      id: lesson?.id,
      title: lesson?.title,
      publisher_name: lesson?.publisher_name,
      image: lesson?.image,
      date: moment(lesson?.created_at).format("DD-MM-YYYY"),
      pdf: lesson?.pdf,
      video: lesson?.video_url,
      description: lesson?.description,
    };
  });

  
  // handle edit function
  const [handleEditQuranLesson, editQuranLessonConfirmDialog] = useEditDialog({
    onConfirm: (state) => handleEdit(state),
    title: "Edit Recorded Session",
    fields: editQuranicLessonFields,
  });

  // handle add function
  const [handleAddQuranicLesson, addQuranicLessonConfirmDialog] = useAddDialog({
    onConfirm: (state) => handleAddLesson(state),
    title: "Add a Quranic Lesson",
    fields: addQuranicLessonFields,
  });

  // handle delete function
  const [handleDelete, deleteComponentConfirmDialog] = useConfirmMessage({
    onConfirm: (row) =>
      handleDeleteRow("/dashboard/quran-lessons/", row?.id, "/content"),
    text: "Do you sure you wanna to delete this lesson ? ",
    title: "Delete Lesson",
  });

  // view lesson dialog
  const [handleViewLesson, viewLessonConfirmDialog] = useViewDialog({
    title: "Lesson's Details",
    fields: viewQuranicLessonFields,
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
            const formData = changes;
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
            } else {
              toast.error(response.error);
            }
          }
        }
      });
    } catch (error) {
      console.error("Error updating instructor:", error);
    }
  };

  // Handle the add new lesson request
  const handleAddLesson = async (state) => {
    try {
      const data = new FormData();
      // Append all keys of state to data except 'loading' and 'error'
      Object.keys(state).forEach((key) => {
        if (key !== "loading" && key !== "error") {
          data.append(key, state[key]);
        }
      });
      const response = await handlePostInServer(
        "/dashboard/quran-lessons/create/",
        data,
        "/content",
        false,
        "formData"
      );
      console.log(response);
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
        data={lessonData}
        columns={columns}
        isPending={false}
        onDelete={handleDelete}
        onEdit={handleEditQuranLesson}
        onView={handleViewLesson}
      />
      {deleteComponentConfirmDialog}
      {addQuranicLessonConfirmDialog}
      {editQuranLessonConfirmDialog}
      {viewLessonConfirmDialog}
    </div>
  );
}
