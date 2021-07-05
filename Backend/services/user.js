const mongoLib = require("../lib/mongo")

class UsersService {
    constructor(){
        this.collection = "users"
        this.mongoDB = new mongoLib()
    }
    async getUsers(){
        const users = await this.mongoDB.getAll(this.collection)
        return users || []
    }
    async getUser(id){
        const user = await this.mongoDB.get(this.collection, id)
        return user || {}
    }
    async createUser({user}){
        const createUserId = await this.mongoDB.create(this.collection, user)
        return createUserId
    }
    async updateUser(userId, data){
        const updateUserId = await this.mongoDB.update(this.collection, userId, data)
        return updateUserId
    }
    async deleteUser(userId){
        const deleteUserId = await this.mongoDB.delete(this.collection, userId)
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