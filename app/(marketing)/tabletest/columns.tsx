"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Func = {
    id: string | null
    title: string | null
    originalNumber: string | null
    parentNodeString: string | null
    GroupingID: string | null
}

export const columns: ColumnDef<Func>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "originalNumber",
    header: "originalNumber",
  },
  {
    accessorKey: "parentNodeString",
    header: "parentNodeString",
  },
  {
    accessorKey: "GroupingID",
    header: "GroupingID",
  },
]
