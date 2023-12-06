"use client"

import { Func, columns } from "./columns"
import { DataTable } from "./data-table"
import { PrismaClient } from "@prisma/client"

export default async function tabletest() {
  const prisma = new PrismaClient()

  async function getData(): Promise<Func[]> {
    const funcs = await prisma.synFunc.findMany()
    return funcs.map((item) => ({
      id: item.id,
      title: item.Title,
      originalNumber: item.OriginalNumber,
      parentNodeString: item.ParentNodeString,
      GroupingID: item.GroupingID,
    }))
  }
  
  const data = await getData()
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <DataTable columns={columns} data={data} />
    </section>
  )
}
