'use client';
import { DataTableDemo } from "@/components/shared/table-data";
import { useAddDialog } from "@/hooks/custom-dialog";
import { useEditDialog } from "@/hooks/custom-edit-dialog";
import { useConfirmMessage } from "@/hooks/delete-dialog";
import { handleDeleteRow } from "@/lib/actions/delete-server";
import { editSectionFields, addSectionFields ,viewSectionFields} from "./constant-data";
import { compareData } from "@/lib/utils";
import { handleUpdateInServer } from "@/lib/actions/patch-server";
import { toast } from "sonner";
import { useViewDialog } from "@/hooks/custom-view-dialog";
import { handlePostInServer } from "@/lib/actions/post-server";

export default function SectionsDataTable({sections}) {
console.log(sections);
// columns for the table
  const columns = [
    {
        id: "select",
        header: "",
        className: "text-center",
        accessorKey: "id",

    },
    {
      id: "name",
      header: "Section Name",
      accessorKey: "name",
    },
    {
      id: "actions",
      header: "Actions",
      accessorKey: "actions",
      className: "text-center",
    },
  ];

  // data for the table
  const sectionsData=sections?.results.map((section) => {
    return {
      id: section.id,
      name: section.name,
    };
  }
  );
 
  // edit Section dialog
  const [handleEditSection, editSectionConfirmDialog] = useEditDialog({
    onConfirm: (state) => handleEdit(state),
    title: "Edit Section",
    fields: editSectionFields,
  });

  // add Section dialog
  const [handleAddSection, addSectionConfirmDialog] = useAddDialog({
    onConfirm: (state) => handleAddNewSection(state),
    title: "Add a New Section",
    fields: addSectionFields,
  });

  // view Section dialog
  const [handleViewSection, viewSectionConfirmDialog] = useViewDialog({
    title: "Section's Details",
    fields: viewSectionFields,
  });

  // delete Section dialog
  const [handleDelete, deleteComponentConfirmDialog] = useConfirmMessage({
    onConfirm: (row) => handleDeleteRow("/dashboard/sections/",row?.id,"/Sections"),
    text: "Do you sure you wanna to delete this Section ? ",
    title: "Delete Section",
  });
// hadle add function
const handleAddNewSection = async(state) => {
  try {
    const data = {};
    // Append all keys of state to data except 'loading' and 'error'
    Object.keys(state).forEach(key => {
      if (key !== 'loading' && key !== 'error') {
        data[key] = state[key];
      }
    });
   
    const response = await handlePostInServer(
      "/dashboard/sections/",
      JSON.parse(JSON.stringify(data)),
      "/sections",
      true,
      "object"
    );
    console.log(response);
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
  // handle edit function
  const handleEdit = (state) => {
    try {
      sectionsData.forEach(async (row) => {
        if (row.id === state.id) {
          const changes = compareData(row, state);
          if (Object.keys(changes).length > 0) {
            console.log("changes=>", changes);
            // Call the API to update the student
            const formData=changes
            const response = await handleUpdateInServer(
              `/dashboard/sections/${row?.id}/`,
              "PATCH",
              formData,
              true,
              "object",
              "/sections"
            );
            if (response.success) {
            toast.success(response.success);
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
 

  return (
    <div>
      <DataTableDemo data={sectionsData} columns={columns} isPending={false} 
      onDelete={handleDelete}
      onEdit={handleEditSection}
      onView={handleViewSection}
      />
     {deleteComponentConfirmDialog}
     {editSectionConfirmDialog}
     {addSectionConfirmDialog}
      {viewSectionConfirmDialog}
    </div>
  );
}
