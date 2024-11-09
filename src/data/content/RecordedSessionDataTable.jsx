
'use client';
import { DataTableDemo } from "@/components/shared/table-data";
import ViewCard from "@/components/shared/view-card";
import { useAddDialog } from "@/hooks/custom-dialog";
import { useConfirmMessage } from "@/hooks/delete-dialog";

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
  const addRecordedFields = [
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
      options: ["maryam", "Ahmed", "Mohamed", "Omar"],
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
      type: "date",
      name: "date",
      id: "date",
      label: "Session Date",
      placeholder: "Select Session Date",
    },
    {
      type: "time",
      name: "time",
      id: "time",
      label: "Session Time",
      placeholder: "Select Session Time",
    }
  ];
  const [handleAddRecorded, addRecordedConfirmDialog] = useAddDialog({
    onConfirm: (state) => console.log("Add", state),
    title: "Add a Recorded Session",
    fields: addRecordedFields,
  });
  const [handleDelete, deleteComponentConfirmDialog] = useConfirmMessage({
    onConfirm: (id) => console.log("Delete", id),
    text: "Do you sure you wanna to delete this group ? ",
    title: "Delete Group",
  });
  return (
    <div>
      <DataTableDemo
        data={data}
        columns={columns}
        isPending={false}
        onDelete={handleDelete}
      />
      {deleteComponentConfirmDialog}
      {addRecordedConfirmDialog}
    </div>
  );
}
