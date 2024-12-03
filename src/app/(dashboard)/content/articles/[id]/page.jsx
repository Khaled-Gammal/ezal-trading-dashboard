import SpecificArticleDataTable from "@/data/content/articles/specific-article/SpecificArticleDataTable";
import { GetDataInServerSide } from "@/lib/actions/get-server"

export default async function ArticlesPage({id}) {
  const article = await GetDataInServerSide(
    `/dashboard/articles/${id}`
  )
console.log(article);
  return (
    <div>
     <SpecificArticleDataTable articlesData={article}/>
    </div>
  )
}