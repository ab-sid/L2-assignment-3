import express, { Application, Request, Response } from 'express'
import { bookRouter } from './app/controller/book.controller'
import { borrowRouter } from './app/controller/borrow.controller'
import { errorHandler } from './app/middleware/errorHandler'

const app:Application = express()

app.use(express.json())

app.use('/api/books', bookRouter)
app.use('/api/borrow', borrowRouter)


app.get('/', (req:Request, res:Response) => {
  res.json({message:'Welcome to Library Management System!'})
})
app.use(errorHandler);


export default app;
