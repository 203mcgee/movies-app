const express = require('express')
const router = express.Router() 

const pagi = (movieRoutes) => {
    movieRoutes = []


    movieRoutes.forEach( routes => {
        router.use(`/${routes}`,require(`./api/${routes}Routes`))
    })

    return movieRoutes
}

module.exports = {
    pagi,
    router
}