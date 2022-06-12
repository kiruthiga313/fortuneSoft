const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movie.controller')
const authenticate = require('../middleware/authenticate')

router.get('/',authenticate,(req,res)=> {
    movieController.listMovie(req,res)
})



module.exports = router