const express = require('express');
const app = express();
const router = require('./router')

// const session = require('express-session')
const MongoStore = require('connect-mongo')



// let sessionOptions = session({
//     secret:  "Maheshmati is Ruled by BhalalDev Instead of Baahubali",
//     store: MongoStore.create({client: require('./db')}),
//     resave: false,
//     saveUninitialized: false,
//     cookie: {maxAge: 1000 * 60 * 60 * 48, httpOnly: true}
// })

// app.use(sessionOptions)

// app.use(function(req, res, next){
// res.locals.user = req.session.user
// next()
// })

app.use(express.urlencoded({extended: false}))

app.use(express.json())



//it tells the server to call 'router' file, when the server encounters '/' this request
app.use('/', router)

module.exports = app

