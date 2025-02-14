const express = require('express');
const router = express.Router();
const AuthHelper = require('../helper/JWTAuthHelper');
const TryCatch = require('../helper/TryCatch');
const Messages = require('../constants/Message');
const studentinternshipsController = require('../controllers/studentinternshipsController');
const upload = require('../middleware/multer');
const uploadController = require('../controllers/uploadController');
//imports here

//code here

//Entity - StudentInternships --start
//CRUD Operations - StudentInternships
router.post('/create',  upload.array("attachments"), uploadController.uploadMultipleFiles, new TryCatch(studentinternshipsController.createStudentInternships).tryCatchGlobe());
router.get('/get-by-id/:id', new TryCatch(studentinternshipsController.getById).tryCatchGlobe());
router.get('/get-all', new TryCatch(studentinternshipsController.getAllStudentInternshipss).tryCatchGlobe());
router.delete('/delete-by-id/:id', new TryCatch(studentinternshipsController.deleteById).tryCatchGlobe());
router.post("/update-by-id/:id", new TryCatch(studentinternshipsController.updateById).tryCatchGlobe());
//Entity - StudentInternships - End

//display page routes
router.get("/add-internships", new TryCatch(studentinternshipsController.displayAddInternshipPage).tryCatchGlobe());
//router.post('/internshipapplications/create/:jobId', upload.single("image"), uploadController.uploadSingleFile, new TryCatch(internshipapplicationsController.createInternshipApplications).tryCatchGlobe());
router.post('/accept-internship/:id', new TryCatch(studentinternshipsController.acceptInternship).tryCatchGlobe());
router.post('/reject-internship/:id', new TryCatch(studentinternshipsController.rejectInternship).tryCatchGlobe());
module.exports = router;