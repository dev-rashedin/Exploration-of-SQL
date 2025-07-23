import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
  await prisma.user.createMany({
    data: [
      {
        name: 'Alice Johnson',
        email: 'alice@example.com',
        age: 28,
        isMarried: false,
        Nationality: 'American',
      },
      {
        name: 'Carlos Mendez',
        email: 'carlos@example.com',
        age: 35,
        isMarried: true,
        Nationality: 'Mexican',
      },
      {
        name: 'Mei Ling',
        email: 'mei@example.com',
        age: 24,
        isMarried: false,
        Nationality: 'Chinese',
      },
      {
        name: 'Ahmed Hassan',
        email: 'ahmed@example.com',
        age: 42,
        isMarried: true,
        Nationality: 'Egyptian',
      },
      {
        name: 'Emma Smith',
        email: 'emma@example.com',
        age: 30,
        isMarried: false,
        Nationality: 'Canadian',
      },
    ],
  });
}


seed().then( () => prisma.$disconnect())
