const express = require("express")
const router = express.Router()
const AuthHelper = require("./helper/JWTAuthHelper")
const TryCatch = require("./helper/TryCatch")
const Messages = require("./constants/Message")

//imports here
const mentorController = require('./controllers/mentorController');

const studentController = require('./controllers/studentController');

const testuserController = require("./controllers/testuserController")

//code here

//Entity - Mentor --start
//Authentication - Mentor
router.post('/register-mentor', new TryCatch(mentorController.register).tryCatchGlobe());
router.post('/login-mentor', new TryCatch(mentorController.login).tryCatchGlobe());

//CRUD Operations - Mentor
router.post('/mentor/does-email-exists', AuthHelper.verifyToken, new TryCatch(mentorController.doesEmailExist).tryCatchGlobe());
router.get('/mentor/get-by-id/:id', AuthHelper.verifyToken, new TryCatch(mentorController.getById).tryCatchGlobe());
router.get('/mentor/get-by-email/:email', AuthHelper.verifyToken, new TryCatch(mentorController.getByEmail).tryCatchGlobe());
router.get('/mentor/get-all', AuthHelper.verifyToken, new TryCatch(mentorController.getAllMentors).tryCatchGlobe());
router.delete('/mentor/delete-by-id/:id', AuthHelper.verifyToken, new TryCatch(mentorController.deleteById).tryCatchGlobe());
//Entity - Mentor - End


//Entity - Student --start
//Authentication - Student
router.post('/register-student', new TryCatch(studentController.register).tryCatchGlobe());
router.post('/login-student', new TryCatch(studentController.login).tryCatchGlobe());

//CRUD Operations - Student
router.post('/student/does-email-exists', AuthHelper.verifyToken, new TryCatch(studentController.doesEmailExist).tryCatchGlobe());
router.get('/student/get-by-id/:id', AuthHelper.verifyToken, new TryCatch(studentController.getById).tryCatchGlobe());
router.get('/student/get-by-email/:email', AuthHelper.verifyToken, new TryCatch(studentController.getByEmail).tryCatchGlobe());
router.get('/student/get-all', AuthHelper.verifyToken, new TryCatch(studentController.getAllStudents).tryCatchGlobe());
router.delete('/student/delete-by-id/:id', AuthHelper.verifyToken, new TryCatch(studentController.deleteById).tryCatchGlobe());
//Entity - Student - End


//Entity - TestUser --start
//Authentication - TestUser
router.post("/register-testuser", new TryCatch(testuserController.register).tryCatchGlobe())
router.post("/login-testuser", new TryCatch(testuserController.apiLogin).tryCatchGlobe())

//CRUD Operations - TestUser
router.post("/testuser/does-email-exists", new TryCatch(testuserController.doesEmailExist).tryCatchGlobe())
router.get("/testuser/get-by-id/:id", new TryCatch(testuserController.getById).tryCatchGlobe())
router.get("/testuser/get-by-email/:email", new TryCatch(testuserController.getByEmail).tryCatchGlobe())
router.get("/testuser/get-all", new TryCatch(testuserController.getAllTestUsers).tryCatchGlobe())
router.delete("/testuser/delete-by-id/:id", new TryCatch(testuserController.deleteById).tryCatchGlobe())
//Entity - TestUser - End

router.get("/health-check", (req, res) => {
  res.json("Server Health: OK")
})

//page related routes
//login and register routes
router.get("/admin-sign-up", function (req, res) {
  res.render('admin-sign-up')
})

router.get("/admin-login", function (req, res) {
  res.render('admin-login')
})

router.get("/student-signup", function (req, res) {
  res.render('signUp')
})

router.get("/student-login", function (req, res) {
  res.render('student-signin')
})

router.get("/mentor-signup", function (req, res) {
  res.render('mentor-signup')
})

router.get("/mentor-login", function (req, res) {
  res.render('mentor/mentor-signin')
})

// Home route
router.get("/", new TryCatch(studentController.home).tryCatchGlobe())

//Student side pages
router.get("/apply-internships", function (req, res) {
  res.render('student-ApplyInternships')
})

router.post('/logout', function (req, res) {
  req.session.destroy(function () {
    res.redirect('/')
  })
})


module.exports = router
