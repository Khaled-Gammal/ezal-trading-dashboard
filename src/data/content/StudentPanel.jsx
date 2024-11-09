"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ArticlesDataTable from "./ArticlesDataTable";
import RecordedSessionDataTable from "./RecordedSessionDataTable";
import QuranicLessonDataTable from "./QuranicLessonDataTable";

export default function ContentPanel() {
  return (
    <Tabs defaultValue="articles" className="w-full bg-inherit">
      <TabsList className=" w-[25%] text-primary font-medium text-[15px] bg-inherit">
        <TabsTrigger
          value="articles"
          className="bg-inherit data-[state=active]:text-gold data-[state=active]:border-b-2 data-[state=active]:border-gold rounded-none"
        >
          Articles
        </TabsTrigger>
        <TabsTrigger
          value="recordedsession"
          className="bg-inherit data-[state=active]:text-gold data-[state=active]:border-b-2 data-[state=active]:border-gold rounded-none"
        >
          Recorded Session
        </TabsTrigger>
        <TabsTrigger
          value="quraniclesson"
          className="bg-inherit data-[state=active]:text-gold data-[state=active]:border-b-2 data-[state=active]:border-gold rounded-none"
        >
          Quranic Lesson
        </TabsTrigger>
      </TabsList>
      <TabsContent value="articles">
        <ArticlesDataTable />
      </TabsContent>
      <TabsContent value="recordedsession">
        <RecordedSessionDataTable />
      </TabsContent>
      <TabsContent value="quraniclesson">
        <QuranicLessonDataTable />
      </TabsContent>
    </Tabs>
  );
}
