const Messages = require("../constants/Message");
  const JsonResponse = require("../helper/JsonResponse");
  const TryCatch = require("../helper/TryCatch");
  const StudentInternships = require("../models/StudentInternships");
const jwt = require("jsonwebtoken");

exports.createStudentInternships = async function(req, res){
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

exports.displayAddInternshipPage = async function (req, res) {
  res.render("student-AddInternship");
}