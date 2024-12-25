"use client";
import EmptyData from "@/components/shared/empty-data";
import ViewCard from "@/components/shared/view-card";

export default function PendingDataTable({ pendingStudent }) {
  console.log("pendingStudent", pendingStudent);
  
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
        : 
        <EmptyData />
      }
    </div>
  );
}
