// const express = require("express");
// const router = require("./router");
// const morgan = require("morgan");

// const cors = require("cors");

// //imports here

// //code here

// // Initialize our server
// const app = express();
// //To access the data user inputs in form.
// app.use(express.urlencoded({ extended: false }));
// //just a bolierplate code, tells our express server to add the user submitted data to request object.
// app.use(express.json());

// app.use(express.static("public"));
// app.use(morgan("dev"));
// app.use("/", router);

// app.use(cors());

// module.exports = app;

const express = require("express")
const session = require("express-session")
const MongoStore = require("connect-mongo")
const flash = require("connect-flash")
const router = require("./router")
const fileUpload = require("express-fileupload")
const morgan = require("morgan")
const app = express()

// const router = require('./router')

//To access the data user inputs in form.
app.use(express.urlencoded({ extended: false }))
//just a bolierplate code, tells our express server to add the user submitted data to request object.
app.use(express.json())
let sessionOptions = session({
  secret: "JavaScript is sooooooooo coool",
  store: MongoStore.create({ client: require("./db"), mongoUrl: process.env.CONNECTIONSTRING, collectionName: "sessions" }),
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 60 * 24, httpOnly: true }
})

app.use(sessionOptions)
app.use(flash())
app.use(
  fileUpload({
    createParentPath: true
  })
)
app.use(morgan("dev"))
app.use(express.static("public"))
//We are telling our express server to make the folder accessible.
//in public folder there are all the files who that we want to show all the visitors of our app. (css, browser.js, etc)
app.set("views", "views")
//a has to be views, it is an express option(views configeration).b is the folder created for our views.
app.set("view engine", "ejs")
//The template system we are using is ejs. There are many different options in javascript community
//npm install ejs

// app.use(userController.passwordProtected)

app.use(function (req, res, next) {
  // make our markdown function available from within ejs templates
  // res.locals.filterUserHTML = function(content) {
  //   return sanitizeHTML(markdown.parse(content), {allowedTags: ['p', 'br', 'ul', 'ol', 'li', 'strong', 'bold', 'i', 'em', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'], allowedAttributes: {}})
  // }

  // make all error and success flash messages available from all templates
  res.locals.errors = req.flash("errors")
  res.locals.success = req.flash("success")

  // make current user id available on the req object
  // if (req.session.user) {req.visitorId = req.session.user._id} else {req.visitorId = 0}

  // make user session data available from within view templates
  res.locals.user = req.session.user
  next()
})
const path = require("path")
// var favicon = require('serve-favicon');
// app.use(favicon(path.join(__dirname, 'public', 'new.ico')));
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use("/", router)
var fileupload = require("express-fileupload")
app.use(fileupload())

module.exports = app
