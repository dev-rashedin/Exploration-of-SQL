import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
  await prisma.user.createMany({
    data: [
      { name: 'Pedro', email: 'pedro@pedro' },
      { name: 'Rashedin', email: 'rashedin@rashedin' }
    ]
  })
}


seed().then( () => prisma.$disconnect())
