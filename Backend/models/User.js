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
})
userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        delete returnedObject.__v
    }
})
const User = mongoose.model('User', userSchema)

module.exports = User