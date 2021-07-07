const mongoLib = require("../lib/mongo")

class AppointmentsService {
    constructor(){
        this.collection = 'appointments'
        this.mongoDB = new mongoLib()
    }
    async getAppointments(){
        const appointments = await this.mongoDB.getAll(this.collection)
        return appointments || []
    }
    async getAppointment(id){
        const appointment = await this.mongoDB.get(this.collection, id)
        return appointment || {}
    }
    async createAppointment({user}){
        
    }
}