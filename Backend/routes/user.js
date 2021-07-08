const userRoute = require('express').Router()
const UsersService = require('../services/user')

const UsersServices = new UsersService()
userRoute.get('/', async (req, res, next) => {
    try{
        const users = await UsersServices.getUsers()
        res.status(200).json({
            data: users,
            msg: "users listed"
        })
    } catch(err){
        next(err)
    }
})

userRoute.get('/:userId', async (req, res, next) => {
    const {userId} = req.params
    try{
        const user = await UsersServices.getUser(userId)
        res.status(200).json({
            data: user,
            msg: "user received"
        })
    } catch(err){
        next(err)
    }
})
userRoute.post('/', async (req, res, next) => {
    const {body: user} = req
    try{
        const createUserId = await UsersServices.createUser({user})
        res.status(201).json({
            data: createUserId,
            msg: "User created",
        })
    } catch(err){
        next(err)
    }
})

userRoute.put('/:userId', async (req, res, next) => {
    const {userId} = req.params
    const {body: user} = req
    try{
        const updateUserId = await UsersServices.updateUser(userId, user)
        res.status(200).json({
            data: updateUserId,
            msg: "user updated"
        })
    } catch(err){
        next(err)
    }
})

userRoute.delete('/:userId', async (req, res, next) =>{
    const {userId} = req.params
    const deleteUserId = await UsersServices.deleteUser(userId)
    try{
        res.status(200).json({
            data: deleteUserId,
            msg: "user deleted"
        })
    } catch(err){
        next(err)
    }
})

module.exports = userRoute