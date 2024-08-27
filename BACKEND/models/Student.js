const bcrypt = require("bcryptjs")
const Messages = require("../constants/Messages")
const TryCatch = require("../helper/TryCatch")
const { ObjectId } = require("mongodb")
const studentsCollection = require("../db").db().collection("student")

let Student = function (data) {
  this.data = data
  this.errors = []
}

Student.prototype.cleanUp = function () {
  // get rid of any bogus properties
  this.data = {
    //predfined start
    name: this.data.name,
    lName: this.data.lName,
    email: this.data.email.trim().toLowerCase(),
    password: this.data.password,
    contactNumber: this.data.contactNumber,
    address: this.data.address,
    city: this.data.city,
    //predefined end
    dateOfBirth: new Date(this.data.dateOfBirth),
    gender: this.data.gender,
    enrollmentYear: this.data.enrollmentYear,
    graduationYear: this.data.graduationYear,
    course: this.data.course,
    department: this.data.department,
    currentSemester: this.data.currentSemester,
    CGPA: Number(this.data.CGPA),
    projects: [], // this will be an [] of project Id's
    experience: this.data.experience, //{numberOfyears: , company: , }
    skills: this.data.skills,
    certificates: this.data.certificates, //array
    resumeLink: this.data.resumeLink,
    portfolioLink: this.data.portfolioLink,
    linkedInProfileLink: this.data.linkedInProfileLink,
    gitHubProfileLink: this.data.gitHubProfileLink,
    programmingPlatformLink: this.data.programmingPlatformLink,
    clubs: this.data.clubs,
    achievements: this.data.achievements, //array
    preferredJobRole: this.data.preferredJobRole,
    preferredJobLocation: this.data.preferredJobLocation,
    isHigherStudies: Boolean(this.data.isHigherStudies),
    sapId: this.data.sapId,
    skillsInterestedToLearn: this.data.skillsInterestedToLearn,
    reputationScore: Number(this.data.reputationScore),
    internshipsAppliedIn: this.data.internshipsAppliedIn,
    badgesRecieved: this.data.badgesRecieved, //array
    role: "student",
    createdAt: new Date()
  }
}

Student.prototype.login = async function () {
  let attemptedUser = await studentsCollection.findOne({ email: this.data.email })
  this.cleanUp()
  if (attemptedUser && bcrypt.compareSync(this.data.password, attemptedUser.password)) {
    this.data = attemptedUser
    return true
  } else {
    return false
  }
}

Student.prototype.register = async function () {
  this.cleanUp()

  let salt = bcrypt.genSaltSync(10)
  this.data.password = bcrypt.hashSync(this.data.password, salt)
  await studentsCollection.insertOne(this.data)
  return true
}

Student.prototype.findByEmail = async function (email) {
  let studentDoc = await studentsCollection.findOne({ email: email })
  return studentDoc
}

Student.prototype.doesEmailExist = async function (email) {
  let student = await studentsCollection.findOne({ email: email })
  if (student) {
    return true
  } else {
    return false
  }
}

Student.prototype.getById = async function (id) {
  let studentDoc = await studentsCollection.findOne({ _id: new ObjectId(id) })
  return studentDoc
}

Student.prototype.getAllStudents = async function () {
  let studentDoc = await studentsCollection.find({}).toArray()
  return studentDoc
}

Student.prototype.deleteById = async function (id) {
  await studentsCollection.deleteOne({ _id: new ObjectId(id) })
  return
}

Student.prototype.appendProject = async function (studId, projId) {
  console.log(projId)
  await studentsCollection.findOneAndUpdate(
    { _id: new ObjectId(studId) }, // Find the student by ID
    { $push: { projects: new ObjectId(projId) } }
  )
  return
}

module.exports = Student
