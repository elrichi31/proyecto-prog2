const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    age: Number,
    passportCI: String,
    cellphone: String,
    citizenship: String,
    civilState: String,
    profession: String,
    address: String,
    address2: String,
    birthDate: Date,
    registryDate: Date,
    homephone: String,
    role: String,
    sonrisa: String,
    type: String,
    problem: String,
    prolapso_f: String,
    prolapso_g: String,
    prolapso_r: String,
    pi: String,
    encias: String,
    dolor: String,
    company: String,
    companyphone: String,
    history: {}
})
userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        delete returnedObject.__v
    }
})
const User = mongoose.model('User', userSchema)

module.exports = User