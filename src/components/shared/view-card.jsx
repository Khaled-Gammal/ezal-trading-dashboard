"use client";
import Image from "next/image";
import student from "../../assets/images/student.png";

export default function ViewCard() {
  return (
    <div className="flex flex-row gap-3 border-b border-b-gray-200 py-[15.02px] w-[95%]">
      <Image
        src={student}
        alt="student"
        height={45}
        width={45}
        className="h-[45px] w-[45px] object-cover"
      />
      <div className="flex flex-col gap-1 w-full">
        <div className="flex flex-row justify-between">
        <h2 className="text-sm font-medium leading-[16.94px] text-gray-700">
          Ali Ehab
        </h2>
        <p className="text-xs text-gray-200 font-normal">08 : 00 PM</p>
        </div>
        <p className="text-xs text-gray-300 font-normal">
          Requested to join to tagweed course as he is a new student requested
          to join to tagweed course as he is a new student
        </p>
      </div>
    </div>
  );
}
