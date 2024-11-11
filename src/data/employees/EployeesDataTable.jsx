'use client';
import { DataTableDemo } from "@/components/shared/table-data";
import { useAddDialog } from "@/hooks/custom-dialog";
import { useEditDialog } from "@/hooks/custom-edit-dialog";
import { useConfirmMessage } from "@/hooks/delete-dialog";


export default function EmployeesDataTable({employees}) {
  const columns = [
    {
        id: "select",
        header: "",
        className: "text-center",
        accessorKey: "select",

    },
    {
      id: "name",
      header: "Employee Name",
      accessorKey: "name",
    },
    {
      id: "email",
      header: "Email Address",
      accessorKey: "email",
    },
    {
      id: "phone",
      header: "Phone Number",
      accessorKey: "phone",
    },{
      id: "courses",
      header: "Assigned Sections",
      accessorKey: "courses",
    },
    {
      id: "status",
      header: "Status",
      accessorKey: "status",
    },
    {
      id: "performance",
      header: "Performance",
      accessorKey: "performance",
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
    name: "Nouran Hossam",
    email: "nouran@gmail.com",
    phone:"010136784931",
    courses: "Tagweed",
    groups:"G9",
    status: "Active",
    performance: "93%",
   },
   {
    name: "Nouran Hossam",
    email: "nouran@gmail.com",
    phone:"010136784931",
    courses: "Tagweed",
    groups:"G9",
    status: "Active",
    performance: "93%",
   },
   {
    name: "Nouran Hossam",
    email: "nouran@gmail.com",
    phone:"010136784931",
    courses: "Tagweed",
    groups:"G9",
    status: "Active",
    performance: "93%",
   },
   {
    name: "Nouran Hossam",
    email: "nouran@gmail.com",
    phone:"010136784931",
    courses: "Tagweed",
    groups:"G9",
    status: "Active",
    performance: "93%",
   },
   {
    name: "Nouran Hossam",
    email: "nouran@gmail.com",
    phone:"010136784931",
    courses: "Tagweed",
    groups:"G9",
    status: "Active",
    performance: "93%",
   },
   {
    name: "Nouran Hossam",
    email: "nouran@gmail.com",
    phone:"010136784931",
    courses: "Tagweed",
    groups:"G9",
    status: "Active",
    performance: "93%",
   },
   {
    name: "Nouran Hossam",
    email: "nouran@gmail.com",
    phone:"010136784931",
    courses: "Tagweed",
    groups:"G9",
    status: "Active",
    performance: "93%",
   },{
    name: "Nouran Hossam",
    email: "nouran@gmail.com",
    phone:"010136784931",
    courses: "Tagweed",
    group:"G9",
    status: "Active",
    performance: "93%",
   },
   {
    name: "Nouran Hossam",
    email: "nouran@gmail.com",
    phone:"010136784931",
    courses: "Tagweed",
    groups:"G9",
    status: "Active",
    performance: "93%",
   },
   {
    name: "Nouran Hossam",
    email: "nouran@gmail.com",
    phone:"010136784931",
    courses: "Tagweed",
    groups:"G9",
    status: "Active",
    performance: "93%",
   },
   {
    name: "Nouran Hossam",
    email: "nouran@gmail.com",
    phone:"010136784931",
    courses: "Tagweed",
    groups:"G9",
    status: "Active",
    performance: "93%",
   },
   {
    name: "Nouran Hossam",
    email: "nouran@gmail.com",
    phone:"010136784931",
    courses: "Tagweed",
    groups:"G9",
    status: "Active",
    performance: "93%",
   },
   {
    name: "Nouran Hossam",
    email: "nouran@gmail.com",
    phone:"010136784931",
    courses: "Tagweed",
    groups:"G9",
    status: "Active",
    performance: "93%",
   },
  ];
  const addEmployFields = [
    {
      id:'image',
      name: "image",  // Add `name` here to match state
      label: "Employee Image",
      placeholder: "Upload your image",
      type: "image",
    },
    {
      id: "name",
      name: "name",  // Add `name` here to match state
      label: "Employee Name",
      placeholder: "Enter your name",
      type: "text",
      required: true,
    },{
      id:"courses",
      name: "courses",  // Add `name` here to match state
      label: "Courses Name",
      placeholder: "select your courses",
      type: "selected",
      options: ["Tagweed", "Quran", "Tafseer"],
      
    },
    {
      id:"groups",
      name: "groups",  // Add `name` here to match state
      label: "Groups Number",
      placeholder: "select your groups",
      type: "selected",
      options: ["G9", "G3", "G2"],
      
    },
    {
      id: "phone",
      name: "phone",  // Add `name` here to match state
      label: "Phone Number",
      placeholder: "Enter your phone number",
      type: "phone",
    },
    {
      id: "email",
      name: "email",  // Add `name` here to match state
      label: "E-mail address",
      placeholder: "Enter your email",
      type: "email",
      required: true,
    },
  ];
  
  const editEmployFields = [
    {
      id: "name",
      name: "name",  // Add `name` here to match state
      label: "Employee Name",
      placeholder: "Enter your name",
      type: "text",
      required: true,
    },
    {
      id: "email",
      name: "email",  // Add `name` here to match state
      label: "E-mail address",
      placeholder: "Enter your email",
      type: "email",
      required: true,
    },
    {
      id:"phone",
      name: "phone",  // Add `name` here to match state
      label: "Phone Number",
      placeholder: "Enter your phone number",
      type: "phone",
    },
    {
      id:"courses",
      name: "courses",  // Add `name` here to match state
      label: "Courses Name",
      placeholder: "select your courses",
      type: "selected",
      options: ["Tagweed", "Quran", "Tafseer"],
      
    },
    {
      id:"groups",
      name: "groups",  // Add `name` here to match state
      label: "Groups Number",
      placeholder: "select your groups",
      type: "selected",
      options: ["G9", "G3", "G2"],
      
    },
    {
      id: "phone",
      name: "phone",  // Add `name` here to match state
      label: "Phone Number",
      placeholder: "Enter your phone number",
      type: "tel",
    },
    
  ];
  const [handleAddEmployee, addEmployeeConfirmDialog] = useAddDialog({
    onConfirm: (state) => console.log("Add",state),
    title: "Add a New Employee",
    fields: addEmployFields,
  });
  const [handleEditEmployee, editEmployeeConfirmDialog] = useEditDialog({
    onConfirm: (state) => handleEdit,
    title: "Add a New Employee",
    fields: editEmployFields,
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
      <DataTableDemo data={data} columns={columns} isPending={false} 
      onDelete={handleDelete}
      onEdit={handleEditEmployee}
      />
     {deleteComponentConfirmDialog}
     {editEmployeeConfirmDialog}
     {addEmployeeConfirmDialog}
    </div>
  );
}
