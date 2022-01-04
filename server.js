
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



app.listen(process.env.PORT, '0.0.0.0', () => {
    console.log('Server listening ');
})










