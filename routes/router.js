const express = require('express')
const router = express.Router()
const axios = require('axios')
//const {pagi} = require('../helpers/shortCut')

router.use(express.static('public'))

router.get('/',(request,response) => {



    response.render('pages/home',{
        title: "Movies App",
        name: "Movies App"
    })

})

router.use('/animation', require('./api/animationRoutes'))
router.use('/classic', require('./api/classicRoutes'))
router.use('/comedy',require('./api/comedyRoutes'))
router.use('/drama',require('./api/dramaRoutes'))
router.use('/horror',require('./api/horrorRoutes'))
router.use('/family',require('./api/familyRoutes'))
router.use('/mystery',require('./api/mysteryRoutes'))
router.use('/western',require('./api/westernRoutes'))

const allRoutes = ['animation','classic','comedy','drama','horror','family','mystery','western']

allRoutes.forEach(endpoint => {
    router.use(`/${endpoint}`, require(`./api/${endpoints}Routes`))

})


// const routes2 = ['animation','classic','comedy','drama','horror','family','mystery','western']
// pagi(routes)






router.use((req,res,next)=>{
    res.status(404)
    .render('pages/error',{
        title: "Error Page not Found",
        name: "Error Page not Found",
    })

})





module.exports = router