import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PencilLine, Trash2 } from "lucide-react";
import Image from "next/image";
import React from "react";

function DepartmentCard({ row, onEdit, onDelete }) {
  return (
    <div className="grid grid-cols-4 gap-4 px-2 py-2 cursor-pointer items-center">
      <p className="text-md font-normal text-gray-400">{row?.title}</p>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <p className="text-md font-normal text-gray-400 text-ellipsis overflow-hidden whitespace-nowrap">
              {row?.description}
            </p>
          </TooltipTrigger>
          <TooltipContent className='w-[50%]'>
            <p className="text-md font-normal text-white w-[50%]">
              {row?.description}
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <Image
        src={row?.image}
        alt="department"
        width={50}
        height={50}
        className="justify-self-center"
      />
      <div className="flex flex-row justify-end items-center gap-1">
        {onEdit && (
          <PencilLine
            size={20}
            strokeWidth={1.5}
            color="#8D8D8D"
            onClick={() => onEdit(row)}
          />
        )}
        {onDelete && (
          <Trash2
            size={20}
            strokeWidth={1.5}
            color="#8D8D8D"
            onClick={() => onDelete(row)}
          />
        )}
      </div>
    </div>
  );
}

export default DepartmentCard;
