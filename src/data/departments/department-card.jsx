import { PencilLine, Trash2 } from "lucide-react";
import React from "react";

function DepartmentCard({ row, onEdit, onDelete }) {
  return (
    <div className="flex flex-row justify-between items-center px-2 py-2 cursor-pointer">
      <p className="text-md font-normal text-gray-400">
       {row?.title}
      </p>
      <div className="flex flex-row justify-end items-center gap-1">
        {onEdit && (
          <PencilLine size={20} strokeWidth={1.5} color="#8D8D8D" onClick={() => onEdit(row)} />
        )}
        {onDelete && (
          <Trash2 size={20} strokeWidth={1.5} color="#8D8D8D" onClick={() => onDelete(row)} />
        )}
      </div>
    </div>
  );
}

export default DepartmentCard;
