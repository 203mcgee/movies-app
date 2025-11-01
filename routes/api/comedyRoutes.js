const express = require('express')
const router = express.Router()
const axios = require('axios')
const {pagination2,meme} = require('../../helpers/pagination')

router.get('/',(req,res)=>{
    const url = 'https://api.sampleapis.com/movies/comedy'

    const pageData = pagination2(req)
    axios.get(url)
        .then(resp =>{
            const appInfo = resp.data
            const paginatedData = appInfo.slice(pageData.start, pageData.end)
            res.render('pages/allMovies',{
                title: "Comedy Movies",
                name: "Comedy Movies",
                data: paginatedData,
                img:meme()
            })
        })
})

router.get('/:id', (req,res)=>{
    const id = req.params.id
    const url = `https://api.sampleapis.com/movies/comedy/${id}`

    axios.get(url)
        .then(resp => {
            res.render('pages/movie',{
                title: "Comedy Movies",
                name: "Comedy Movies",
                data: resp.data
            })
        })
})

module.exports = router