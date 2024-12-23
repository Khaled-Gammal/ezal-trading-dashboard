"use client";

import { useAddDialog } from "@/hooks/custom-dialog";
import { addDepartmentFields, editDepartmentFields } from "./constant-data";
import DepartmentCard from "./department-card";
import { handleDeleteRow } from "@/lib/actions/delete-server";
import { useConfirmMessage } from "@/hooks/delete-dialog";
import { useEditDialog } from "@/hooks/custom-edit-dialog";

function DepartmentsDataTable({ departments }) {
  const departmentsData = departments?.results;


   // add department dialog
   const [handleAddDepartment, addDepartmentConfirmDialog] = useAddDialog({
    // onConfirm: (state) => handleAddNewSection(state),
    title: "Add a New Department",
    fields: addDepartmentFields,
  });

  // edit department  dialog
  const [handleEditSection, editSectionConfirmDialog] = useEditDialog({
    // onConfirm: (state) => handleEdit(state),
    title: "Edit Section",
    fields: editDepartmentFields,
  });


  // delete department dialog
  const [handleDelete, deleteComponentConfirmDialog] = useConfirmMessage({
    onConfirm: (row) => handleDeleteRow("/dashboard/departments/",row?.id,"/Sections"),
    text: "Do you sure you wanna to delete this Department ? ",
    title: "Delete Department",
  });


  return (
    <div>
        <div className="flex flex-row justify-between items-center px-2 mb-4">
            <p className="text-md font-medium text-primary leading-5">
            Add New Department
            </p>
            {addDepartmentConfirmDialog}
            </div>
      {departmentsData.map((department) => {
        return (
          <DepartmentCard
            key={department.id}
            row={department}
            onDelete={(row) => handleDelete(row)}
            onEdit={(row) => handleEditSection(row)}
          />
        );
      })}
      {deleteComponentConfirmDialog}
      {editSectionConfirmDialog}
    </div>
  );
}

export default DepartmentsDataTable;
