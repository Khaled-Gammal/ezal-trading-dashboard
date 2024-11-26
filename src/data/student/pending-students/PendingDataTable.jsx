"use client";
import ViewCard from "@/components/shared/view-card";

export default function PendingDataTable({ pendingStudent }) {
  const PendingStudents = pendingStudent?.results?.map((student) => {
    console.log("student",student);
    return {
      full_name: student.full_name,
      student_id: student.student_id,
      image: student.user_image,
      time: student.created_at,
      email: student.email,
      phone: student.phone,
      age: student.age,
      gender: student.gender,
      student_code: student.student_code,

    };
  });

  return (
    <div>
      {PendingStudents?.length > 0
        ? PendingStudents.map((student, index) => (
            <ViewCard key={index} student={student} />
          ))
        : Array.from({ length: 10 }).map((_, index) => (
            <ViewCard key={index} />
          ))}
    </div>
  );
}
