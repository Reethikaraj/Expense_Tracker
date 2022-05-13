import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import categoryRouter from './src/routes/categories_routes.js'
import transactionRouter from './src/routes/transactions_routes.js'

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())

// ErrorHandling for Uncaught exceptions (like undefined eg.console.log(abc))
process.on('uncaughtException', (err) => {
  console.log(`Error: ${err.message}`)
  console.log('Shutting down the server due to UNCAUGHT EXCEPTIONS')
  process.exit(1)
})

// Connecting mongoDB
const uri = process.env.MONGODB_URI
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // serverApi: ServerApiVersion.v1,
  })
  .then(() => {
    console.log('Connection succesful')
    const server = app.listen(process.env.PORT || 5000, () =>
      console.log(`App running on port ${process.env.PORT}`)
    )
  })
  .catch(() => {
    console.log('Connection failed')
  })

// routes
app.use('/api', categoryRouter)
app.use('/api', transactionRouter)
