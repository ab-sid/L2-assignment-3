import express, { Request, Response } from "express";
import { Book } from "../model/book.model";

export const bookRouter = express.Router();

bookRouter.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

bookRouter.post("/", async (req: Request, res: Response) => {
  const bookBody = req.body;
  const book = await Book.create(bookBody);

  res.status(201).json({
    success: true,
    message: "Book created successfully",
    data: book,
  });
});
