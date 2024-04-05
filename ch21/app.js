import express from 'express'
import connectDB from './db/connectdb.js'
const app = express()
const port = process.env.PORT || '3000'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017"
import { deleteDocById, deleteOneDoc, deleteOneDocByAge, deleteManyDoc } from './models/Student.js'

// Database connection
connectDB(DATABASE_URL)

// deleteDocById("65b764e6ab4ee04349be931b")
// deleteOneDoc("65a197e53f4c3e08e9c408f7")
// deleteOneDocByAge(27)
deleteManyDoc(28)

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})