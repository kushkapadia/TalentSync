const bcrypt = require("bcryptjs")
const Messages = require("../constants/Messages")
const TryCatch = require("../helper/TryCatch")
const { ObjectId } = require("mongodb")
const projectsCollection = require("../db").db().collection("project")

let Project = function (data) {
  this.data = data
  this.errors = []
}

Project.prototype.cleanUp = function () {
  // get rid of any bogus properties
  this.data = {
    projectTitle: this.data.projectTitle,
    projectDescription: this.data.projectDescription,
    teamMembers: this.data.teamMembers, //[] of student ids
    startDate: new Date(this.data.startDate),
    EndDate: new Date(this.data.EndDate),
    projectStatus: this.data.projectStatus, //inprogress, deployed, finished
    techStack: this.data.techStack, //array
    objectives: this.data.objectives, //array
    challenges: this.data.challenges, //array
    achievements: this.data.achievements, //array
    client: this.data.client,
    budget: Number(this.data.budget),
    projectOutcomes: this.data.projectOutcomes, //array
    documentation: this.data.documentation,
    githubLink: this.data.githubLink,
    ytLink: this.data.ytLink,
    hostingLink: this.data.hostingLink,

    //predfined start
    createdAt: new Date()
    //predefined end
  }
}

Project.prototype.createProject = async function () {
  this.cleanUp()
  const projectDoc = await projectsCollection.insertOne(this.data)
  return projectDoc
}

Project.prototype.getById = async function (id) {
  let projectDoc = await projectsCollection.findOne({ _id: new ObjectId(id) })
  return projectDoc
}

Project.prototype.getAllProjects = async function () {
  let projectDoc = await projectsCollection.find({}).toArray()
  return projectDoc
}

Project.prototype.deleteById = async function (id) {
  await projectsCollection.deleteOne({ _id: new ObjectId(id) })
  return
}

module.exports = Project
