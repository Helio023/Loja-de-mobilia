const path = require('path')
const express = require('express')
const app = express()
const viewRoute = require('./routes/viewRoutes')


app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.use('/', viewRoute)


module.exports = app