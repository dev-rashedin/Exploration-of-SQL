import express from "express";
import { PrismaClient } from "@prisma/client";
import { globalErrorHandler, notFoundHandler } from "express-error-toolkit";
import { StatusCodes } from "http-status-toolkit";

const app = express();
const prisma = new PrismaClient();
app.use(express.json());


app.get('/', (_req, res) => {
  res.status(StatusCodes.OK).send('Hello World!')
});

app.get('/users', async (_req, res) => {
  const users = await prisma.user.findMany({
    where: {
      OR: {
        Nationality: 'Egyptian',
      },
    },
  });
  res.status(StatusCodes.OK).json({
    success: true,
    message: 'Users fetched successfully',
    data: users
  })
})


app.use(notFoundHandler);
app.use(globalErrorHandler)

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
