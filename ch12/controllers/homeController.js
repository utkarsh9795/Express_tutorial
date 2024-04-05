const homeController = (req,res) => {
    const data = {
        'name': 'Utkarsh Anand',
        'id': 12,
        'marks': [40,60,80,70,20]
    } 
    res.render('index', data)
}

export { homeController }