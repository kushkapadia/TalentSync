const bcrypt = require("bcryptjs")
const Messages = require("../constants/Messages")
const TryCatch = require("../helper/TryCatch")
const { ObjectId } = require("mongodb")
const jobpostsCollection = require("../db").db().collection("jobpost")

let JobPost = function (data) {
  this.data = data
  this.errors = []
}

JobPost.prototype.cleanUp = function () {
  // get rid of any bogus properties
  this.data = {
    jobId: this.data.jobId,
    jobTitle: this.data.jobTitle,
    companyName: this.data.companyName,
    jobLocation: this.data.jobLocation,
    jobType: this.data.jobType,
    jobDescription: this.data.jobDescription,
    responsibilities: this.data.responsibilities,
    qualifications: this.data.qualifications,
    skillsRequired: this.data.skillsRequired,
    experienceRequired: this.data.experienceRequired,
    educationRequired: this.data.educationRequired,
    salaryRange: this.data.salaryRange,
    benefits: this.data.benefits,
    applicationDeadline: new Date(this.data.applicationDeadline),
    contactPerson: this.data.contactPerson,
    contactEmail: this.data.contactEmail,
    contactPhone: this.data.contactPhone,
    applicationLink: this.data.applicationLink,
    eligibility: this.data.eligibility, //which year pass out students sghould be be allowed
    remoteWork: Boolean(this.data.remoteWork), //true//false
    requiredLanguages: this.data.requiredLanguages,
    travelRequirement: this.data.travelRequirement,
    workSchedule: this.data.workSchedule,
    companyWebsite: this.data.companyWebsite,
    companyLogo: this.data.companyLogo,
    postedDate: new Date(this.data.postedDate),
    updatedDate: new Date(this.data.updatedDate),
    applicationInstructions: this.data.applicationInstructions,
    taskToBeCompleted: this.data.taskToBeCompleted,
    TaskDeadline: new Date(this.data.TaskDeadline),
    taskTitle: this.data.taskTitle,
    TaskDesc: this.data.TaskDesc,
    TaskSubmissioLink: this.data.TaskSubmissioLink,
    queryMailId: this.data.queryMailId,
    extraNotes: this.data.extraNotes,

    //predfined start
    createdAt: new Date()
    //predefined end
  }
}

JobPost.prototype.createJobPost = async function () {
  this.cleanUp()
  const jobpostDoc = await jobpostsCollection.insertOne(this.data)
  return jobpostDoc
}

JobPost.prototype.getById = async function (id) {
  let jobpostDoc = await jobpostsCollection.findOne({ _id: new ObjectId(id) })
  return jobpostDoc
}

JobPost.prototype.getAllJobPosts = async function () {
  let jobpostDoc = await jobpostsCollection.find({}).toArray()
  return jobpostDoc
}

JobPost.prototype.deleteById = async function (id) {
  await jobpostsCollection.deleteOne({ _id: new ObjectId(id) })
  return
}

module.exports = JobPost
