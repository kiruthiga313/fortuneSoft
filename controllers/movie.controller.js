const express = require('express')
const { Movie } = require('../models/movie')


exports.listMovie = async (req, res) => {
    try {
        const movie = await Movie.find()
    
    let resultData = []

    for (let value of movie) {
        for (let genres of value.genres) {
            let movieData = []
            if (resultData.length > 0) {
                var movieIndex = resultData.findIndex(function (val) {
                    return val.name == genres
                })

                if (movieIndex != -1) {
                    movieData = resultData[movieIndex]['movies']
                    movieData.push({
                        director: value.director,
                        imdb_rating: value.imdb_rating,
                        length: value.length,
                        poster: value.poster,
                        title: value.title
                    })
                    resultData[movieIndex]['movies'] = movieData
                } else {
                    movieData.push({
                        director: value.director,
                        imdb_rating: value.imdb_rating,
                        length: value.length,
                        poster: value.poster,
                        title: value.title
                    })
                    resultData.push({ genres: genres, movies: movieData })
                }
            } else {
                movieData.push({
                    director: value.director,
                    imdb_rating: value.imdb_rating,
                    length: value.length,
                    poster: value.poster,
                    title: value.title
                })
                resultData.push({ genres: genres, movies: movieData })
            }

        }
    }


     res.json({
        resultData
    })
        
    } catch (error) {
        res.json({
            error
        })
    }
    




}