import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
  await prisma.user.createMany({
    data: [
      {
        name: "Pedro",
        email: "pedro@example.com",
        age: 28,
        isMarried: false,
        nationality: "Brazilian",
      },
      {
        name: "Caroline",
        email: "caroline@example.com",
        age: 27,
        isMarried: true,
        nationality: "Canadian",
      },
      {
        name: "Liam",
        email: "liam@example.com",
        age: 32,
        isMarried: true,
        nationality: "American",
      },
      {
        name: "Sophia",
        email: "sophia@example.com",
        age: 24,
        isMarried: false,
        nationality: "British",
      },
      {
        name: "Noah",
        email: "noah@example.com",
        age: 30,
        isMarried: true,
        nationality: "Australian",
      },
      {
        name: "Emma",
        email: "emma@example.com",
        age: 26,
        isMarried: false,
        nationality: "German",
      },
      {
        name: "James",
        email: "james@example.com",
        age: 35,
        isMarried: true,
        nationality: "Irish",
      },
      {
        name: "Olivia",
        email: "olivia@example.com",
        age: 29,
        isMarried: false,
        nationality: "Italian",
      },
      {
        name: "Lucas",
        email: "lucas@example.com",
        age: 31,
        isMarried: true,
        nationality: "Portuguese",
      },
      {
        name: "Isabella",
        email: "isabella@example.com",
        age: 22,
        isMarried: false,
        nationality: "Spanish",
      },
    ],
  });
}

seed().then(() => prisma.$disconnect());
