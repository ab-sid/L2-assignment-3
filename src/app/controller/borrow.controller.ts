import express, { Request, Response } from "express";
import { Book } from "../model/book.model";
import { Borrow } from "../model/borrow.model";

export const borrowRouter = express.Router();

borrowRouter.get("/", async (req: Request, res: Response) => {
  try {
    const summary = await Borrow.aggregate([
      {
        $group: {
          _id: "$book",
          totalQuantity: { $sum: "$quantity" },
        },
      },
      {
        $lookup: {
          from: "books",
          localField: "_id",
          foreignField: "_id",
          as: "book",
        },
      },
      { $unwind: "$book" },
      {
        $project: {
          _id: 0,
          totalQuantity: 1,
          book: {
            title: "$book.title",
            isbn: "$book.isbn",
          },
        },
      },
    ]);

    res.status(200).json({
      success: true,
      message: "Borrowed books summary retrieved successfully",
      data: summary,
    });
  } catch (error) {
    console.log(error);
  }
});

borrowRouter.post("/", async (req: Request, res: Response) => {
  console.log(req.body);
  const book = await Book.findById(req.body.book);
  if (!book) throw new Error("Book not found");
  if (book.copies < req.body.quantity)
    throw new Error("Not enough copies available");
  book.copies -= req.body.quantity;
  book.updateAvailability();
  console.log(book.available);
  await book.save();
  const borrow = await Borrow.create(req.body);

  res.status(201).json({
    success: true,
    message: "Book borrowed successfully",
    data: borrow,
  });
});
