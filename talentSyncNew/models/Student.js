const bcrypt = require("bcryptjs");
const Messages = require("../constants/Message");
const TryCatch = require("../helper/TryCatch");
const { ObjectId } = require('mongodb');
const studentsCollection = require("../db").db().collection("students");

let Student = function (data) {
  this.data = data;
  this.errors = [];
};

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
    profileImageLink: this.data.profileImageLink,
    dateOfBirth: new Date(this.data.dateOfBirth),
    gender: this.data.gender,
    enrollmentYear: this.data.enrollmentYear,
    graduationYear: this.data.graduationYear,
    course: this.data.course,
    department: this.data.department,
    // currentSemester: this.data.currentSemester,
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
    mentorId: new ObjectId(this.data.mentorId),
    numberOfPendingInternshipRequest: 0, //this tells the count of no.of internships left to be a[proved by the mentor
    role: "student",
    totalInternshipHours: 0,
    createdAt: new Date()
  }
};

// Student.prototype.login = async function () {
//   let attemptedUser = await studentsCollection.findOne({ email: this.data.email });
//   this.cleanUp();
//   if (
//     attemptedUser &&
//     bcrypt.compareSync(this.data.password, attemptedUser.password)
//   ) {
//     this.data = attemptedUser;
//     return true;
//   } else {
//     return false;
//   }
// };


Student.prototype.login = function () {
  console.log(this.data.email)
  return new Promise((resolve, reject) => {
    this.cleanUp()
    studentsCollection.findOne({ email: this.data.email }).then((attemptedUser) => {
      console.log("Found! based on email")
      console.log(attemptedUser)
      if (attemptedUser && bcrypt.compareSync(this.data.password, attemptedUser.password)) {
        this.data = attemptedUser
        console.log(this.data)
        resolve(this.data)
      } else {
        console.log("Invalidd")
        reject("Invalid username / password.")
      }
    }).catch(function () {
      console.log("Failed")
      reject("Please try again later.")

    })
  })
}


Student.prototype.register = function () {
  return new Promise(async (resolve, reject) => {
    // Step #1: Validate user data
    //   await this.validate()

    // Step #2: Only if there are no validation errors
    // then save the user data into a database
    console.log("Helooooooooooooooooooooooooooooooooooooooooooooooo")
    console.log(this.data)
    this.cleanUp()
    console.log(this.data)
    if (!this.errors.length) {
      // hash user password
      let salt = bcrypt.genSaltSync(10)
      this.data.password = bcrypt.hashSync(this.data.password, salt)
      await studentsCollection.insertOne(this.data)
      resolve()
    } else {
      reject(this.errors)
    }
  })
}

Student.prototype.findByEmail = async function (email) {
  let studentDoc = await studentsCollection.findOne({ email: email })
  return studentDoc

};

Student.prototype.doesEmailExist = async function (email) {

  let student = await studentsCollection.findOne({ email: email });
  if (student) {
    return true;
  } else {
    return false;
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

Student.prototype.getMenteesByMentorId = async function (mentorId) {
  let mentees = await studentsCollection.find({ mentorId: new ObjectId(mentorId) }).toArray()
  return mentees
}


Student.prototype.updateTotalHours = async function(studentId, totalHours) {
  const result = await studentsCollection.updateOne(
    { _id: new ObjectId(studentId) },
    { $set: { totalInternshipHours: totalHours } }
  );

  console.log(`${result.modifiedCount} student's hours updated.`);
}

module.exports = Student;