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


InternshipApplications.prototype.getAppliedInternshipByStudentId = async function (studId) {
 
console.log(studId)
  const applications = await internshipapplicationssCollection.aggregate([
    {
      $match: { studId: new ObjectId(studId) }
    },
    {
      $lookup: {
        from: 'jobposts',            // The name of the job collection
        localField: 'jobId',     // Field in AppliedInternship
        foreignField: '_id',     // Field in Job collection
        as: 'jobDetails'
      }
    },
    {
      $unwind: '$jobDetails'     // Flatten the jobDetails array
    },
    {
      $project: {
        _id: 1,
        status: 1,
        jobid: 1,
        studid: 1,
        company: '$jobDetails.companyName',
        position: '$jobDetails.jobTitle',
        stipend: '$jobDetails.salaryRange',
        location: '$jobDetails.jobLocation',
        duration: '$jobDetails.duration'
      }
    }
  ]).toArray();

  console.log("APPLICATIONS: ") 
  console.log(applications)
return applications
}





module.exports = InternshipApplications;