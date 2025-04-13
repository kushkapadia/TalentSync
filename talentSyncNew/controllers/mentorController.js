const Messages = require("../constants/Message");
const JsonResponse = require("../helper/JsonResponse");
const TryCatch = require("../helper/TryCatch");
const Mentor = require("../models/Mentor");
const jwt = require("jsonwebtoken");
const Student = require("../models/Student");
const StudentInternships = require("../models/StudentInternships");


// how long a token lasts before expiring
const tokenLasts = "365d";


//LOGIN
// exports.apiLogin = async function (req, res) {
//   let mentor = new Mentor(req.body);

//   let result = await mentor.login();
//   if (result) {
//     let data = {
//       token: jwt.sign(
//         { _id: mentor.data._id, name: mentor.data.name, email: mentor.data.email },
//         process.env.JWTSECRET,
//         { expiresIn: tokenLasts }
//       ),
//       id: mentor.data._id,
//       name: mentor.data.name,
//       role: "mentor",
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
  let mentor = new Mentor(req.body)
  mentor.login().then(function (result) {
    req.session.user = { fName: mentor.data.name, lName: mentor.data.lName, email: mentor.data.email, _id: mentor.data._id, role: mentor.data.role }
    console.log("here")
    req.session.save(function () {
      res.redirect('/my-mentees')
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
//   let mentor = new Mentor(req.body);
//   console.log(req.body);

//   let result = await mentor.register();
//   if (result) {
//     let data = {
//       token: jwt.sign(
//         { _id: mentor.data._id, name: mentor.data.fName, email: mentor.data.email },
//         process.env.JWTSECRET,
//         { expiresIn: tokenLasts }
//       ),
//       id: mentor.data._id,
//       name: mentor.data.name,
//       role: "mentor",
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
  let mentor = new Mentor(req.body)
  mentor
    .register()
    .then(() => {
      req.session.user = { fName: mentor.data.name, lName: mentor.data.lName, _id: mentor.data._id, email: mentor.data.email, role: mentor.data.role }
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


//Mentor Exists?
exports.doesEmailExist = async function (req, res) {
  // throw new Error("This is a dummy exception for testing");
  console.log(Mentor.doesEmailExist(req.body.email));
  let emailBool = await Mentor.doesEmailExist(req.body.email);
  new JsonResponse(req, res).jsonSuccess(
    emailBool,
    new Messages().SUCCESSFULLY_RECEIVED
  );
};



exports.getById = async function (req, res) {
  let mentor = new Mentor()
  let mentorDoc = await mentor.getById(req.params.id)
  new JsonResponse(req, res).jsonSuccess(mentorDoc, new Messages().SUCCESSFULLY_RECEIVED)

}

exports.getByEmail = async function (req, res) {
  let mentor = new Mentor()
  let mentorDoc = await mentor.findByEmail(req.params.email)
  console.log(mentorDoc)
  new JsonResponse(req, res).jsonSuccess(mentorDoc, new Messages().SUCCESSFULLY_RECEIVED)
}

exports.getAllMentors = async function (req, res) {
  let mentor = new Mentor()
  let mentors = await mentor.getAllMentors()
  new JsonResponse(req, res).jsonSuccess(mentors, new Messages().SUCCESSFULLY_RECEIVED)
  return mentors
}

exports.deleteById = async function (req, res) {
  let mentor = new Mentor();
  await mentor.deleteById()
  new JsonResponse(req, res).jsonSuccess(true, new Messages().SUCCESSFULLY_DELETED)
}


//page related routes

exports.displayMyMenteePage = async function (req, res) {
  let student = new Student();
  let studentinternships = new StudentInternships();
  console.log(req.session.user._id);
  let myMentees = await student.getMenteesByMentorId(req.session.user._id); //passed the id of logged in user
  // let menteeInternships = await studentinternships.getRequestedInternshipsByMenteeId (req.params.id);
  // const arrayLength = menteeInternships.length;
  // console.log(menteeInternships);
  res.render('mentor/mentor-myMentees', {
    myMentees: myMentees,
    // arrayLength: arrayLength.toString()
  });
}

exports.displayMenteeProfile = async function (req, res) {

  console.log(req.params.id);
  let student = new Student();
  let studentinternships = new StudentInternships();
  let menteeInternships = await studentinternships.getRequestedInternshipsByMenteeId (req.params.id);
  let menteeDoc = await student.getById(req.params.id)
  res.render('mentor/mentee-profile',{
    menteeInternships: menteeInternships,
    menteeDoc: menteeDoc
  });
}
exports.displayMentorProfile = async function (req, res) {

  console.log(req.params.id);
  let student = new Student();
  let studentinternships = new StudentInternships();
  let menteeInternships = await studentinternships.getRequestedInternshipsByMenteeId (req.params.id);
  let menteeDoc = await student.getById(req.params.id)
  res.render('mentor/mentor-profilepage',{
    menteeInternships: menteeInternships,
    menteeDoc: menteeDoc
  });
}

