const bcrypt = require("bcryptjs");
const Messages = require("../constants/Message");
const TryCatch = require("../helper/TryCatch");
const { ObjectId } = require('mongodb');
const studentinternshipssCollection = require("../db").db().collection("studentinternships");

let StudentInternships = function (data) {
  this.data = data;
  this.errors = [];
};

StudentInternships.prototype.cleanUp = function () {
  // get rid of any bogus properties
  this.data = {

    companyName: this.data.companyName,
    startDate: Date(this.data.startDate),
    endDate: Date(this.data.endDate),
    stipend: Number(this.data.stipend),
    role: this.data.role,
    location: this.data.location,
    mode: this.data.mode,
    companyWebsite: this.data.companyWebsite,
    internshipReport: this.data.internshipReport,
    offerLetter: this.data.offerLetter,
    completionCertificate: this.data.completionCertificate,
    additionalDoc: this.data.additionalDoc,
    notes: this.data.notes,
    studentId: new ObjectId(this.data.studentId),
    status: "pending", //approved or rejected, default is pending
    //predfined start
    createdAt: new Date(),
    //predefined end
  };
};

StudentInternships.prototype.createStudentInternships = async function () {
  this.cleanUp()
  const studentinternshipsDoc = await studentinternshipssCollection.insertOne(this.data);
  return studentinternshipsDoc
}

StudentInternships.prototype.getById = async function (id) {
  let studentinternshipsDoc = await studentinternshipssCollection.findOne({ _id: new ObjectId(id) })
  return studentinternshipsDoc
}

StudentInternships.prototype.getRequestedInternshipsByMenteeId = async function (id) {
  let studentinternships = await studentinternshipssCollection.find({ studentId: new ObjectId(id) }).toArray()
  return studentinternships
}

StudentInternships.prototype.updateById = async function (id, data) {
  let studentinternshipsDoc = await studentinternshipssCollection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    {
      $set: {
        ...data,
        updatedAt: new Date(),
      },
    },
    {
      returnDocument: "after",
    }
  );

  return studentinternshipsDoc;
};

StudentInternships.prototype.getAllStudentInternshipss = async function () {
  let studentinternshipsDoc = await studentinternshipssCollection.find({}).toArray()
  return studentinternshipsDoc
}

StudentInternships.prototype.deleteById = async function (id) {
  await studentinternshipssCollection.deleteOne({ _id: new ObjectId(id) })
  return
}

StudentInternships.prototype.acceptInternship = async function (id) {
  await studentinternshipssCollection.findOneAndUpdate(
    { _id: new ObjectId(id) }, 
    { $set: { status: "approved" } }
  );
  
  return
}

StudentInternships.prototype.rejectInternship = async function (id) {
  await studentinternshipssCollection.findOneAndUpdate(
    { _id: new ObjectId(id) }, 
    { $set: { status: "approved" } }
  );
  
  return
}

module.exports = StudentInternships;