// All teacher routes

import express from 'express'
const router = express.Router()

router.get('/all', (req,res) => {
    res.send('All teacher')
})
router.post('/create', (req,res) => {
    res.send('New teacher created')
})
router.put('/update', (req,res) => {
    res.send(' Teacher updated')
})
router.delete('/delete', (req,res) => {
    res.send('Teacher Deleted')
})

export default router   // es6