const express = require('express')
const router = express.Router()
const axios = require('axios')
const {organizeMovies,meme} = require('../../helpers/pagination')

router.get('/',(req,res)=>{
    const url = 'https://api.sampleapis.com/movies/family'

    axios.get(url)
        .then(resp =>{
            res.render('pages/allMovies',{
                title: "Family Movies",
                name: "Family Movies",
                data: resp.data,
                img:meme()
            })
        })
})

router.get('/:id', (req,res)=>{
    const id = req.params.id
    const url = `https://api.sampleapis.com/movies/family/${id}`

    axios.get(url)
        .then(resp => {
            res.render('pages/movie',{
                title: "Family Movies",
                name: "Family Movies",
                data: resp.data
            })
        })
})

module.exports = router