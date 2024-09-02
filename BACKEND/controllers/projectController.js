const Messages = require("../constants/Messages")
const JsonResponse = require("../helper/JsonResponse")
const TryCatch = require("../helper/TryCatch")
const Project = require("../models/Project")
const jwt = require("jsonwebtoken")
const Student = require("../models/Student")
const { ObjectId } = require("mongodb")

exports.createProject = async function (req, res) {
  req.body.projectAuthor = new ObjectId(req.apiUser._id)
  let project = new Project(req.body)
  let projectDoc = await project.createProject()
  let student = new Student()
  let studId = req.apiUser._id
  student.appendProject(studId, projectDoc.insertedId)
  new JsonResponse(req, res).jsonSuccess(projectDoc, "Created")
}

exports.getById = async function (req, res) {
  let project = new Project()
  let projectDoc = await project.getById(req.params.id)
  new JsonResponse(req, res).jsonSuccess(projectDoc, new Messages().SUCCESSFULLY_RECEIVED)
}

exports.getAllProjects = async function (req, res) {
  let project = new Project()
  let projects = await project.getAllProjects()
  new JsonResponse(req, res).jsonSuccess(projects, new Messages().SUCCESSFULLY_RECEIVED)
  return projects
}

exports.deleteById = async function (req, res) {
  let project = new Project()
  await project.deleteById()
  new JsonResponse(req, res).jsonSuccess(true, new Messages().SUCCESSFULLY_DELETED)
}
