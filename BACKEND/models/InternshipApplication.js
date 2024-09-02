const bcrypt = require("bcryptjs")
const Messages = require("../constants/Messages")
const TryCatch = require("../helper/TryCatch")
const { ObjectId } = require("mongodb")
const internshipapplicationsCollection = require("../db").db().collection("internshipApplications")

let InternshipApplication = function (data) {
  this.data = data
  this.errors = []
}

InternshipApplication.prototype.cleanUp = function () {
  // get rid of any bogus properties
  this.data = {
    jobId: this.data.jobId,
    studentId: this.data.studentId,
    applicationStatus: this.data.applicationStatus,
    resumeLink: this.data.resumeLink,
    coverLetter: this.data.coverLetter,
    notes: this.data.notes,
    interviewScheduled: this.data.interviewScheduled,
    interviewDate: this.data.interviewDate,
    feedback: this.data.feedback,
    rating: this.data.rating,
    certificate: this.data.certificate,
    //predfined start
    createdAt: new Date()
    //predefined end
  }
}

InternshipApplication.prototype.createInternshipApplication = async function () {
  this.cleanUp()
  const internshipapplicationDoc = await internshipapplicationsCollection.insertOne(this.data)
  return internshipapplicationDoc
}

InternshipApplication.prototype.getById = async function (id) {
  let internshipapplicationDoc = await internshipapplicationsCollection.findOne({ _id: new ObjectId(id) })
  return internshipapplicationDoc
}

InternshipApplication.prototype.getAllInternshipApplications = async function () {
  let internshipapplicationDoc = await internshipapplicationsCollection.find({}).toArray()
  return internshipapplicationDoc
}

InternshipApplication.prototype.deleteById = async function (id) {
  await internshipapplicationsCollection.deleteOne({ _id: new ObjectId(id) })
  return
}

module.exports = InternshipApplication
