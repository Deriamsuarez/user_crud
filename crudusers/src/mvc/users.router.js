
const router = require('express').Router()

const usersServices = require ('./users.services')

router.get('/mvc', usersServices.getUser)

router.get('/mvc/:id', usersServices.getOneUser)

router.post('/mvc', usersServices.createNewUser)

module.exports = router