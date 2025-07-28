import { model, Schema } from "mongoose";
import { IBook } from "../interfaces/book.interface";

const bookSchema = new Schema<IBook>({
    title:{type: String,required: [true,'title field is required'],trim:true},
    author:{type: String,required: [true,'author field is required'],trim:true},
    genre:{
        type: String,
        enum: ['FICTION', 'NON_FICTION', 'SCIENCE', 'HISTORY', 'BIOGRAPHY', 'FANTASY'],
        required: [true,'genre field is required']
    },
    isbn:{type: String,required: [true,'isbn field is required'],unique: true},
    description:{type: String,trim:true},
    copies:{type: Number,required: [true,'copies field is required'],min: [0,'Copies must be a positive number']},
    available:{type: Boolean,default: true}
},
{
    timestamps: true,
    versionKey: false
}
)

// Instance method
bookSchema.methods.updateAvailability = function () {
  this.available = this.copies > 0;
};

export const Book = model<IBook>('Book',bookSchema)
