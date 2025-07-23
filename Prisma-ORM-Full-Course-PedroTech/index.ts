import express from "express";
import { PrismaClient } from "@prisma/client";
import { globalErrorHandler, notFoundHandler } from "express-error-toolkit";
import { StatusCodes } from "http-status-toolkit";

const app = express();
app.use(express.json());


app.get('/', (_req, res) => {
  res.status(StatusCodes.OK).send('Hello World!')
});

app.use(notFoundHandler);
app.use(globalErrorHandler)

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
