import { DataTableDemo } from '@/components/shared/table-data'
import React from 'react'

export default function SpecificArticleDataTable({article}) {
console.log(article);
    const columns = [
        {
        id: 'select',
        header: '',
        className: 'text-center',
        accessorKey: 'select',
        },
        {
        id: 'id',
        header: 'ID',
        accessorKey: 'id',
        className: 'text-left',
        },
        {
        id: 'amount',
        header: 'Amount',
        accessorKey: 'amount',
        },
        {
        id: 'status',
        header: 'Status',
        accessorKey: 'status',
        },
        {
        id: 'email',
        header: 'Email',
        accessorKey: 'email',
        },
        {
        id: 'actions',
        header: 'Actions',
        accessorKey: 'actions',
        className: 'text-center',
        },
    ]
    const articleData = article?.results.map((article) => {
        return {
        id: article.id,
        }
    }
    )
  return (
    <div>
        <DataTableDemo
    data={articleData}
    columns={columns}
    isPending={false}
  /></div>
  )
}
