// Routing 

// const express = require('express')  // es5
import express from 'express'
const app = express()
const port = process.env.PORT || '3000'

// Routes 

// using function

// app.get('/', function(req,res){
//     res.send('Get method')
// })

// using arrow function

app.get('/',(req,res) =>{
    res.send('Get method using arrow function')
})

// page not found will print when other routes are not defined which u will enter to the browser

// app.all('*', (req,res) => {
//     res.send('Page Not Found')
// })

// 3000/api/anything will print api page

// app.all('/api/*', (req,res) => {
//     res.send('API page')
// })

// all method

// app.get('/sabkuch',(req,res) =>{
//     res.send('All method')
// })

// String Path

// app.get('/about', (req,res) => {
//     res.send('About Page')
// })

// app.get('/contact', (req,res) => {
//     res.send('Contact Page')
// })

// String Pattern

// app.get('/ab?cd', (req,res)=>{
//     res.send('This route path will match acd and abcd')
// })

// Regular  expression path

// app.get(/a/, (req,res) => {
//     res.send('This is a') // it will print if a is found in the path
// })

// One callback

// app.get('/cbexample1', (req,res)=>{
//     res.send('One Callback Example')
// })

// More than One callback

// app.get('/cbexample2', (req,res,next)=>{
//     console.log('First callback')
//     next()
// }, (req,res) => {
//     console.log('Second Callback')
//     res.send('More than One Callback Example')
// })

// An array of callback

// const cb1 = (req,res,next) =>{
//     console.log('First callback')
//     next()
// }
// const cb2 = (req,res,next) =>{
//     console.log('Second callback')
//     next()
// }
// const cb3 = (req,res) =>{
//     console.log('Third callback')
//     res.send('An array of callback Example')
// }
// app.get('/cbexample3', [cb1, cb2, cb3])

// Combination of Independent function and array of functions

// const cb1 = (req,res,next) =>{
//     console.log('First callback')
//     next()
// }
// const cb2 = (req,res,next) =>{
//     console.log('Second callback')
//     next()
// }

// app.get('/cbexample4', [cb1, cb2], (req,res,next)=>{
//     console.log('Third Callback')
//     next()
// }, (req,res)=>{
//     console.log('Fourth callback')
//     res.send('Combination of Independent function and array of functions Example')
// })

// Chained Route Callback

// app.route('/student')
// .get((req,res)=>{
//     res.send('All student')
// })
// .post((req,res)=>{
//     res.send('Add New student')
// })
// .put((req,res)=>{
//     res.send('Update student')
// })

// app.route('/student')
// .all((req,res,next) => {
//     console.log('First run this for all HTTP Method')
//     next()
// })
// .get((req,res)=>{
//     console.log('GET METHOD')
//     res.send('All student')
// })
// .post((req,res)=>{
//     console.log('POST METHOD')
//     res.send('Add New student')
// })
// .put((req,res)=>{
//     console.log('PUT METHOD')
//     res.send('Update student')
// })

// Messy Code

// All Student Routes

// app.get('/student/all', (req,res) => {
//     res.send('All student')
// })
// app.post('/student/create', (req,res) => {
//     res.send('New student created')
// })
// app.put('/student/update', (req,res) => {
//     res.send(' student updated')
// })
// app.delete('/student/delete', (req,res) => {
//     res.send('Student Deleted')
// })

// All teacher routes

// app.get('/teacher/all', (req,res) => {
//     res.send('All teacher')
// })
// app.post('/teacher/create', (req,res) => {
//     res.send('New teacher created')
// })
// app.put('/teacher/update', (req,res) => {
//     res.send(' Teacher updated')
// })
// app.delete('/teacher/delete', (req,res) => {
//     res.send('Teacher Deleted')
// })

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})