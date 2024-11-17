const Messages = require("../constants/Message");
const JsonResponse = require("../helper/JsonResponse");
const TryCatch = require("../helper/TryCatch");
const Admin = require("../models/Admin");
const jwt = require("jsonwebtoken");


// how long a token lasts before expiring
const tokenLasts = "365d";


//LOGIN
// exports.apiLogin = async function (req, res) {
//   let admin = new Admin(req.body);

//   let result = await admin.login();
//   if (result) {
//     let data = {
//       token: jwt.sign(
//         { _id: admin.data._id, name: admin.data.name, email: admin.data.email },
//         process.env.JWTSECRET,
//         { expiresIn: tokenLasts }
//       ),
//       id: admin.data._id,
//       name: admin.data.name,
//       role: "admin",
//     };

//     new JsonResponse(req, res).jsonSuccess(data, "Login success");
//   } else {
//     res.locals.data = {
//       isValid: false,
//       loginFailed: true,
//     };
//     res.locals.message = new Messages().INVALID_CREDENTIALS;
//     new JsonResponse(req, res).jsonError();
//   }
// };

exports.login = function (req, res) {
  console.log(req.body)
  let admin = new Admin(req.body)
  admin.login().then(function (result) {
    req.session.user = { fName: admin.data.name, lName: admin.data.lName, email: admin.data.email, _id: admin.data._id, role: admin.data.role }
    console.log("here")
    req.session.save(function () {
      res.redirect('/')
    })
  }).catch(function (e) {
    console.log(e);
    // req.flash('errors', e)
    // req.session.save(function () {
    res.redirect('/')
    // })
  })
}


//REGISTER
// exports.apiRegister = async function (req, res) {
//   let admin = new Admin(req.body);
//   console.log(req.body);

//   let result = await admin.register();
//   if (result) {
//     let data = {
//       token: jwt.sign(
//         { _id: admin.data._id, name: admin.data.fName, email: admin.data.email },
//         process.env.JWTSECRET,
//         { expiresIn: tokenLasts }
//       ),
//       id: admin.data._id,
//       name: admin.data.name,
//       role: "admin",
//     };
//     new JsonResponse(req, res).jsonSuccess(data, "Register success");
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
  let admin = new Admin(req.body)
  admin
    .register()
    .then(() => {
      req.session.user = { fName: admin.data.name, lName: admin.data.lName, _id: admin.data._id, email: admin.data.email, role: admin.data.role }
      req.session.save(function () {
        res.redirect("/")
      })
    })
    .catch(regErrors => {
      req.session.save(function () {
        res.redirect("/")
      })
    })
}

//Admin Exists?
exports.doesEmailExist = async function (req, res) {
  // throw new Error("This is a dummy exception for testing");
  console.log(Admin.doesEmailExist(req.body.email));
  let emailBool = await Admin.doesEmailExist(req.body.email);
  new JsonResponse(req, res).jsonSuccess(
    emailBool,
    new Messages().SUCCESSFULLY_RECEIVED
  );
};



exports.getById = async function (req, res) {
  let admin = new Admin()
  let adminDoc = await admin.getById(req.params.id)
  new JsonResponse(req, res).jsonSuccess(adminDoc, new Messages().SUCCESSFULLY_RECEIVED)

}

exports.getByEmail = async function (req, res) {
  let admin = new Admin()
  let adminDoc = await admin.findByEmail(req.params.email)
  console.log(adminDoc)
  new JsonResponse(req, res).jsonSuccess(adminDoc, new Messages().SUCCESSFULLY_RECEIVED)
}

exports.getAllAdmins = async function (req, res) {
  let admin = new Admin()
  let admins = await admin.getAllAdmins()
  new JsonResponse(req, res).jsonSuccess(admins, new Messages().SUCCESSFULLY_RECEIVED)
  return admins
}

exports.deleteById = async function (req, res) {
  let admin = new Admin();
  await admin.deleteById()
  new JsonResponse(req, res).jsonSuccess(true, new Messages().SUCCESSFULLY_DELETED)
}