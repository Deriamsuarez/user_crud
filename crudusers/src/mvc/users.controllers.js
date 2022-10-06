
const uuid = require('uuid')

const usersDB = [{
    id: '6500fa13-1465-4f3f-8400-9f515984b66b',
    first_name: 'Deriam',
    last_name: 'Suarez',
    email: 'derism@gmail.com',
    password: '12345',
    birthday: '1997/08/16',
    url: `http://127.0.0.1:9000/mvc/6500fa13-1465-4f3f-8400-9f515984b66b`

}, {
    id: '2fd57fdd-5a68-4efe-b751-f72c540c0094',
    first_name: 'saul',
    last_name: 'suarez',
    email: 'saul@gmail.com',
    password: '12345',
    birthday: '2012/06/05',
    url: `http://127.0.0.1:9000/mvc/2fd57fdd-5a68-4efe-b751-f72c540c0094`
}];

const getAllUsers = () => {
    return usersDB
}

const getUserById = (id) => {
    const data = usersDB.find(crud => crud.id === id)
    return data
}

const createUser = (
    first_name,
    last_name, 
    email, 
    password, 
    birthday ) => {

    let uuidGenerate = uuid.v4()

    const newUser = {
        id: uuidGenerate,
        first_name,
        last_name,
        email,
        password,
        birthday,
        url: `http://127.0.0.1:9000/mvc/${uuidGenerate}`
    }
    usersDB.push(newUser)
    return (newUser)
}
module.exports = {
    getAllUsers,
    getUserById,
    createUser
}

