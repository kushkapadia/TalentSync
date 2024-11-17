const Messages = require("../constants/Message")
const JsonResponse = require("../helper/JsonResponse")
const TryCatch = require("../helper/TryCatch")
const TestUser = require("../models/TestUser")
const jwt = require("jsonwebtoken")

// how long a token lasts before expiring
const tokenLasts = "365d"

//LOGIN
exports.apiLogin = async function (req, res) {
  let testUser = new TestUser(req.body)

  let result = await testUser.login()
  if (result) {
    let data = {
      token: jwt.sign({ _id: testUser.data._id, name: testUser.data.name, email: testUser.data.email }, process.env.JWTSECRET, { expiresIn: tokenLasts }),
      id: testUser.data._id,
      name: testUser.data.name,
      role: "testUser"
    }

    new JsonResponse(req, res).jsonSuccess(data, "Login success")
  } else {
    res.locals.data = {
      isValid: false,
      loginFailed: true
    }
    res.locals.message = new Messages().INVALID_CREDENTIALS
    new JsonResponse(req, res).jsonError()
  }
}

//REGISTER
// exports.apiRegister = async function (req, res) {
//   let testUser = new TestUser(req.body);
//   console.log(req.body);

//   let result = await testUser.register();
//   if (result) {
//     let data = {
//       token: jwt.sign(
//         { _id: testUser.data._id, name: testUser.data.fName, email: testUser.data.email },
//         process.env.JWTSECRET,
//         { expiresIn: tokenLasts }
//       ),
//       id: testUser.data._id,
//       name: testUser.data.name,
//       role: "testUser",
//     };
//     // new JsonResponse(req, res).jsonSuccess(data, "Register success");

//   } else {
//     res.locals.data = {
//       isVaild: false,
//       authorizationFailed: true,
//     };
//     res.locals.message = regErrors;
//     new JsonResponse(req, res).jsonError();
//   }
// };

exports.register = function (req, res) {
  let testUser = new TestUser(req.body)
  testUser
    .register()
    .then(() => {
      req.session.user = { fName: testUser.data.name, lName: testUser.data.lName, _id: testUser.data._id, email: testUser.data.email, role: testUser.data.role }
      req.session.save(function () {
        res.redirect("/")
        // res.send("Hiii")
      })
    })
    .catch(regErrors => {
      req.session.save(function () {
        res.redirect("/")
      })
    })
}

exports.home = async function (req, res) {
  console.log(req.session.user)
  if (req.session.user) {
    if (req.session.user.role == "testuser") {
      // fetch feed of posts for current user

      // console.log(events)
      res.render("studentDashboard")
    }
  } else {
    res.render("lockscreen")
  }
}

//TestUser Exists?
exports.doesEmailExist = async function (req, res) {
  // throw new Error("This is a dummy exception for testing");
  console.log(TestUser.doesEmailExist(req.body.email))
  let emailBool = await TestUser.doesEmailExist(req.body.email)
  new JsonResponse(req, res).jsonSuccess(emailBool, new Messages().SUCCESSFULLY_RECEIVED)
}

exports.getById = async function (req, res) {
  let testUser = new TestUser()
  let testuserDoc = await testUser.getById(req.params.id)
  new JsonResponse(req, res).jsonSuccess(testuserDoc, new Messages().SUCCESSFULLY_RECEIVED)
}

exports.getByEmail = async function (req, res) {
  let testUser = new TestUser()
  let testuserDoc = await testUser.findByEmail(req.params.email)
  console.log(testuserDoc)
  new JsonResponse(req, res).jsonSuccess(testuserDoc, new Messages().SUCCESSFULLY_RECEIVED)
}

exports.getAllTestUsers = async function (req, res) {
  let testUser = new TestUser()
  let testusers = await testUser.getAllTestUsers()
  new JsonResponse(req, res).jsonSuccess(testusers, new Messages().SUCCESSFULLY_RECEIVED)
  return testusers
}

exports.deleteById = async function (req, res) {
  let testUser = new TestUser()
  await testUser.deleteById()
  new JsonResponse(req, res).jsonSuccess(true, new Messages().SUCCESSFULLY_DELETED)
}
