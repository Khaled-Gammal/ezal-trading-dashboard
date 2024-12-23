import DepartmentsDataTable from '@/data/departments/departments-DataTable'
import { GetDataInServerSide } from '@/lib/actions/get-server'
import React from 'react'

async function DepartmentsPage({searchParams}) {
    const departments = await GetDataInServerSide(
        '/dashboard/departments/'
      )
  return (
    <div>
        <DepartmentsDataTable departments={departments}/>
    </div>
  )
}

export default DepartmentsPage