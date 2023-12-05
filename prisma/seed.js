// prisma/seed.js
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

import {data_pop} from './data.js'

console.log(">>>>>>Starting Seeding process...")
async function main() {
  // Deleting rows in table
  console.log(">>Deleting table content...")
  await prisma.synFunc.deleteMany({})
  console.log(">>Deleted table content.")

  // Creating parent and child objects
  console.log(">>>Seeding...")
  await prisma.synFunc.createMany({
    data: data_pop,
    skipDuplicates: true,
  })

  for (const item in data_pop) {
    var parent = data_pop[item].ParentNodeString
    var child = data_pop[item].OriginalNumber
    console.log("(child)", child, " \t-> ", parent, "(parent)")
    //find the id of child
    var childNode = await prisma.synFunc.findFirst({
      where: {
        OriginalNumber: child,
      },
    })
    var parentNode = await prisma.synFunc.findFirst({
      where: {
        OriginalNumber: parent,
      },
    })

    console.log("child", childNode.id, " --> parent", parentNode.id)
    await prisma.synFunc.update({
      where: { id: childNode.id },
      data: {
        ParentNode: {
          connect: { id: parentNode.id },
        },
      },
    })
  }

  console.log(">>>>>>Seeding finished.")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
