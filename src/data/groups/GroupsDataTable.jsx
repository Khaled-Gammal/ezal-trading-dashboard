'use client';
import { DataTableDemo } from "@/components/shared/table-data";
import { useAddDialog } from "@/hooks/custom-dialog";
import { useEditDialog } from "@/hooks/custom-edit-dialog";
import { useConfirmMessage } from "@/hooks/delete-dialog";


export default function GroupsDataTable({groups}) {
  const columns = [
    {
        id: "select",
        header: "",
        className: "text-center",
        accessorKey: "select",

    },
    {
      id: "id",
      header: "Group ID",
      accessorKey: "id",
      className: "text-left",
    },
    {
      id: "name",
      header: "Group Name",
      accessorKey: "name",
    },
    {
      id: "instructor",
      header: "Assigned Instructor",
      accessorKey: "instructor",
    },
    {
      id: "number_students",
      header: "No.of Student",
      accessorKey: "number_students",
    },
    {
      id: "department",
      header: "Department Name ",
      accessorKey: "department",
      
    },
    {
      id: "actions",
      header: "Actions",
      accessorKey: "actions",
      className: "text-center",
    },
  ];
  const Groups=groups?.results.map((group) => {
    return {
      id: group.id,
      name: group.name,
      instructor: group.instructor,
      number_students: group.students.length,
      department: group.department,
    };
  }
  );
  const addGroupFields = [
    {
      id: "group",
      name: "group",  // Add `name` here to match state
      label: "Group Name",
      placeholder: "Enter group name",
      type: "text",
    },
    {
      id: "instructor",
      name: "instructor",  // Add `name` here to match state
      label: "Instructor Name",
      placeholder: "Select instructor name",
      type: "selected",
      options: ["Ali", "Mohamed", "Ahmed"],
      view: "name",
    },
    {
      id: "department",
      name: "department",  // Add `name` here to match state
      label: "Department Name",
      placeholder: "Select department name",
      type: "selected",
      options: ["Quran", "Tafseer", "Tagweed"],
    },
    
  ];
  
  const editGroupFields = [
    {
      id: "name",
      name: "name",  // Add `name` here to match state
      label: "Group Name",
      placeholder: "Enter group name",
      type: "text",
    },
    {
      id: "instructor",
      name: "instructor",  // Add `name` here to match state
      label: "Instructor Name",
      placeholder: "Select instructor name",
      type: "selected",
      options: ["Ali", "Mohamed", "Ahmed"],
      view: "name",
    },
    {
      id: "department",
      name: "department",  // Add `name` here to match state
      label: "Department Name",
      placeholder: "Select department name",
      type: "selected",
      options: ["Quran", "Tafseer", "Tagweed"],
    },
    
  ];
  
  const [handleEditGroup, editGroupConfirmDialog] = useEditDialog({
    onConfirm: (state) => handleEdit,
    title: "Edit Group",
    fields: editGroupFields,
  });
  const [handleAddGroup, addGroupConfirmDialog] = useAddDialog({
    onConfirm: (id) => console.log("Add",id),
    title: "AAdd a New Group",
    fields: addGroupFields,
  });
  const [handleDelete, deleteComponentConfirmDialog] = useConfirmMessage({
    onConfirm:  async (id) => console.log("Delete",id),
    text: "Do you sure you wanna to delete this group ? ",
    title: "Delete Group",
  });
  const handleEdit = (id) => {
    console.log("Edit",id);
  }
 
  return (
    <div>
      <DataTableDemo data={Groups} columns={columns} isPending={false} 
      onDelete={handleDelete}
      onEdit={handleEditGroup}
      />
     {deleteComponentConfirmDialog}
     {editGroupConfirmDialog}
     {addGroupConfirmDialog}
    </div>
  );
}
