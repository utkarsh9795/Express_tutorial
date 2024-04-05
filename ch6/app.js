
// const stu = require('./routes/student.js') // es5
// const tea = require('./routes/teacher.js') // es5
import express from 'express'
import stu from './routes/student.js'  // es6
import tea from './routes/teacher.js'  // es6
const app = express()
const port = process.env.PORT || '3000'

// load router modules

app.use('/student', stu)
app.use('/teacher', tea)

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})