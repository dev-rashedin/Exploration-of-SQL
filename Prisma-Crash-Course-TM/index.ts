import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


async function main() {
  // create a user
  const user = await prisma.user.create({
    data: {
      name: 'Rashedin Islam',
      email: 'rashedinislam.06@gmail',
      
    }
  })

  console.log(user)
  
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e: Error) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })