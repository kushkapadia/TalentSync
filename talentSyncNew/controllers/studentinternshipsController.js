const Messages = require("../constants/Message");
  const JsonResponse = require("../helper/JsonResponse");
  const TryCatch = require("../helper/TryCatch");
  const StudentInternships = require("../models/StudentInternships");
const jwt = require("jsonwebtoken");

exports.createStudentInternships = async function(req, res){
  
  req.body.internshipReport = req.body.cloudinaryResult[0];
  req.body.offerLetter = req.body.cloudinaryResult[1];
  req.body.completionCertificate = req.body.cloudinaryResult[2];
  req.body.additionalDoc = req.body.cloudinaryResult[3];

  let studentinternships = new StudentInternships(req.body)
 let studentinternshipsDoc = await studentinternships.createStudentInternships();
 new JsonResponse(req, res).jsonSuccess(studentinternshipsDoc, "Created")
}

exports.getById = async function (req, res) {
  let studentinternships = new StudentInternships ()
let studentinternshipsDoc = await studentinternships.getById(req.params.id)
new JsonResponse(req, res).jsonSuccess(studentinternshipsDoc, new Messages().SUCCESSFULLY_RECEIVED)

}

exports.updateById = async function (req, res) {
  let studentinternships = new StudentInternships();
  let studentinternshipsDoc = await studentinternships.updateById(req.params.id, req.body);
  new JsonResponse(req, res).jsonSuccess(studentinternshipsDoc, new Messages().SUCCESSFULLY_UPDATED);
};

exports.getAllStudentInternshipss = async function (req, res) {
  let studentinternships = new StudentInternships ()
let studentinternshipss = await studentinternships.getAllStudentInternshipss()
new JsonResponse(req, res).jsonSuccess(studentinternshipss, new Messages().SUCCESSFULLY_RECEIVED)
return studentinternshipss
}

exports.deleteById = async function (req, res) {
  let studentinternships = new StudentInternships ();
await studentinternships.deleteById()
new JsonResponse(req, res).jsonSuccess(true, new Messages().SUCCESSFULLY_DELETED)
}

exports.acceptInternship = async function (req, res) {
  let studentinternships = new StudentInternships ();
  console.log("accept")
  await studentinternships.acceptInternship(req.params.id)
  res.redirect('/')
}

exports.rejectInternship = async function (req, res) {
  let studentinternships = new StudentInternships ();
  await studentinternships.rejectInternship(req.params.id)
  console.log("reject")
  res.redirect('/')

}

exports.displayAddInternshipPage = async function (req, res) {
  res.render("student-AddInternship");
}