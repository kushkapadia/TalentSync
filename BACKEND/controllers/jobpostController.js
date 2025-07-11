const Messages = require("../constants/Messages")
const JsonResponse = require("../helper/JsonResponse")
const TryCatch = require("../helper/TryCatch")
const JobPost = require("../models/JobPost")
const jwt = require("jsonwebtoken")

exports.createJobPost = async function (req, res) {
  let jobpost = new JobPost(req.body)
  let jobpostDoc = await jobpost.createJobPost()
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
  // return jobposts
}

exports.deleteById = async function (req, res) {
  let jobpost = new JobPost()
  await jobpost.deleteById()
  new JsonResponse(req, res).jsonSuccess(true, new Messages().SUCCESSFULLY_DELETED)
}
