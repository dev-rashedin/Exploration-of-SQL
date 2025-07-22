# 🧠 Prisma + PostgreSQL Exploration

This repository documents my hands-on journey of learning **Prisma ORM** with **PostgreSQL**. I'm exploring schema design, relationships, query patterns, and real-world use cases.

---

## 📚 Resources I'm Learning From

- [Prisma Official Docs](https://www.prisma.io/docs)
- [Traversy Media: Prisma ORM Crash Course (YouTube)](https://youtu.be/CYH04BJzamo?si=mdCQH64jNb3GkDIt)
- [PostgreSQL Crash Course](https://youtu.be/zw4s3Ey8ayo?si=DkoEZ88GEVG1VFdV)
- [Prisma ORM full Course](https://youtu.be/gimSKEsWYb4?si=Yse6BNCDviLvXb8X)

---

## 🚀 Key Things I've Learned So Far

### Prisma Basics
- How to set up Prisma with PostgreSQL
- Running `prisma migrate` and `prisma generate`
- Writing Prisma schema models with `@relation` fields

### Querying with Prisma Client
- `findUnique`, `findMany`, `create`, `update`, `delete`  
- Filtering and selecting specific fields  
- Nested queries and relational fetching

### PostgreSQL Fundamentals
- Understanding `PRIMARY KEY`, `FOREIGN KEY`, `JOIN`s  
- Querying with `SELECT`, `WHERE`, `ORDER BY`, `LIMIT`
- Creating relational database structure for real-world apps

---

## 📂 Folder Structure

```bash
.
├── prisma/
│   ├── schema.prisma     # Prisma schema definition
│   └── migrations/       # Prisma migration files
├── src/                  # Query experiments and examples
└── README.md
