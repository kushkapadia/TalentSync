const express = require("express")
const router = express.Router()
const AuthHelper = require("../helper/JWTAuthHelper")
const TryCatch = require("../helper/TryCatch")
const Messages = require("../constants/Message")

//imports here
const studentinternshipsRoutes = require("./studentinternshipsRoutes");
const llmUsingOllamaRoutes = require("./llmRoutes");
const internshipapplicationsController = require('../controllers/internshipapplicationsController');

const uploadController = require('../controllers/uploadController');
const upload = require('../middleware/multer');
const jobpostController = require('../controllers/jobpostController');

const adminController = require('../controllers/adminController');

const mentorController = require('../controllers/mentorController');

const studentController = require('../controllers/studentController');

const testuserController = require("../controllers/testuserController")

//code here
router.use("/studentinternships", studentinternshipsRoutes);
router.use("/llm", llmUsingOllamaRoutes);

//Entity - InternshipApplications --start

//CRUD Operations - InternshipApplications
router.post('/internshipapplications/create/:jobId', upload.single("image"), uploadController.uploadSingleFile, new TryCatch(internshipapplicationsController.createInternshipApplications).tryCatchGlobe());
router.get('/internshipapplications/get-by-id/:id', new TryCatch(internshipapplicationsController.getById).tryCatchGlobe());
router.get('/internshipapplications/get-all', new TryCatch(internshipapplicationsController.getAllInternshipApplicationss).tryCatchGlobe());
router.delete('/internshipapplications/delete-by-id/:id', new TryCatch(internshipapplicationsController.deleteById).tryCatchGlobe());
//Entity - InternshipApplications - End


// Add Single file to Cloudinary
router.post("/uploadSingleFile", upload.single("image"), new TryCatch(uploadController.uploadSingleFile).tryCatchGlobe());

// Add Multiple files to cloudinary - {Array of Attachments}
router.post("/uploadMultipleFiles", upload.array("attachments"), new TryCatch(uploadController.uploadMultipleFiles).tryCatchGlobe());

// Add files according to fields to cloudinary
// [
//   { name: 'avatar', maxCount: 1 },
//   { name: 'gallery', maxCount: 8 }
// ]
router.post("/uploadFiles", upload.fields([{ name: "userImage" }, { name: "coverPhoto", }]), new TryCatch(uploadController.uploadFiles).tryCatchGlobe());

// Delete Single file from cloudinary
router.post("/deleteSingleFile", new TryCatch(uploadController.deleteSingleFile).tryCatchGlobe());

// Delete Multiple files from cloudinary - {Array of Public Ids}
router.post("/deleteMultipleFiles", new TryCatch(uploadController.deleteMultipleFiles).tryCatchGlobe());


//Entity - JobPost --start

//CRUD Operations - JobPost
router.post('/jobpost/create', new TryCatch(jobpostController.createJobPost).tryCatchGlobe());
router.get('/jobpost/get-by-id/:id', new TryCatch(jobpostController.getById).tryCatchGlobe());
router.get('/jobpost/get-all', new TryCatch(jobpostController.getAllJobPosts).tryCatchGlobe());
router.delete('/jobpost/delete-by-id/:id', new TryCatch(jobpostController.deleteById).tryCatchGlobe());
//Entity - JobPost - End


//Entity - Admin --start
//Authentication - Admin
router.post('/register-admin', new TryCatch(adminController.register).tryCatchGlobe());
router.post('/login-admin', new TryCatch(adminController.login).tryCatchGlobe());

//CRUD Operations - Admin
router.post('/admin/does-email-exists', new TryCatch(adminController.doesEmailExist).tryCatchGlobe());
router.get('/admin/get-by-id/:id', new TryCatch(adminController.getById).tryCatchGlobe());
router.get('/admin/get-by-email/:email', new TryCatch(adminController.getByEmail).tryCatchGlobe());
router.get('/admin/get-all', new TryCatch(adminController.getAllAdmins).tryCatchGlobe());
router.delete('/admin/delete-by-id/:id', new TryCatch(adminController.deleteById).tryCatchGlobe());
//Entity - Admin - End


//Entity - Mentor --start
//Authentication - Mentor
router.post('/register-mentor', new TryCatch(mentorController.register).tryCatchGlobe());
router.post('/login-mentor', new TryCatch(mentorController.login).tryCatchGlobe());

//CRUD Operations - Mentor
router.post('/mentor/does-email-exists', new TryCatch(mentorController.doesEmailExist).tryCatchGlobe());
router.get('/mentor/get-by-id/:id', new TryCatch(mentorController.getById).tryCatchGlobe());
router.get('/mentor/get-by-email/:email', new TryCatch(mentorController.getByEmail).tryCatchGlobe());
router.get('/mentor/get-all', new TryCatch(mentorController.getAllMentors).tryCatchGlobe());
router.delete('/mentor/delete-by-id/:id', new TryCatch(mentorController.deleteById).tryCatchGlobe());
//Entity - Mentor - End


//Entity - Student --start
//Authentication - Student
router.post('/register-student', new TryCatch(studentController.register).tryCatchGlobe());
router.post('/login-student', new TryCatch(studentController.login).tryCatchGlobe());

//CRUD Operations - Student
router.post('/student/does-email-exists', new TryCatch(studentController.doesEmailExist).tryCatchGlobe());
router.get('/student/get-by-id/:id', new TryCatch(studentController.getById).tryCatchGlobe());
router.get('/student/get-by-email/:email', new TryCatch(studentController.getByEmail).tryCatchGlobe());
router.get('/student/get-all', new TryCatch(studentController.getAllStudents).tryCatchGlobe());
router.delete('/student/delete-by-id/:id', new TryCatch(studentController.deleteById).tryCatchGlobe());
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
  res.render('admin/admin-signin')
})

router.get("/student-signup", new TryCatch(studentController.displaySignUpPage).tryCatchGlobe());

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
router.get("/apply-internships", new TryCatch(studentController.displayApplyInternshipPage).tryCatchGlobe())

router.post('/logout', function (req, res) {
  req.session.destroy(function () {
    res.redirect('/')
  })
})

router.get("/student-applied-internships/:id", new TryCatch(studentController.displayAppliedInternshipPage).tryCatchGlobe())
router.get('/view-internship/:id', new TryCatch(jobpostController.viewInternshipPage).tryCatchGlobe())
router.get('/student-profile/:id', new TryCatch(studentController.displayStudentProfile).tryCatchGlobe())



//Mentor side pages
router.get("/my-mentees", new TryCatch(mentorController.displayMyMenteePage).tryCatchGlobe())
router.get("/mentee-profile/:id", new TryCatch(mentorController.displayMenteeProfile).tryCatchGlobe())
router.get("/mentor-profile/:id", new TryCatch(mentorController.displayMentorProfile).tryCatchGlobe())




//Admin Side pages

router.get('/admin-active-internships', new TryCatch(adminController.displayActiveInternshipPage).tryCatchGlobe())
router.get('/admin-view-internship/:id', new TryCatch(jobpostController.displayAdminInternshipDetailPage).tryCatchGlobe())
router.get('/admin-upload-internship', new TryCatch(jobpostController.displayAdminUploadInternshipPage).tryCatchGlobe())
router.get("/admin-profile/:id", new TryCatch(adminController.displayAdminProfile).tryCatchGlobe())

module.exports = router
