import express from 'express'
const app = express()
const port = process.env.PORT || '3000'
import web from './routes/web.js'
import underConstruction from './middlewares/uc-middleware.js'

// Application level middleware
// app.use(underConstruction)
// app.use('/about', underConstruction) // it will show only in about page

// Set template engine
app.set('view engine', 'ejs')

// Load routes
app.use('/', web)

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})