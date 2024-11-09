
'use client';
import ViewCard from "@/components/shared/view-card";

export default function PendingDataTable() {
  
 
  return (
    <div>
     {
      Array.from({ length: 10 }).map((_, index) => (
        <ViewCard key={index} />
      ))
     }
    </div>
  );
}
