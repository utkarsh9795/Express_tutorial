// first expressjs application using es5 method

// const express = require('express') // es5 syntax
import express from 'express'        // es6 syntax
const app = express();
const port = process.env.PORT || '3000'

// without using arrow function
// app.get('/', function(req,res) {
//     res.send('Hello World !')
// })

// using arrow function
app.get('/', (req,res) => {
    res.send('Hello Programmers !')
})

app.listen(port, ()=>{
    console.log(`Server listening at http://localhost:${port}`)
})