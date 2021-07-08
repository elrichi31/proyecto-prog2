const express = require('express');
const morgan = require('morgan');
const users = require('./routes/user');
const appointments = require('./routes/appointments')
const cors = require('cors');

require('./mongo.js')
app = express();
require("dotenv").config()

//Middlewares
app.use(express.json())
app.use(morgan('dev'));
app.use(cors({
    origin: "http://localhost:3000"
}))

//Routes
app.use('/api/users', users);
app.use('/api/appointments', appointments);

//Initialization
app.listen(process.env.PORT, () => {
    console.log(`Server on http://localhost:${process.env.PORT}`)
})