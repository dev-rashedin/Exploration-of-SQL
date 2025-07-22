import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


async function main() {
  // create a user
  // const user = await prisma.user.create({
  //   data: {
  //     name: 'Rashedin Islam',
  //     email: 'rashedinislam.06@gmail',
      
  //   }
  // })

  // get all users
  const users = await prisma.user.findMany({
    include: {
      articles: true
    }
  });


  // create article and associated it with user
  // const article = await prisma.article.create({
  //   data: {
  //     title: 'My First Article',
  //     body: 'This is my first article. I hope you like it.',
  //     author: {
  //       connect: {
  //         id: 1
  //       }
  //     }
  //   }
  // })

  // get all articles
  // const articles = await prisma.article.findMany()


  // create user and article and associate them
  // const user = await prisma.user.create({
  //   data: {
  //     name: 'Arjuman Rashedin',
  //     email: 'arjuman@rashedin.com',
  //     articles: {
  //       create: {
  //         title: 'My First Article',
  //         body: 'This is my first article. I hope you like it.',
  //       }
  //     }
  //   }
  // })

  // create another article
  // const article = await prisma.article.create({
  //   data: {
  //     title: 'My Second Article',
  //     body: 'This is my second article. I hope you like it.',
  //     author: {
  //       connect: {
  //         id: 2
  //       }
  //     }
  //   }
  // })

  // loop over Saras articles
  users.forEach(user => {
    users.forEach(user => {
      console.log(`User: ${user.name}, Email: ${user.email}`)
      console.log('Articles:');
      user.articles.forEach(article => {
        console.log(`- Title: ${article.title}, Body: ${article.body}`)     
      })
      console.log('\n')
      
      
    })
  })
      

  // console.log(user)
  // console.log(users)
  // console.log(article)
  
// console.log(articles)
  
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