import { ErrorRequestHandler } from 'express';
import { Error as MongooseError } from 'mongoose';

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => { 
  if (err instanceof MongooseError.ValidationError) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      error: {
        name: err.name,
        errors: err.errors,
      },
    });
  }
};
