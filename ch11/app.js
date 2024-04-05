import express from 'express'
import { join } from 'path'
const app = express()
const port = process.env.PORT || '3000'
import web from './routes/web.js'

// Setup the directory where template files are located

//app.set('views', './views') // this is not necessary when template ejs file is already present in the views as it will take default and if name is different froom views then u have to meention the file name 

// app.set('views', './myviews') // if our template file is present in the myviews folder

// set up template engine to use
app.set('view engine', 'ejs')

// static files
app.use(express.static(join(process.cwd(), 'public')))

// Load routes
app.use('/', web)

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})