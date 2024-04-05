// Topic Router Parameter

import express from 'express'
const app = express()
const port = process.env.PORT || '3000'

// app.get('/student/delete/:id', (req,res) => {
//     console.log(req.params)
//     res.send(`Student Deleted ${req.params.id}`)
// })

app.get('/product/:category/:id', (req,res) => {
    console.log(req.params)

    // method 1
    res.send(`Product Category: ${req.params.category} and Product ID: ${req.params.id}`)

   // method 2
    // const {category, id} = req.params
    // res.send(`Product Category: ${category} and Product ID: ${id}`) 
})

// app.get('/product/order/:year/and/:month', (req,res)  => {
//     console.log(req.params)
//     const {year, month} = req.params
//     res.send(`Year: ${year} and Month: ${month}`)
// })

// app.get('/train/:from-:to', (req,res) => {
//     console.log(req.params)
//     const {from, to} = req.params
//     res.send(`Travelling From: ${from} to: ${to}`)
// })

// app.get('/location/:state.:city', (req,res)=>{
//     console.log(req.params)
//     const {state, city} = req.params
//     res.send(`State: ${state} City: ${city}`)
// })

// WITH REGX(Regular Expression)

// app.get('/student/:id([0-9]{2})', (req,res) => {
//     console.log(req.params)
//     res.send(`Student Deleted ${req.params.id}`)
// })

// app.get('/:type(post|article)/:id', (req,res) => {
//     console.log(req.params)
//     res.send('Post  or Article')
// })

// app.param() function

// app.param('id', (req,res,next,id) => {
//     console.log(`Called only Once ID: ${id}`)
//     next()
// })
// app.get('/user/:id', (req,res,next) => {
//     console.log("This is User Id Path 1")
//     next()
// })
// app.get('/user/:id', (req,res) => {
//     console.log("This is User Id Path 2")
//     res.send('Response Ok')
// })

// app.param() - Array of Route Parameter

// app.param(['id','page'], (req,res,next,value) => {
//     console.log(`Called only Once ${value}`)
//     next()
// })
// app.get('/user/:id/:page', (req,res,next) => {
//     console.log("This is User Id Path 1")
//     next()
// })
// app.get('/user/:id/:page', (req,res) => {
//     console.log("This is User Id Path 2")
//     res.send('Response Ok')
// })

// Querry String

// app.get('/product', (req,res) => {
//     console.log(req.query)
//     const {category, id} = req.query
//     res.send(`Response ok ${category} and ${id}`)
// }) 

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})