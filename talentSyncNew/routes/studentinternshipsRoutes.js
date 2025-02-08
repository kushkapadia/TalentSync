const express = require('express');
const router = express.Router();
const AuthHelper = require('../helper/JWTAuthHelper');
const TryCatch = require('../helper/TryCatch');
const Messages = require('../constants/Message');
const studentinternshipsController = require('../controllers/studentinternshipsController');

//imports here

//code here

//Entity - StudentInternships --start
//CRUD Operations - StudentInternships
router.post('/create', AuthHelper.verifyToken, new TryCatch(studentinternshipsController.createStudentInternships).tryCatchGlobe());
router.get('/get-by-id/:id', AuthHelper.verifyToken, new TryCatch(studentinternshipsController.getById).tryCatchGlobe());
router.get('/get-all', AuthHelper.verifyToken, new TryCatch(studentinternshipsController.getAllStudentInternshipss).tryCatchGlobe());
router.delete('/delete-by-id/:id', AuthHelper.verifyToken, new TryCatch(studentinternshipsController.deleteById).tryCatchGlobe());
router.post("/update-by-id/:id", AuthHelper.verifyToken, new TryCatch(studentinternshipsController.updateById).tryCatchGlobe());
//Entity - StudentInternships - End

//display page routes
router.get("/add-internships", new TryCatch(studentinternshipsController.displayAddInternshipPage).tryCatchGlobe());

module.exports = router;