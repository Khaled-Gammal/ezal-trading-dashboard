import { GetDataInServerSide } from '@/lib/actions/get-server'
import React from 'react'

async function DepartmentsPage({searchParams}) {
    const departments = await GetDataInServerSide(
        '/dashboard/departments/'
      )
  return (
    <div>page</div>
  )
}

export default DepartmentsPage