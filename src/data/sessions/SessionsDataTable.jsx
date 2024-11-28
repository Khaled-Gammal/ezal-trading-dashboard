'use client';
import { DataTableDemo } from "@/components/shared/table-data";
import { useAddDialog } from "@/hooks/custom-dialog";
import { useEditDialog } from "@/hooks/custom-edit-dialog";
import { useConfirmMessage } from "@/hooks/delete-dialog";
import moment from "moment";
import { addSessionFields, editSessionFields, viewSessionFields } from "./constant-data";
import { useViewDialog } from "@/hooks/custom-view-dialog";
import { handleDeleteRow } from "@/lib/actions/delete-server";


export default function SessionsDataTable({sessions}) {

  console.log(sessions);
  // columns for the table
  const columns = [
    
    {
      id: "id",
      header: "Session Name",
      accessorKey: "title",
      className: "text-left",
    },
    {
      id:"department",
      header:"Department Name",
      accessorKey:"department_title",
      className: "text-center",
    },
    {
      id: "group_name",
      header: "Group Name ",
      accessorKey: "group_name",
      className: "text-center",
    },
    {
      id: "instructor_name",
      header: "Group Instructor",
      accessorKey: "instructor_name",
    },
    {
      id: "date",
      header: "Date",
      accessorKey: "date",
    },
    {
      id: "time",
      header: "Time",
      accessorKey: "time",
    },
    {
      id: "session_type",
      header: "Session Type",
      accessorKey: "session_type",
    },
    {
      id: "actions",
      header: "Actions",
      accessorKey: "actions",
      className: "text-center",
    },
  ];

  // data for the table
  const sessionData=sessions?.results.map((session) => {
    return {
      id: session.id,
      title: session.title,
      department_title:session?.department_title,
      group_name:session?.group_name,
      instructor_name:session?.instructor_name,
      date: moment(session?.start_time).format("DD-MM-YYYY"),
      time: moment(session?.start_time).format("hh:mm A"),
      session_type:session?.session_type,
    }
  });
 
  // edit group dialog
  const [handleEditSession, editSessionConfirmDialog] = useEditDialog({
    onConfirm: (state) => handleEdit,
    title: "Edit Session",
    fields: editSessionFields,
  });

  // add group dialog
  const [handleAddEmployee, addSessionConfirmDialog] = useAddDialog({
    onConfirm: (id) => console.log("Add",id),
    title: "Add a New Session",
    fields: addSessionFields,
  });

  const [handleViewSession, viewSessionConfirmDialog] = useViewDialog({
    // onConfirm: (state) => handleEditCurrentStudent(state),
    title: "Session's Details",
    fields: viewSessionFields,
  });
  const [handleDelete, deleteComponentConfirmDialog] = useConfirmMessage({
    onConfirm: (row) => handleDeleteRow("/dashboard/live-sessions/",row?.id,"/sessions"),
    text: "Do you sure you wanna to delete this session ? ",
    title: "Delete session",
  });
  const handleEdit = (id) => {
    console.log("Edit",id);
  }
 
  return (
    <div>
      <DataTableDemo data={sessionData} columns={columns} isPending={false} 
      onDelete={handleDelete}
      onEdit={handleEditSession}
      onView={handleViewSession}
      />
      {editSessionConfirmDialog}
     {deleteComponentConfirmDialog}
     {addSessionConfirmDialog}
      {viewSessionConfirmDialog}
    </div>
  );
}
