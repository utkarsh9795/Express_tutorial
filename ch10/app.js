import express from 'express'
import {join} from 'path'
const app = express()
const port = process.env.PORT || '3000'
import web from './routes/web.js'

// Static files

console.log(join(process.cwd(), 'public')) // to print the path
app.use(express.static(join(process.cwd(), 'public'))) // to acess all css,js,images folders
// app.use('/static',express.static(join(process.cwd(), 'public'))) // virtual path
// app.use('/css',express.static(join(process.cwd(), 'public/css'))) // to use only css file
// app.use('/js',express.static(join(process.cwd(), 'public/js'))) // to use only js 
// app.use('/photo',express.static(join(process.cwd(), 'public/images')))  / to use only images

// dot files

// const options = {
//     dotfiles: "allow",
//     etag: false,
//     extensions: ['htm', 'html'],
//     index : false,
//     maxAge: 'id',
//     redirect: false,
//     setHeaders: function (res, path, stat) {
//         res.set('x-timestamp', Date.now())
//     }
// }

// app.use(express.static(join(process.cwd(), 'public'), options))

// Load Routes
app.use('/', web)

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})