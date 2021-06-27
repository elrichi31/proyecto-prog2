const express = require('express');
const morgan = require('morgan');
const users = require('./routes/user');
app = express();

//Middlewares
app.use(express.json())
app.use(morgan('dev'));

//Routes
app.use('/api/users', users);

//Initialization
app.listen("3000", () => {
    console.log('Server on http://localhost:3000')
})