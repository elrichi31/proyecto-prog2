//const mongoLib = require("../lib/mongo")
const mongoose = require('mongoose')
const User = require('../models/User')
class UsersService {
    constructor(){
        this.collection = "users"
        //this.mongoDB = new mongoLib()
    }
    async getUsers(){
        const users = await User.find({}).then(user => {return user}).catch(err => {return err})
        return users || []
    }
    async getUser(_id){
        const user = await User.find({_id}).then(user => {return user}).catch(err => {return err})
        return user || {}
    }
    async createUser({user}){
        const newUser = new User(user)
        const createUserId = await newUser.save().then(user => {return user._id}).catch(err => {return err})
        return createUserId
    }
    async updateUser(userId, data){
        const updateUserId = await User.findByIdAndUpdate({_id:userId}, data)
        return updateUserId
    }
    async deleteUser(userId){
        const deleteUserId = await User.findByIdAndDelete({_id:userId}).then(user => {return user._id}).catch(err => {return err})
        return deleteUserId
    }
    async validateUser({user}){
        const queryUser = await this.mongoDB.getUser({email: user.email})
        if(queryUser){
            return false
        } else {
            return true
        }
    }
}

module.exports = UsersService