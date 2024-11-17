const bcrypt = require("bcryptjs")
const Messages = require("../constants/Messages")
const TryCatch = require("../helper/TryCatch")
const { ObjectId } = require("mongodb")
const adminsCollection = require("../db").db().collection("admins")

let Admin = function (data) {
  this.data = data
  this.errors = []
}

Admin.prototype.cleanUp = function () {
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
    role: "admin",
    createdAt: new Date(),
    //predefined end
    department: this.data.department,
    employeeId: this.data.employeeId
  }
}

// Admin.prototype.login = async function () {
//   let attemptedUser = await adminsCollection.findOne({ email: this.data.email })
//   this.cleanUp()
//   if (attemptedUser && bcrypt.compareSync(this.data.password, attemptedUser.password)) {
//     this.data = attemptedUser
//     return true
//   } else {
//     return false
//   }
// }

Admin.prototype.login = function () {
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

// Admin.prototype.register = async function () {
//   this.cleanUp()

//   let salt = bcrypt.genSaltSync(10)
//   this.data.password = bcrypt.hashSync(this.data.password, salt)
//   await adminsCollection.insertOne(this.data)
//   return true
// }

Admin.prototype.register = function () {
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

Admin.prototype.findByEmail = async function (email) {
  let adminDoc = await adminsCollection.findOne({ email: email })
  return adminDoc
}

Admin.prototype.doesEmailExist = async function (email) {
  let admin = await adminsCollection.findOne({ email: email })
  if (admin) {
    return true
  } else {
    return false
  }
}

Admin.prototype.getById = async function (id) {
  let adminDoc = await adminsCollection.findOne({ _id: new ObjectId(id) })
  return adminDoc
}

Admin.prototype.getAllAdmins = async function () {
  let adminDoc = await adminsCollection.find({}).toArray()
  return adminDoc
}

Admin.prototype.deleteById = async function (id) {
  await adminsCollection.deleteOne({ _id: new ObjectId(id) })
  return
}

module.exports = Admin
