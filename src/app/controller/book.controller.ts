import express, { Request, Response } from "express";
import { Book } from "../model/book.model";

export const bookRouter = express.Router();

bookRouter.get("/", async (req: Request, res: Response) => {
  const { filter, sortBy = "createdAt", sort = "desc", limit = 10 } = req.query;
  const query: any = {};
  if (filter) {
    query.genre = filter;
  }
  const books = await Book.find(query)
      .sort({ [sortBy as string]: sort === 'asc' ? 1 : -1 })
      .limit(Number(limit));
  res.status(200).json({
    success: true,
    message: "Books retrieved successfully",
    data: books,
  });
});

bookRouter.get("/:bookId", async (req: Request, res: Response) => {
  const book = await Book.findById(req.params.bookId);
  res.status(200).json({
    success: true,
    message: "Books retrieved successfully",
    data: book,
  });
});

bookRouter.post("/", async (req: Request, res: Response) => {
  const book = await Book.create(req.body);
  res.status(201).json({
    success: true,
    message: "Book created successfully",
    data: book,
  });
});

bookRouter.put("/:bookId", async (req: Request, res: Response) => {
  const book = await Book.findByIdAndUpdate(req.params.bookId, req.body, {
    new: true,
  });
  res.status(200).json({
    success: true,
    message: "Books updated successfully",
    data: book,
  });
});

bookRouter.delete("/:bookId", async (req: Request, res: Response) => {
  const book = await Book.findByIdAndDelete(req.params.bookId);
  res.status(200).json({
    success: true,
    message: "Books deleted successfully",
    data: null,
  });
});
