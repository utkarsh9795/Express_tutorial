
import express from 'express'
const router = express.Router()

// All Student routes

router.get('/all', (req,res) => {
    res.send('All student')
})
router.post('/create', (req,res) => {
    res.send('New student created')
})
router.put('/update', (req,res) => {
    res.send(' student updated')
})
router.delete('/delete', (req,res) => {
    res.send('Student Deleted')
})


// module.exports = router // es5
   export default router   // es6