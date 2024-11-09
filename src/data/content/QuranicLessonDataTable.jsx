
'use client';

import { DataTableDemo } from "@/components/shared/table-data";
import { useAddDialog } from "@/hooks/custom-dialog";
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
      upload:"pdf",
      name: "content",
      id: "content",
      label: "Content Session",
      placeholder: "Enter Session Content",
    },{
      type:"file",
      upload:"video",
      name:"recorded",
      id:"recorded",
      label:"Recorded Session",
      placeholder:"Upload Recorded Session"
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
    }
  ];
  const [handleAddQuranicLesson, addQuranicLessonConfirmDialog] = useAddDialog({
    onConfirm: (state) => console.log("Add", state),
    title: "Add a Quranic Lesson",
    fields: addQuranicLessonFields,
  });
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
     {addQuranicLessonConfirmDialog}
    </div>
  );
}
