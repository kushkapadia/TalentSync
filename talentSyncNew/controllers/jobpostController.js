const Messages = require("../constants/Message");
const JsonResponse = require("../helper/JsonResponse");
const TryCatch = require("../helper/TryCatch");
const InternshipApplications = require("../models/InternshipApplications");
const JobPost = require("../models/JobPost");
const jwt = require("jsonwebtoken");

exports.createJobPost = async function (req, res) {
  let jobpost = new JobPost(req.body)
  let jobpostDoc = await jobpost.createJobPost();
  new JsonResponse(req, res).jsonSuccess(jobpostDoc, "Created")
}

exports.getById = async function (req, res) {
  let jobpost = new JobPost()
  let jobpostDoc = await jobpost.getById(req.params.id)
  new JsonResponse(req, res).jsonSuccess(jobpostDoc, new Messages().SUCCESSFULLY_RECEIVED)

}


exports.getAllJobPosts = async function (req, res) {
  let jobpost = new JobPost()
  let jobposts = await jobpost.getAllJobPosts()
  new JsonResponse(req, res).jsonSuccess(jobposts, new Messages().SUCCESSFULLY_RECEIVED)
  return jobposts
}

exports.deleteById = async function (req, res) {
  let jobpost = new JobPost();
  await jobpost.deleteById()
  new JsonResponse(req, res).jsonSuccess(true, new Messages().SUCCESSFULLY_DELETED)
}

//display routes
exports.viewInternshipPage = async function (req, res) {
  let jobPost = new JobPost();
  let internshipDoc = await jobPost.getById(req.params.id)
  res.render('internship-detail', {
    internshipDoc: internshipDoc
  })
}



exports.displayAdminInternshipDetailPage = async function (req, res) {
  let jobPost = new JobPost();
  let internshipDoc = await jobPost.getById(req.params.id)
  // let application = new Ap




  const jobId = req.params.id // Job for which we are fetching applications

  let internshipapplications = new InternshipApplications()
  let studentsApplied = await internshipapplications.getAppliedStudentsById(req.params.id)
  console.log("PARTICIPATED STUDENTS: ")
  console.log(studentsApplied)



  res.render('admin/admin-internship-detail', {
    internshipDoc: internshipDoc,
    studentsApplied: studentsApplied
  })

}

exports.displayAdminUploadInternshipPage = async function (req, res) {
  res.render('admin/admin-upload-internship')
}