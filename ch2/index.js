// set up babel with express js

const express = require('express')
// import express from 'express'    // when we use es6
const app = express();
const port = 3000

app.get('/', (req,res) => {
    res.send('Hello Geeky Shows')
})

app.listen(port, ()=> {
    console.log(`Example app listening at http://localhost:${port}`)
})
