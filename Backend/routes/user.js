const userRoute = require('express').Router()

userRoute.get('/', (req, res) => {
    res.send({mgs: "Hello world"})
})

userRoute.post('/createUser', async (req, res, next) => {
    const {body: user} = req
    const
})

module.exports = userRoute