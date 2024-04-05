

const homeController = (req,res) => {
   res.render('index', { 'name' : 'Utkarsh' })
}

export { homeController }