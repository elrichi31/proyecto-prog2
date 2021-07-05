const express = require('express');
const morgan = require('morgan');
const users = require('./routes/user');
app = express();
require("dotenv").config()

//Middlewares
app.use(express.json())
app.use(morgan('dev'));

//Routes
app.use('/api/users', users);

//Initialization
app.listen(process.env.PORT, () => {
    console.log(`Server on http://localhost:${process.env.PORT}`)
})