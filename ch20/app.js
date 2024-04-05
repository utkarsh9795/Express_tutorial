import express from 'express'
import connectDB from './db/connectdb.js'
const app = express()
const port = process.env.PORT || '3000'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017"
import { updateDocById, updateOneDoc, updateOneDocByAge, updateManyDoc } from './models/Student.js'

// Database connection
connectDB(DATABASE_URL)

// updateDocById("65a791e53f4c3e08e9c408f7")
// updateOneDoc("65a791e53f4c3e08e9c408f7")
// updateOneDocByAge(27)
updateManyDoc(100)

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})