const mongoLib = require("../lib/mongo")

class UsersService {
    constructor(){
        this.collection = "users"
        this.mongoDB = new mongoLib()
    }
    async getUser({email}){
        const [user] = await this.mongoDB.getAll(this.collection, {email})
        return user
    }
    async createUser({user}){
        const {firstName, lastName, email, age, ci, telephone} = user
        const createUserId = await this.mongoDB.create(this.collection,{
            firstName,
            lastName,
            email,
            age,
            ci, 
            telephone
        })
        return createUserId
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