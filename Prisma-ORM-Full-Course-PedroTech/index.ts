import express from "express";
import { PrismaClient } from "@prisma/client";
import { globalErrorHandler, notFoundHandler } from "express-error-toolkit";
import { StatusCodes } from "http-status-toolkit";

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
  res.status(StatusCodes.OK).json(users);
});

app.put("/users", async (_, res) => {
  const updatedUser = await prisma.user.update({
    where: { email: "pedro@example.com" },
    data: {
      age: 35,
      isMarried: true,
    },
  });
  res.status(StatusCodes.CREATED).json(updatedUser);
});

app.delete("/users", async (_, res) => {
  const deletedUsers = await prisma.user.deleteMany({
    where: { age: { gt: 30 } },
  });
  res.status(StatusCodes.OK).json(deletedUsers);
});


app.use(notFoundHandler);
app.use(globalErrorHandler)

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
