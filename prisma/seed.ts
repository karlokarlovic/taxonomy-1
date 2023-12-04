// prisma/seed.js
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
    // Creating parent and child objects
    const parent = await prisma.synFunc.create({
        data: {
            Parent: 'Parent Title',
            Child: 'parent-link',
            Grandchild: 'Parent Title',
            Greatgrandchild: 'parent-link',
            Greatgreatgrandchild: 'Parent Title',
            Greatgreatgreatgrandchild: 'parent-link',
            Title: 'Parent Title',
            Link: 'parent-link',
            LongDescription: 'parent-link',
            SummaryDescription: 'parent-link',
            KingText: 'parent-link',
            // KingLinkParent: '',
            // KingLinkChild: 'parent-link',
            OriginalNumber: 'parent-link',
            // other fields...
        },
    });

    const child = await prisma.synFunc.create({
        data: {
            Parent: 'child Title',
            Child: 'child-link',
            Grandchild: 'child Title',
            Greatgrandchild: 'child-link',
            Greatgreatgrandchild: 'child Title',
            Greatgreatgreatgrandchild: 'child-link',
            Title: 'child Title',
            Link: 'child-link',
            LongDescription: 'child-link',
            SummaryDescription: 'child-link',
            KingText: 'child-link',
            // KingLinkParent: '',
            // KingLinkChild: 'parent-link',
            OriginalNumber: 'child-link',
            // other fields...
        },
    });

    // Linking child to parent
    await prisma.synFunc.update({
        where: { id: child.id },
        data: {
            KingLinkParent: {
                connect: { id: parent.id },
            },
        },
    });

    // Optionally, linking parent to child (if needed)
    await prisma.synFunc.update({
        where: { id: parent.id },
        data: {
            KingLinkChild: {
                connect: { id: child.id },
            },
        },
    });

    // Continue creating and linking other objects as needed
    // ...

    console.log('Seeding finished.');
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
