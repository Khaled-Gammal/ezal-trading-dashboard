"use client";
import { DataTableDemo } from "@/components/shared/table-data";
import { useAddDialog } from "@/hooks/custom-dialog";
import { useEditDialog } from "@/hooks/custom-edit-dialog";
import { useConfirmMessage } from "@/hooks/delete-dialog";

export default function InstructorsDataTable({ instructors }) {
  console.log("instructors", instructors);
  const columns = [
    {
      id: "select",
      header: "",
      className: "text-center",
      accessorKey: "select",
    },
    {
      id: "full_name",
      header: "Employee Name",
      accessorKey: "full_name",
    },
    {
      id: "email",
      header: "Email Address",
      accessorKey: "email",
      className: "text-center",
    },
    {
      id: "phone_number",
      header: "Phone Number",
      accessorKey: "phone_number",
      className: "text-center",
    },
    {
      id: "groups",
      header: "Assigned Sections",
      accessorKey: "groups",
      className: "text-center",
    },
    {
      id: "departments",
      header: "Assigned Departments",
      accessorKey: "departments",
      className: "text-center",
    },
    {
      id: "image",
      header: "Image",
      accessorKey: "image",
      className: "text-center",
    },
    {
      id: "status",
      header: "Status",
      accessorKey: "status",
      className: "text-center text-[#BF9E5C]",
    },
    {
      id: "actions",
      header: "Actions",
      accessorKey: "actions",
      className: "text-center",
    },
  ];
  const instructorsData = instructors?.results?.map((instructor) => {
    return {
      id: instructor.instructor_id,
      full_name: instructor.user.full_name,
      email: instructor.user.email,
      phone_number: instructor.user.phone_number,
      age: instructor.age,
      gender: instructor.gender,
      groups: instructor.groups.map((group) => group.group_name).join(", "),
      departments: instructor.departments
        .map((department) => department.department_name)
        .join(", "),
      image: instructor.user.image,
      status: instructor.user.is_active === true ? "Active" : "Un Active",
    };
  });
  const addInstructorFields = [
    {
      id: "image",
      name: "image", // Add `name` here to match state
      label: "Employee Image",
      placeholder: "Upload your image",
      type: "image",
      required: true,
    },
    {
      id: "name",
      name: "name", // Add `name` here to match state
      label: "Employee Name",
      placeholder: "Enter your name",
      type: "text",
      required: true,
    },
    {
      id: "courses",
      name: "courses", // Add `name` here to match state
      label: "Courses Name",
      placeholder: "select your courses",
      type: "selected",
      options: ["Tagweed", "Quran", "Tafseer"],
      required: true,
    },
    {
      id: "groups",
      name: "groups", // Add `name` here to match state
      label: "Groups Number",
      placeholder: "select your groups",
      type: "selected",
      options: ["G9", "G3", "G2"],
      required: true,
    },
    {
      id: "phone",
      name: "phone", // Add `name` here to match state
      label: "Phone Number",
      placeholder: "Enter your phone number",
      type: "phone",
      required: true,
    },
    {
      id: "email",
      name: "email", // Add `name` here to match state
      label: "E-mail address",
      placeholder: "Enter your email",
      type: "email",
      required: true,
    },
  ];

  const editInstructorFields = [
    {
      id: "name",
      name: "name", // Add `name` here to match state
      label: "Employee Name",
      placeholder: "Enter your name",
      type: "text",
      required: true,
    },
    {
      id: "email",
      name: "email", // Add `name` here to match state
      label: "E-mail address",
      placeholder: "Enter your email",
      type: "email",
      required: true,
    },
    {
      id: "phone",
      name: "phone", // Add `name` here to match state
      label: "Phone Number",
      placeholder: "Enter your phone number",
      type: "phone",
      required: true,
    },
    {
      id: "courses",
      name: "courses", // Add `name` here to match state
      label: "Courses Name",
      placeholder: "select your courses",
      type: "selected",
      options: ["Tagweed", "Quran", "Tafseer"],
    },
    {
      id: "groups",
      name: "groups", // Add `name` here to match state
      label: "Groups Number",
      placeholder: "select your groups",
      type: "selected",
      options: ["G9", "G3", "G2"],
    },
    {
      id: "phone",
      name: "phone", // Add `name` here to match state
      label: "Phone Number",
      placeholder: "Enter your phone number",
      type: "tel",
    },
  ];
  const [handleAddInstructor, addInstructorConfirmDialog] = useAddDialog({
    onConfirm: (state) => console.log("Add", state),
    title: "Add a New Instructor",
    fields: addInstructorFields,
  });
  const [handleEditInstructor, editEmployeeConfirmDialog] = useEditDialog({
    onConfirm: (state) => handleEditInstructors(state),
    title: "Add a New Instructor",
    fields: editInstructorFields,
  });

  const [handleDelete, deleteComponentConfirmDialog] = useConfirmMessage({
    onConfirm: async (id) => console.log("Delete", id),
    text: "Do you sure you wanna to delete this Instructor ? ",
    title: "Delete Instructor",
  });
  const handleEditInstructors = (state) => {
    console.log("Edit", id);
  };

  return (
    <div>
      <DataTableDemo
        data={instructorsData}
        columns={columns}
        isPending={false}
        onDelete={handleDelete}
        onEdit={handleEditInstructor}
      />
      {deleteComponentConfirmDialog}
      {editEmployeeConfirmDialog}
      {addInstructorConfirmDialog}
    </div>
  );
}
