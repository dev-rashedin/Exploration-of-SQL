import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();
app.use(express.json());

app.get("/users", async (_, res) => {
  const users = await prisma.user.findMany({
    where: {
      nationality: {
        in: ["Irish", "German", "Portuguese"],
      },
    },
  });
  res.json(users);
});

app.put("/users", async (_, res) => {
  const updatedUser = await prisma.user.update({
    where: { email: "pedro@example.com" },
    data: {
      age: 35,
      isMarried: true,
    },
  });
  res.json(updatedUser);
});

app.delete("/users", async (_, res) => {
  const deletedUsers = await prisma.user.deleteMany({
    where: { age: { gt: 30 } },
  });
  res.json(deletedUsers);
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
