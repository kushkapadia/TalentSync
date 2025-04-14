const Messages = require("../constants/Message");
  const JsonResponse = require("../helper/JsonResponse");
  const TryCatch = require("../helper/TryCatch");
  const StudentInternships = require("../models/StudentInternships");
  const WhatsappNotification = require("../helper/WhatsappNotification");
const jwt = require("jsonwebtoken");
const Nodemailer = require("../helper/Nodemailer");
const Student = require("../models/Student");

exports.createStudentInternships = async function(req, res){
  
  req.body.internshipReport = req.body.cloudinaryResult[0];
  req.body.offerLetter = req.body.cloudinaryResult[1];
  req.body.completionCertificate = req.body.cloudinaryResult[2];
  req.body.additionalDoc = req.body.cloudinaryResult[3];

  req.body.studentId = req.session.user._id
  let studentinternships = new StudentInternships(req.body)
  console.log(req.body)
  console.log("============")
  // console.log(req.user.id)
  console.log(req.session.user)

 let studentinternshipsDoc = await studentinternships.createStudentInternships();
//  new JsonResponse(req, res).jsonSuccess(studentinternshipsDoc, "Created")

res.redirect('/')
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
  let nodemailer = new Nodemailer("sounaknandi24@gmail.com", "Approval Of internship", "Congrats, Your internship has been approved!")
  let whatsappNotification = new WhatsappNotification("919930990504", "Congrats, Your internship has been approved!")
  nodemailer.sendMail()
  whatsappNotification.sendWhatsappNotification()
  console.log("accept")
  await studentinternships.acceptInternship(req.params.id)
  let studentInternshipDoc = await studentinternships.getById(req.params.id)
console.log(studentInternshipDoc)

const dailyHours = 8; // Assuming 8 hours per day //set part time/full; time if else here.
const startDate = new Date(studentInternshipDoc.startDate);
const endDate = new Date(studentInternshipDoc.endDate);
  
  if (endDate < startDate) return 0;

  let totalHours = 0;
  const currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    const day = currentDate.getDay();
    // Only count weekdays (Mon to Fri)
    if (day !== 0 && day !== 6) {
      totalHours += dailyHours;
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }

console.log("Total hours: " + totalHours);
let student = new Student()
 await student.updateTotalHours(studentInternshipDoc.studentId, totalHours)

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