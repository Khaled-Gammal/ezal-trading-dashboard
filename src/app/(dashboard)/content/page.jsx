
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ArticlesDataTable from "@/data/content/articles/ArticlesDataTable";
import QuranicLessonDataTable from "@/data/content/lesson/QuranicLessonDataTable";
import RecordedSessionDataTable from "@/data/content/recorded/RecordedSessionDataTable";
import { GetDataInServerSide } from "@/lib/actions/get-server";


export default async function ContentPage() {
  const articles = await GetDataInServerSide(
    '/dashboard/articles/'
  )


  const lesson = await GetDataInServerSide(
    '/dashboard/quran-lessons/'
  )


  return (
    <Tabs defaultValue="articles" className="w-full bg-inherit">
    <TabsList className=" w-[30%] text-primary font-medium text-[15px] bg-inherit">
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
      <ArticlesDataTable  articles={articles}/>
    </TabsContent>
    <TabsContent value="recordedsession">
      <RecordedSessionDataTable />
    </TabsContent>
    <TabsContent value="quraniclesson">
      <QuranicLessonDataTable  lesson={lesson}/>
    </TabsContent>
  </Tabs>
    )
  }
  