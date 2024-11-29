const Messages = require("../constants/Message");
const JsonResponse = require("../helper/JsonResponse");
const TryCatch = require("../helper/TryCatch");
const InternshipApplications = require("../models/InternshipApplications");
const jwt = require("jsonwebtoken");

exports.createInternshipApplications = async function (req, res) {
  req.body.studId = req.session.user._id
  req.body.jobId = req.params.jobId
  req.body.screenshotLink = req.body.cloudinarySecretUrl
  console.log(req.body)

  let internshipapplications = new InternshipApplications(req.body)
  let internshipapplicationsDoc = await internshipapplications.createInternshipApplications();
  res.redirect('/')
  // new JsonResponse(req, res).jsonSuccess(internshipapplicationsDoc, "Created")
}

exports.getById = async function (req, res) {
  let internshipapplications = new InternshipApplications()
  let internshipapplicationsDoc = await internshipapplications.getById(req.params.id)
  new JsonResponse(req, res).jsonSuccess(internshipapplicationsDoc, new Messages().SUCCESSFULLY_RECEIVED)

}


exports.getAllInternshipApplicationss = async function (req, res) {
  let internshipapplications = new InternshipApplications()
  let internshipapplicationss = await internshipapplications.getAllInternshipApplicationss()
  new JsonResponse(req, res).jsonSuccess(internshipapplicationss, new Messages().SUCCESSFULLY_RECEIVED)
  return internshipapplicationss
}

exports.deleteById = async function (req, res) {
  let internshipapplications = new InternshipApplications();
  await internshipapplications.deleteById()
  new JsonResponse(req, res).jsonSuccess(true, new Messages().SUCCESSFULLY_DELETED)
}