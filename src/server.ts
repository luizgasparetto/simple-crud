import "reflect-metadata"
import express, { NextFunction, Request, Response } from 'express';
import "express-async-errors";

import createConnection from "./database/index"
import { routes } from "./routes";
import { AppError } from "./errors/AppError"

createConnection()
const app = express();
app.use(express.json())

app.use(routes)

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message,
    })
  }

  return response.status(500).json({
    statusError: "error",
    message: `Internal server error - ${err.message}`,
  })
})

app.listen(3000, () => console.log("running server..."))