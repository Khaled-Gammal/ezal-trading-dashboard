'use client';
import { DataTableDemo } from "@/components/shared/table-data";
import { useAddDialog } from "@/hooks/custom-dialog";
import { useEditDialog } from "@/hooks/custom-edit-dialog";
import { useConfirmMessage } from "@/hooks/delete-dialog";


export default function SessionsDataTable({sessions}) {
  const columns = [
    
    {
      id: "id",
      header: "Session Name",
      accessorKey: "id",
      className: "text-left",
    },
    {
      id: "department",
      header: "Department Name ",
      accessorKey: "department",
      
    },
    {
      id: "instructor",
      header: "Group Instructor",
      accessorKey: "instructor",
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
      id: "actions",
      header: "Actions",
      accessorKey: "actions",
      className: "text-center",
    },
  ];
  const data = [
    {
      id: 1,
      department: "G9",
      instructor: "Ahmed Mohamed",
      date: "19 - 08 - 2024",
      time:"09 : 00 AM",
    },
    {
      id: 2,
      department: "G10",
      instructor: "Mohamed Ahmed",
      date: "19 - 08 - 2024",
      time:"09 : 00 AM",
    },
    {
      id: 3,
      department: "G11",
      instructor: "Ali Mohamed",
      date: "19 - 08 - 2024",
      time:"09 : 00 AM",
    },
    {
      id: 4,
      department: "G12",
      instructor: "Ali Ahmed",
      date: "19 - 08 - 2024",
      time:"09 : 00 AM",
    },
    {
      id: 5,
      department: "G13",
      instructor: "Ahmed Ali",
      date: "19 - 08 - 2024",
      time:"09 : 00 AM",
    },
    {
      id: 6,
      department: "G14",
      instructor: "Mohamed Ali",
      date: "19 - 08 - 2024",
      time:"09 : 00 AM",
    },
    {
      id: 7,
      department: "G15",
      instructor: "Ali Ali",
      date: "19 - 08 - 2024",
      time:"09 : 00 AM",
    },
    {
      id: 8,
      department: "G16",
      instructor: "Ali Ali",
      date: "19 - 08 - 2024",
      time:"09 : 00 AM",
    },
    {
      id: 9,
      department: "G17",
      instructor: "Ali Ali",
      date: "19 - 08 - 2024",
      time:"09 : 00 AM",
    },
    {
      id: 10,
      department: "G18",
      instructor: "Ali Ali",
      date: "19 - 08 - 2024",
      time:"09 : 00 AM",
    },
    
  ];
  const addSessionFields = [
    {
      id: "session",
      name: "session",  // Add `name` here to match state
      label: "Session Name",
      placeholder: "Enter session name",
      type: "text",
    },
    {
      id: "department",
      name: "department",  // Add `name` here to match state
      label: "Department Name",
      placeholder: "Select department name",
      type: "selected",
      options: ["Quran", "Tafseer", "Tagweed"],
    },
    {
      id:"date",
      name: "date",  // Add `name` here to match state
      label: "Session Date",
      placeholder: "Select session date",
      type: "date",

    },
    {
      id:"time",
      name: "time",  // Add `name` here to match state
      label: "Session Time",
      placeholder: "Select session time",
      type: "time",
    },
    {
      id: "link",
      name: "link",  // Add `name` here to match state
      label: "Session joining Link",
      placeholder: "Enter session joining Link",
      type: "text",
    }
  ];
  const editSessionFields = [
    {
      id: "session",
      name: "session",  // Add `name` here to match state
      label: "Session Name",
      placeholder: "Enter session name",
      type: "text",
    },
    {
      id: "department",
      name: "department",  // Add `name` here to match state
      label: "Department Name",
      placeholder: "Select department name",
      type: "selected",
      options: ["Quran", "Tafseer", "Tagweed"],
    },
    {
      id:"date",
      name: "date",  // Add `name` here to match state
      label: "Session Date",
      placeholder: "Select session date",
      type: "date",

    },
    {
      id:"time",
      name: "time",  // Add `name` here to match state
      label: "Session Time",
      placeholder: "Select session time",
      type: "time",
    },
    {
      id: "link",
      name: "link",  // Add `name` here to match state
      label: "Session joining Link",
      placeholder: "Enter session joining Link",
      type: "text",
    }
  ];
  const [handleEditSession, editSessionConfirmDialog] = useEditDialog({
    onConfirm: (state) => handleEdit,
    title: "Edit Session",
    fields: editSessionFields,
  });
  const [handleAddEmployee, addSessionConfirmDialog] = useAddDialog({
    onConfirm: (id) => console.log("Add",id),
    title: "Add a New Session",
    fields: addSessionFields,
  });
  const [handleDelete, deleteComponentConfirmDialog] = useConfirmMessage({
    onConfirm:  async (id) => console.log("Delete",id),
    text: "Do you sure you wanna to delete this session ? ",
    title: "Delete session",
  });
  const handleEdit = (id) => {
    console.log("Edit",id);
  }
 
  return (
    <div>
      <DataTableDemo data={data} columns={columns} isPending={false} 
      onDelete={handleDelete}
      onEdit={handleEditSession}
      />
      {editSessionConfirmDialog}
     {deleteComponentConfirmDialog}
     {addSessionConfirmDialog}
    </div>
  );
}
