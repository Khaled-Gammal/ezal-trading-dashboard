
'use client';

import ViewCard from "@/components/shared/view-card";
export default function WaitingInterviewsDataTable({waitingInterviews}) {
  console.log("waitingInterviews",waitingInterviews);
  const WaitingInterviewStudents = waitingInterviews?.results?.map((student) => {
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
      {WaitingInterviewStudents?.length > 0
        ? WaitingInterviewStudents.map((student, index) => (
            <ViewCard key={index} student={student} />
          ))
        : Array.from({ length: 10 }).map((_, index) => (
            <ViewCard key={index} />
          ))}
    </div>
  );
}
