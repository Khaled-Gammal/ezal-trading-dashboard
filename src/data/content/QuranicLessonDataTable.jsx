"use client";

import { DataTableDemo } from "@/components/shared/table-data";
import { useAddDialog } from "@/hooks/custom-dialog";
import { useEditDialog } from "@/hooks/custom-edit-dialog";
import { useConfirmMessage } from "@/hooks/delete-dialog";

export default function QuranicLessonDataTable() {
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
  // add QuranicLesson Fields input form
  const addQuranicLessonFields = [
    {
      type: "text",
      name: "title",
      id: "title",
      label: "Lesson Title",
      placeholder: "Enter Lesson Title",
    },
    {
      type: "selected",
      name: "instructor",
      id: "instructor",
      label: "Instructor Name",
      placeholder: "Select Instructor",
      options: ["Ali", "Ahmed", "Mohamed", "Omar"],
    },
    {
      type: "file",
      upload: "pdf",
      name: "content",
      id: "content",
      label: "Content Session",
      placeholder: "Enter Session Content",
    },
    {
      type: "file",
      upload: "video",
      name: "recorded",
      id: "recorded",
      label: "Recorded Session",
      placeholder: "Upload Recorded Session",
    },
    {
      type: "text",
      name: "duration",
      id: "duration",
      label: "Duration",
      placeholder: "Select Duration",
    },
    {
      type: "description",
      name: "description",
      id: " description",
      label: "Description",
      placeholder: "Select Description",
    },
  ];

  // edit QuranicLesson Fields input form
  const editQuranicLessonFields = [
    {
      type: "text",
      name: "title",
      id: "title",
      label: "Lesson Title",
      placeholder: "Enter Lesson Title",
    },
    {
      type: "selected",
      name: "instructor",
      id: "instructor",
      label: "Instructor Name",
      placeholder: "Select Instructor",
      options: ["Ali", "Ahmed", "Mohamed", "Omar"],
    },
    {
      type: "file",
      upload: "pdf",
      name: "content",
      id: "content",
      label: "Content Session",
      placeholder: "Enter Session Content",
    },
    {
      type: "file",
      upload: "video",
      name: "recorded",
      id: "recorded",
      label: "Recorded Session",
      placeholder: "Upload Recorded Session",
    },
    {
      type: "text",
      name: "duration",
      id: "duration",
      label: "Duration",
      placeholder: "Select Duration",
    },
    {
      type: "description",
      name: "description",
      id: " description",
      label: "Description",
      placeholder: "Select Description",
    },
  ];

  // handle edit function
  const [handleEditQuranLesson, editQuranLessonConfirmDialog] = useEditDialog({
    onConfirm: (state) => handleEdit,
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
    onConfirm: (id) => console.log("Delete", id),
    text: "Do you sure you wanna to delete this group ? ",
    title: "Delete Group",
  });

  const handleEdit = (id) => {
    console.log("Edit", id);
  }
  return (
    <div>
      <DataTableDemo
        data={data}
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
