"use client";
import { DataTableDemo } from "@/components/shared/table-data";
import { useAddDialog } from "@/hooks/custom-dialog";
import { useEditDialog } from "@/hooks/custom-edit-dialog";
import { useConfirmMessage } from "@/hooks/delete-dialog";
import { addInstructorFields, editInstructorFields, viewInstructorFields } from "./constant-data";
import { handleUpdateInServer } from "@/lib/actions/patch-server";
import { handleDeleteRow } from "@/lib/actions/delete-server";
import { compareData } from "@/lib/utils";
import { toast } from "sonner";
import { useViewDialog } from "@/hooks/custom-view-dialog";
import { handlePostInServer } from "@/lib/actions/post-server";

export default function InstructorsDataTable({ instructors }) {
 console.log("instructors=>", instructors);
  const columns = [
    {
      id: "select",
      header: "",
      className: "text-center",
      accessorKey: "instructor_id",
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
      className: "text-center",
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
      age: instructor.user.age,
      gender: instructor.user.gender,
      groups: instructor.groups.map((group) => group.group_name).join("/ "),
      departments: instructor.departments
        .map((department) => department.department_name)
        .join(", "),
      image: instructor.user.image,
      status: instructor.user.is_active === true ? "Active" : "Un Active",
    };
  });
 

  // add instructor dialog
  const [handleAddInstructor, addInstructorConfirmDialog] = useAddDialog({
    onConfirm: (state) =>handleAddNewInstructor(state),
    title: "Add a New Instructor",
    fields: addInstructorFields,
  });

  // edit instructor dialog
  const [handleEditInstructor, editEmployeeConfirmDialog] = useEditDialog({
    onConfirm: (state) => handleEditInstructors(state),
    title: "Edit an Instructor",
    fields: editInstructorFields,
  });

  // delete instructor dialog
  const [handleDelete, deleteComponentConfirmDialog] = useConfirmMessage({
    onConfirm: (row) => handleDeleteRow("/dashboard/instructors/",row?.id,"/employees/instructors"),
    text: "Do you sure you wanna to delete this Instructor ? ",
    title: "Delete Instructor",
    successMessage: "You have successfully deleted the instructor",
  });

  // view instructor dialog
  const [handleViewInstructor, viewInstructorConfirmDialog] = useViewDialog({
    // onConfirm: (state) => handleEditCurrentStudent(state),
    title: "Instructor's Profile",
    fields: viewInstructorFields,
  });

// add new employee function
const handleAddNewInstructor = async (state) => {
  console.log("state=>", state);
  try {
    const data = {};
    // Append all keys of state to data except 'loading' and 'error'
    Object.keys(state).forEach(key => {
      if (key !== 'loading' && key !== 'error') {
        data[key] = state[key];
      }
    });
   
    const response = await handlePostInServer(
      "/dashboard/create-instructor/",
      JSON.parse(JSON.stringify(data)),
      "/employees/instructors",
      "formData"
    );
    console.log(response);
    if (response.success) {
      toast.success(response.success);
    } else {
      toast.error(response.error);
    }
  } catch (error) {
    console.error("Error adding instructor:", error);
    toast.error("Error adding instructor");
  }
};

  const handleEditInstructors = (state) => {
    try {
      instructorsData.forEach(async (row) => {
        if (row.id === state.id) {
          const changes = compareData(row, state);
          if (Object.keys(changes).length > 0) {
            console.log("changes=>", changes);
            // Call the API to update the student
            const formData=changes
            const response = await handleUpdateInServer(
              `/dashboard/instructors/${row?.id}/`,
              "PATCH",
              formData,
              true,
              "object",
              "/employees/instructors"
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
  };

  return (
    <div>
      <DataTableDemo
        data={instructorsData}
        columns={columns}
        isPending={false}
        onDelete={handleDelete}
        onEdit={handleEditInstructor}
        onView={handleViewInstructor}
      />
      {deleteComponentConfirmDialog}
      {editEmployeeConfirmDialog}
      {addInstructorConfirmDialog}
      {viewInstructorConfirmDialog}
    </div>
  );
}
