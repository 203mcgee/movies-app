const express = require('express')
const router = express.Router()
const axios = require('axios')
const PORT = process.env.PORT || 3000
const {pagination2,meme} = require('../../helpers/pagination')

//localhost:3000/animation
router.get('/',(req,res) => {

    const url = 'https://api.sampleapis.com/movies/animation'
    const pageData = pagination2(req)

    
    axios.get(url)
    .then(resp => {
            const appInfo = resp.data
            const paginatedData = appInfo.slice(pageData.start, pageData.end)
            res.render('pages/allMovies',{
                title: "Animation Movies",
                name: "Animation Movies",
                data: paginatedData,
                img:meme()
            })
        })
})

//localhost:3000/

router.get('/:id',(req,res) => {
    const id = req.params.id
    const url = `https://api.sampleapis.com/movies/animation/${id}`

    axios(url)
        .then(resp =>{
            res.render('pages/movie',{
                title: "Animation Movies",
                name: "Animation Movies",
                data: resp.data,
                img: resp.posterURL
            })
        })
})

module.exports = router
