

const {getAllUsers ,getUserById, createUser} = require('./users.controllers')


const getUser = (req,res) =>{
    const data = getAllUsers()
    res.status(200).json({
        pag_initial:"http://127.0.0.1:9000/",
        data})
}

const getOneUser = (req,res)=>{
    const id = req.params.id
    const data = getUserById(id)
    if(data){
        res.status(200).json({
            pageMenuUsers: "http://127.0.0.1:9000/crud",
            data
        })
    }else{
        res.status(404).json({id: id, message: 'Invalid id'})
    }
}

const createNewUser = (req,res) => {
    const {first_name,last_name,email,password,birthday} = req.body

    if (first_name &&  email && password && birthday){
     
        const data = createUser(
            first_name,
            last_name,
            email,
            password,
            birthday
        );
        res.status(201).json(data)
    }
    else{
        res.status(400).json({message: 'Missing Data'})
    }
}

module.exports = {
    getUser,
    getOneUser,
    createNewUser
}