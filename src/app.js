const path = require('path')
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express()

//connection to the database
mongoose.connect('mongodb://localhost/crud-mongo')
    .then(db => console.log('Db connected'))
    .catch(err => console.log(err))

//import routes
const indexRoutes = require('./routes/index')

//setting
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname + '/views'))
app.set('view engine', 'ejs')


//middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))

// routes
app.use('/', indexRoutes)


//starting the server
app.listen(app.get('port'), () => {
    console.log('sever on port', app.get('port'));
})