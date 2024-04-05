const allStudent = (req,res)=>{
    res.send("All student")
}

const deleteStudent = (req,res)=>{
    console.log(req.params)
    const {id} = req.params
    console.log(id)
    if(id == 10){
        res.send("This is Utkarsh ID 10 so how it can be deleted")
    } else {
        res.send(`Student Deleted ${id}`)
    }  
}

export {allStudent, deleteStudent}  // es6
// module.exports = {allStudent, deleteStudent} // es5