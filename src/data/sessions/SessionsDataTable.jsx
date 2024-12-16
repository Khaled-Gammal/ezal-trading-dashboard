'use client';
import { DataTableDemo } from "@/components/shared/table-data";
import { useAddDialog } from "@/hooks/custom-dialog";
import { useEditDialog } from "@/hooks/custom-edit-dialog";
import { useConfirmMessage } from "@/hooks/delete-dialog";
import moment from "moment";
import { addSessionFields, editSessionFields, viewSessionFields } from "./constant-data";
import { useViewDialog } from "@/hooks/custom-view-dialog";
import { handleDeleteRow } from "@/lib/actions/delete-server";
import { toast } from "sonner";
import { handlePostInServer } from "@/lib/actions/post-server";
import { handleUpdateInServer } from "@/lib/actions/patch-server";
import { compareData } from "@/lib/utils";


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
    onConfirm: (state) => handleEdit(state),
    title: "Edit Session",
    fields: editSessionFields,
  });

  // add group dialog
  const [handleAddSession, addSessionConfirmDialog] = useAddDialog({
    onConfirm: (state) => handleAddNewSession(state),
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
  const handleEdit = (state) => {
    try {
      sessionData.forEach(async (row) => {
        if (row.id === state.id) {
          const changes = compareData(row, state);
          if (Object.keys(changes).length > 0) {
            console.log("changes=>", changes);
            // Call the API to update the student
            const formData=changes
            const response = await handleUpdateInServer(
              `/dashboard/live-sessions/${row?.id}/`,
              "PATCH",
              formData,
              true,
              "object",
              "/sessions"
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
 const handleAddNewSession = async (state) => {
    console.log("state=>", state);
    try {
      const data = {};
      // Append all keys of state to data except 'loading' and 'error'
      Object.keys(state).forEach(key => {
        if (key !== 'loading' && key !== 'error') {
          data[key] = state[key];
        }
      });
      data["start_time"] = moment(data["start_time"]).format("YYYY-MM-DDTHH:mm:ssZ");
      const response = await handlePostInServer(
        "/dashboard/meetings/",
        JSON.parse(JSON.stringify(data)),
        "/sessions",
        true,
        "object"
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
