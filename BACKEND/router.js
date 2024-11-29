const express = require("express")
const router = express.Router()
const AuthHelper = require("./helper/JWTAuthHelper")
const TryCatch = require("./helper/TryCatch")
const Messages = require("./constants/Messages")

//imports here
const uploadController = require('./controllers/uploadController');
const upload = require('./middleware/multer');
const adminController = require("./controllers/adminController")

const questionController = require("./controllers/questionController")

const internshipapplicationController = require("./controllers/internshipapplicationController")

const jobpostController = require("./controllers/jobpostController")

const chatController = require("./controllers/chatController")
const projectController = require("./controllers/projectController")

const studentController = require("./controllers/studentController")

//code here

    // Add Single file to Cloudinary
    router.post("/uploadSingleFile", AuthHelper.verifyToken, upload.single("image"), new TryCatch(uploadController.uploadSingleFile).tryCatchGlobe());

    // Add Multiple files to cloudinary - {Array of Attachments}
    router.post("/uploadMultipleFiles", AuthHelper.verifyToken, upload.array("attachments"), new TryCatch(uploadController.uploadMultipleFiles).tryCatchGlobe());

    // Add files according to fields to cloudinary
    // [
    //   { name: 'avatar', maxCount: 1 },
    //   { name: 'gallery', maxCount: 8 }
    // ]
    router.post("/uploadFiles",AuthHelper.verifyToken,upload.fields([{name: "userImage"},{name: "coverPhoto",}]),new TryCatch(uploadController.uploadFiles).tryCatchGlobe());

    // Delete Single file from cloudinary
    router.post("/deleteSingleFile", AuthHelper.verifyToken, new TryCatch(uploadController.deleteSingleFile).tryCatchGlobe());

    // Delete Multiple files from cloudinary - {Array of Public Ids}
    router.post("/deleteMultipleFiles", AuthHelper.verifyToken, new TryCatch(uploadController.deleteMultipleFiles).tryCatchGlobe());
    

//Entity - Admin --start
//Authentication - Admin
router.post("/register-admin", new TryCatch(adminController.apiRegister).tryCatchGlobe())
router.post("/login-admin", new TryCatch(adminController.apiLogin).tryCatchGlobe())

//CRUD Operations - Admin
router.post("/admin/does-email-exists", AuthHelper.verifyToken, new TryCatch(adminController.doesEmailExist).tryCatchGlobe())
router.get("/admin/get-by-id/:id", AuthHelper.verifyToken, new TryCatch(adminController.getById).tryCatchGlobe())
router.get("/admin/get-by-email/:email", AuthHelper.verifyToken, new TryCatch(adminController.getByEmail).tryCatchGlobe())
router.get("/admin/get-all", AuthHelper.verifyToken, new TryCatch(adminController.getAllAdmins).tryCatchGlobe())
router.delete("/admin/delete-by-id/:id", AuthHelper.verifyToken, new TryCatch(adminController.deleteById).tryCatchGlobe())
//Entity - Admin - End

//Entity - Question --start
//Authentication - Question
router.post("/register-question", new TryCatch(questionController.apiRegister).tryCatchGlobe())
router.post("/login-question", new TryCatch(questionController.apiLogin).tryCatchGlobe())

//CRUD Operations - Question
router.post("/question/does-email-exists", AuthHelper.verifyToken, new TryCatch(questionController.doesEmailExist).tryCatchGlobe())
router.get("/question/get-by-id/:id", AuthHelper.verifyToken, new TryCatch(questionController.getById).tryCatchGlobe())
router.get("/question/get-by-email/:email", AuthHelper.verifyToken, new TryCatch(questionController.getByEmail).tryCatchGlobe())
router.get("/question/get-all", AuthHelper.verifyToken, new TryCatch(questionController.getAllQuestions).tryCatchGlobe())
router.delete("/question/delete-by-id/:id", AuthHelper.verifyToken, new TryCatch(questionController.deleteById).tryCatchGlobe())
//Entity - Question - End

//Entity - InternshipApplication --start

//CRUD Operations - InternshipApplication
router.post("/internshipapplication/create", AuthHelper.verifyToken, new TryCatch(internshipapplicationController.createInternshipApplication).tryCatchGlobe())
router.get("/internshipapplication/get-by-id/:id", AuthHelper.verifyToken, new TryCatch(internshipapplicationController.getById).tryCatchGlobe())
router.get("/internshipapplication/get-all", AuthHelper.verifyToken, new TryCatch(internshipapplicationController.getAllInternshipApplications).tryCatchGlobe())
router.get("/internshipapplication/get-by-studId/:id", AuthHelper.verifyToken, new TryCatch(internshipapplicationController.getAllInternshipApplicationsByStudentId).tryCatchGlobe())
router.delete("/internshipapplication/delete-by-id/:id", AuthHelper.verifyToken, new TryCatch(internshipapplicationController.deleteById).tryCatchGlobe())
//Entity - InternshipApplication - End

//Entity - JobPost --start

//CRUD Operations - JobPost
router.post("/jobpost/create", AuthHelper.verifyToken, new TryCatch(jobpostController.createJobPost).tryCatchGlobe())
router.get("/jobpost/get-by-id/:id", AuthHelper.verifyToken, new TryCatch(jobpostController.getById).tryCatchGlobe())
router.get("/jobpost/get-all", AuthHelper.verifyToken, new TryCatch(jobpostController.getAllJobPosts).tryCatchGlobe())
router.delete("/jobpost/delete-by-id/:id", AuthHelper.verifyToken, new TryCatch(jobpostController.deleteById).tryCatchGlobe())
//Entity - JobPost - End

router.post("/send-chat", AuthHelper.verifyToken, new TryCatch(chatController.sendChat).tryCatchGlobe())
router.get("/get-my-chat/:id/:chatContactId", AuthHelper.verifyToken, new TryCatch(chatController.getChatConvo).tryCatchGlobe())

//Entity - Project --start

//CRUD Operations - Project
router.post("/project/create", AuthHelper.verifyToken, new TryCatch(projectController.createProject).tryCatchGlobe())
router.get("/project/get-by-id/:id", AuthHelper.verifyToken, new TryCatch(projectController.getById).tryCatchGlobe())
router.get("/project/get-all", AuthHelper.verifyToken, new TryCatch(projectController.getAllProjects).tryCatchGlobe())
router.delete("/project/delete-by-id/:id", AuthHelper.verifyToken, new TryCatch(projectController.deleteById).tryCatchGlobe())
//Entity - Project - End

//Entity - Student --start
//Authentication - Student
router.post("/register-student", new TryCatch(studentController.apiRegister).tryCatchGlobe())
router.post("/login-student", new TryCatch(studentController.apiLogin).tryCatchGlobe())

//CRUD Operations - Student
router.post("/student/does-email-exists", AuthHelper.verifyToken, new TryCatch(studentController.doesEmailExist).tryCatchGlobe())
router.get("/student/get-by-id/:id", AuthHelper.verifyToken, new TryCatch(studentController.getById).tryCatchGlobe())
router.get("/student/get-by-email/:email", AuthHelper.verifyToken, new TryCatch(studentController.getByEmail).tryCatchGlobe())
router.get("/student/get-all", AuthHelper.verifyToken, new TryCatch(studentController.getAllStudents).tryCatchGlobe())
router.delete("/student/delete-by-id/:id", AuthHelper.verifyToken, new TryCatch(studentController.deleteById).tryCatchGlobe())
//Entity - Student - End

module.exports = router
