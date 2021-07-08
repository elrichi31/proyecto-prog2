const Appointment = require('../models/Appointments')

class AppointmentsService {
    constructor(){
        this.collection = 'appointments'
    }
    async getAppointments(){
        const appointments = await Appointment.find({}).then(app => {return app}).catch(err => {return err})
        return appointments || []
    }
    async getAppointment(_id){
        const appointment = await Appointment.find({_id}).then(app => {return app}).catch(err => {return err})
        return appointment || {}
    }
    async createAppointment({appointment}){
        const newAppointment = new Appointment(appointment)
        const createAppointmentId = await newAppointment.save().then(app => {return app._id}).catch(err => {return err})
        return createAppointmentId
    }
    async updateAppointment(appointmentId, data){
        const updateAppointmentId = await Appointment.findByIdAndUpdate({_id:appointmentId}, data).then(app => {return app._id}).catch(err => {return err})
        return updateAppointmentId
    }
    async deleteAppointment(appointmentId){
        const deleteAppointmentId = await Appointment.findByIdAndDelete({_id:appointmentId}).then(app => {return app._id}).catch(err => {return err})
        return deleteAppointmentId
    }
}

module.exports = AppointmentsService