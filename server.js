const express = require('express')
const mongoose =  require('mongoose')
const morgan = require('morgan')
const bodyParser =  require('body-parser')  

const { urlencoded } = require('body-parser')

const movieRoute = require('./routes/movie')

mongoose.connect('mongodb+srv://Kiruthiga:Kiruthiga@cluster0.mdcbv.mongodb.net/fortuneSoft' , {useNewUrlParser:true,useUnifiedTopology:true})

const db = mongoose.connection

db.on('error',(err) => {
    console.log(err)
})

db.once('open', () => {
    console.log('Connected to mongodb')
})

const app = express()
app.use(morgan('dev'))
app.use(urlencoded({extended:true}))
app.use(bodyParser.json())

 
app.listen(3000, () => {
    console.log(`Server is running on port 3000`)
})

app.use('/api/movie',movieRoute);

