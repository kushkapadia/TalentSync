const bcrypt = require("bcryptjs");
const Messages = require("../constants/Message");
const TryCatch = require("../helper/TryCatch");
const { ObjectId } = require('mongodb');
const internshipapplicationssCollection = require("../db").db().collection("internshipapplications");

let InternshipApplications = function (data) {
  this.data = data;
  this.errors = [];
};

InternshipApplications.prototype.cleanUp = function () {
  // get rid of any bogus properties
  this.data = {

    studId: new ObjectId(this.data.studId),
    jobId: new ObjectId(this.data.jobId),
    screenshotLink: this.data.screenshotLink,
    status: "pending",

    //predfined start
    createdAt: new Date(),
    //predefined end
  };
};

InternshipApplications.prototype.createInternshipApplications = async function () {
  this.cleanUp()
  const internshipapplicationsDoc = await internshipapplicationssCollection.insertOne(this.data);
  return internshipapplicationsDoc
}

InternshipApplications.prototype.getById = async function (id) {
  let internshipapplicationsDoc = await internshipapplicationssCollection.findOne({ _id: new ObjectId(id) })
  return internshipapplicationsDoc
}

InternshipApplications.prototype.getAllInternshipApplicationss = async function () {
  let internshipapplicationsDoc = await internshipapplicationssCollection.find({}).toArray()
  return internshipapplicationsDoc
}

InternshipApplications.prototype.deleteById = async function (id) {
  await internshipapplicationssCollection.deleteOne({ _id: new ObjectId(id) })
  return
}


InternshipApplications.prototype.getAppliedStudentsById = async function (jobId) {
  const applications = await internshipapplicationssCollection.aggregate([
    {
      $match: { jobId: new ObjectId(jobId) } // Filter applications for the specific job
    },
    {
      $lookup: {
        from: "students", // Join with the students collection
        localField: "studId", // Field in applications collection
        foreignField: "_id", // Field in students collection
        as: "studentData" // Alias for the joined data
      }
    },
    {
      $unwind: "$studentData" // Flatten the student data array
    }
  ]).toArray();

  return applications
}

module.exports = InternshipApplications;