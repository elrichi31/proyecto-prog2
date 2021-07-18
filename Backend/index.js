const express = require('express');
const morgan = require('morgan');
const users = require('./routes/user');
const download = require('./routes/download')
const appointments = require('./routes/appointments')
const cors = require('cors');
const helmet = require('helmet')

require('./mongo.js')
app = express();
require("dotenv").config()

//Middlewares
app.use(express.json())
app.use(helmet())
app.use(helmet.permittedCrossDomainPolicies())
app.use(cors({
    origin: "*",
}))

//Routes
app.use('/api/users', users);
app.use('/api/appointments', appointments);
app.use('/api/download', download)

//Initialization
app.listen(process.env.PORT, () => {
    console.log(`Server on http://localhost:${process.env.PORT}`)
})