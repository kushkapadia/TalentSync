const bcrypt = require("bcryptjs")
const Messages = require("../constants/Message")
const TryCatch = require("../helper/TryCatch")
const { ObjectId } = require("mongodb")
const testusersCollection = require("../db").db().collection("testuser")

let TestUser = function (data) {
  this.data = data
  this.errors = []
}

TestUser.prototype.cleanUp = function () {
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
    role: "testuser",
    createdAt: new Date()
    //predefined end
  }
}

TestUser.prototype.login = async function () {
  let attemptedUser = await testusersCollection.findOne({ email: this.data.email })
  this.cleanUp()
  if (attemptedUser && bcrypt.compareSync(this.data.password, attemptedUser.password)) {
    this.data = attemptedUser
    return true
  } else {
    return false
  }
}

TestUser.prototype.register = function () {
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
      await testusersCollection.insertOne(this.data)
      resolve()
    } else {
      reject(this.errors)
    }
  })
}

TestUser.prototype.findByEmail = async function (email) {
  let testuserDoc = await testusersCollection.findOne({ email: email })
  return testuserDoc
}

TestUser.prototype.doesEmailExist = async function (email) {
  let testuser = await testusersCollection.findOne({ email: email })
  if (testuser) {
    return true
  } else {
    return false
  }
}

TestUser.prototype.getById = async function (id) {
  let testuserDoc = await testusersCollection.findOne({ _id: new ObjectId(id) })
  return testuserDoc
}

TestUser.prototype.getAllTestUsers = async function () {
  let testuserDoc = await testusersCollection.find({}).toArray()
  return testuserDoc
}

TestUser.prototype.deleteById = async function (id) {
  await testusersCollection.deleteOne({ _id: new ObjectId(id) })
  return
}

module.exports = TestUser
