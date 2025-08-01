import { model, Schema } from "mongoose";
import { IBorrow } from "../interfaces/borrow.interface";
import { Book } from "./book.model";

const borrowSchema = new Schema<IBorrow>(
  {
    book: {
      type: Schema.Types.ObjectId,
      ref: "Book",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
    dueDate: {
      type: Date,
      required: true, 
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

borrowSchema.pre('save', async function (next) {
  const borrow = this as any;
  const book = await Book.findById(borrow.book);

  if (!book) {
    throw new Error('Book not found');
  }

  if (book.copies < borrow.quantity) {
    throw new Error(`Only ${book.copies} copies available`);
  }

  next();
});

export const Borrow = model<IBorrow>("Borrow",borrowSchema)
