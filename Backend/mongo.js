const mongoose = require('mongoose')
require("dotenv").config()
const USER = process.env.DB_USER
const PASSWORD = process.env.DB_PASSWORD
const DB_HOST = process.env.DB_HOST
const DB_NAME = process.env.DB_NAME
const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`

mongoose.connect(MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndexes: true
}).then(() =>{
    console.log("Connected to mongodb :)")
}).catch((err) =>{
    console.log(err)
})
// User.find({}).then(res => {
//     console.log(res)
//     mongoose.connection.close()
// })

// const user = new User(
//     {
//         "name": "Diego",
//         "surname": "Fernandez",
//         "email": "diegofernandez@gmail.com",
//         "age": 33,
//         "passportCI": "1712345678", 
//         "cellphone": "0994567890",
//         "citizenship": "Argentina",
//         "civilState": "casado",
//         "profession": "Broker",
//         "address": "Ambato",
//         "address2": "dep 10f" 
//     }
// )

// user.save()
//     .then(res => {
//         console.log(res) 
//         mongoose.connection.close()
//     }).catch(err => {console.log(err)})
 