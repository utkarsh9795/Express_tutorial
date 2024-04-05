import express from 'express'
import connectDB from './db/connectdb.js'
import { createDoc, createMultiDoc } from './models/Student.js'  
const app = express()
const port = process.env.PORT || '3000'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017"

// Database connection
connectDB(DATABASE_URL)

// Create and save the document
 createDoc()
//   createDoc('Shikhar', 25, 8888.88, ['gaming', 'dancing'], false, [{value: 'This is bad'}]) // parameters passing to create a document
// createMultiDoc()

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})