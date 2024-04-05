import { join } from 'path'
const aboutController = (req,res) => {
   //  res.send('About Page')
  // res.sendFile('a:\\expressjs\\ch9\\views\\about.html')
    console.log(join(process.cwd(), 'views', 'about.html'))
  res.sendFile(join(process.cwd(), 'views', 'about.html'))
}

export { aboutController }