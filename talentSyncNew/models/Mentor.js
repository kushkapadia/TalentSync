const bcrypt = require("bcryptjs");
const Messages = require("../constants/Message");
const TryCatch = require("../helper/TryCatch");
const { ObjectId } = require('mongodb');
const mentorsCollection = require("../db").db().collection("mentors");

let Mentor = function (data) {
  this.data = data;
  this.errors = [];
};

Mentor.prototype.cleanUp = function () {
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
    role: "mentor",
    createdAt: new Date(),
    //predefined end
    profile_picture_url: this.data.profile_picture_url,
    department: this.data.department,
    expertise_areas: this.data.expertise_areas,
    education: this.data.education,
    mentorship_type: this.data.mentorship_type,
    active_status: this.data.active_status,

  };
};



Mentor.prototype.login = function () {
  console.log(this.data.email)
  return new Promise((resolve, reject) => {
    this.cleanUp()
    mentorsCollection.findOne({ email: this.data.email }).then((attemptedUser) => {
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

// Mentor.prototype.login = async function () {
//   let attemptedUser = await mentorsCollection.findOne({ email: this.data.email });
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

// Mentor.prototype.register = async function () {
//   this.cleanUp();

//   let salt = bcrypt.genSaltSync(10);
//   this.data.password = bcrypt.hashSync(this.data.password, salt);
//   await mentorsCollection.insertOne(this.data);
//   return true

// };

Mentor.prototype.register = function () {
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
      await mentorsCollection.insertOne(this.data)
      resolve()
    } else {
      reject(this.errors)
    }
  })
}

Mentor.prototype.findByEmail = async function (email) {
  let mentorDoc = await mentorsCollection.findOne({ email: email })
  return mentorDoc

};

Mentor.prototype.doesEmailExist = async function (email) {

  let mentor = await mentorsCollection.findOne({ email: email });
  if (mentor) {
    return true;
  } else {
    return false;
  }
}

Mentor.prototype.getById = async function (id) {
  let mentorDoc = await mentorsCollection.findOne({ _id: new ObjectId(id) })
  return mentorDoc
}

Mentor.prototype.getAllMentors = async function () {
  let mentorDoc = await mentorsCollection.find({}).toArray()
  return mentorDoc
}

Mentor.prototype.deleteById = async function (id) {
  await mentorsCollection.deleteOne({ _id: new ObjectId(id) })
  return
}



module.exports = Mentor;