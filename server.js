
require('dotenv').config()
const cors = require('cors')
const Router = require('./routes/routes')
const express = require('express')
const app = express()
const passport = require('passport')
require('./config/database')
const path = require('path')

// middlewares 
app.use(cors())

// convierte la data que llega al servidor en json
app.use(express.json())

// inicializa passport
app.use(passport.initialize())

// trae las routes y le asigna una ruta predeterminada
app.use('/api', Router)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + '/client/build/index.html'))
    })
}

app.listen(process.env.PORT || 4000, 'localhost' || '0.0.0.0', () => {
    console.log('Server listening ');
})










