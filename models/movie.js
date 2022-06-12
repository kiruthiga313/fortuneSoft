const express = require('express')
const { default: mongoose } = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = mongoose.Schema({
    
    backdrop : {
        type : String
    },
    cast : {
        type : Array
    },
    classification : {
        type : String
    },
    director : {
        type : Array
    },
    genres : {
        type : Array
    },
    imdb_rating : {
        type : Number
    },
    length : {
        type : String
    },
    overview : {
        type : String
    },
    poster : {
        type : String
    },
    released_on : {
        type : String
    },
    slug : {
        type : String
    },
    title : {
        type : String
    }
})

exports.Movie = mongoose.model('movies',movieSchema)