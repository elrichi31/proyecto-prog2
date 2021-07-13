const mongoose = require('mongoose')

const appointmentsSchema = mongoose.Schema({
    name: String,
    surname: String,
    cellphone: String,
    appointmentDate: Date,
    email: String,
    reason: String,
    userId: String,
    payment: Boolean,
})
appointmentsSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        delete returnedObject.__v
    }
})
const Appointment = mongoose.model('Appointment', appointmentsSchema)

module.exports = Appointment