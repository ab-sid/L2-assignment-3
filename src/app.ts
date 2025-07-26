import express, { Application, Request, Response } from 'express'
import { bookRouter } from './app/controller/book.controller'
import { borrowRouter } from './app/controller/borrow.controller'
const app:Application = express()

app.use(express.json())
app.use('/api/books', bookRouter)
app.use('/api/borrow', borrowRouter)

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

export default app;
