const appointmentsRoute = require('express').Router()
const AppointmentsService = require('../services/appointment')
const AppointmentsServices = new AppointmentsService()
appointmentsRoute.get('/', async (req, res, next) => {
    try{
        const appointments = await AppointmentsServices.getAppointments()
        res.status(200).json({
            data: appointments,
            msg: "appointments listed"
        })
    } catch(err){
        next(err)
    }
})

appointmentsRoute.get('/:appointmentId', async (req, res, next) => {
    const {appointmentId} = req.params
    try{
        const appointment = await AppointmentsServices.getAppointment(appointmentId)
        res.status(200).json({
            data: appointment,
            msg: "appointment received"
        })
    } catch(err){
        next(err)
    }
})

appointmentsRoute.post('/', async (req, res, next) => {
    const {body: appointment} = req
    try{
        const createAppointmentId = await AppointmentsServices.createAppointment({appointment})
        res.status(200).json({
            data: createAppointmentId,
            msg: "appointments created"
        })
    } catch(err){
        next(err)
    }
})
appointmentsRoute.put('/:appointmentId', async (req, res, next) => {
    const {appointmentId} = req.params
    const {body: appointment} = req
    try{
        const updateUserId = await AppointmentsServices.updateAppointment(appointmentId, appointment)
        res.status(200).json({
            data: updateUserId,
            msg: "appointment updated"
        })
    } catch(err){
        next(err)
    }
})

appointmentsRoute.delete('/:appointmentId', async (req, res, next) =>{
    const {appointmentId} = req.params
    const deleteAppointmentId = await AppointmentsServices.deleteAppointment(appointmentId)
    try{
        res.status(200).json({
            data: deleteAppointmentId,
            msg: "appointment deleted"
        })
    } catch(err){
        next(err)
    }
})

module.exports = appointmentsRoute