import { join } from 'path'
const homeController = (req,res) => {
   //  res.send('<h1> Home Page </h1>')
  // res.sendFile('a:\\expressjs\\ch9\\views\\index.html')
  console.log(join(process.cwd(), 'views', 'index.html'))
  res.sendFile(join(process.cwd(), 'views', 'index.html'))
}

export { homeController }