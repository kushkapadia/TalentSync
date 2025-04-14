const Messages = require("../constants/Message");
const JsonResponse = require("../helper/JsonResponse");
const TryCatch = require("../helper/TryCatch");
const InternshipApplications = require("../models/InternshipApplications");
const JobPost = require("../models/JobPost");
const Mentor = require("../models/Mentor");
const Student = require("../models/Student");
const jwt = require("jsonwebtoken");
const StudentInternships = require("../models/StudentInternships");


// how long a token lasts before expiring
const tokenLasts = "365d";


//LOGIN
// exports.apiLogin = async function (req, res) {
//   let student = new Student(req.body);

//   let result = await student.login();
//   if (result) {
//     let data = {
//       token: jwt.sign(
//         { _id: student.data._id, name: student.data.name, email: student.data.email },
//         process.env.JWTSECRET,
//         { expiresIn: tokenLasts }
//       ),
//       id: student.data._id,
//       name: student.data.name,
//       role: "student",
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
  let student = new Student(req.body)
  student.login().then(function (result) {
    req.session.user = { fName: student.data.name, lName: student.data.lName, email: student.data.email, _id: student.data._id, role: "student" }
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
//   let student = new Student(req.body);
//   console.log(req.body);

//   let result = await student.register();
//   if (result) {
//     let data = {
//       token: jwt.sign(
//         { _id: student.data._id, name: student.data.fName, email: student.data.email },
//         process.env.JWTSECRET,
//         { expiresIn: tokenLasts }
//       ),
//       id: student.data._id,
//       name: student.data.name,
//       role: "student",
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
  let student = new Student(req.body)
  student
    .register()
    .then(() => {
      req.session.user = { fName: student.data.name, lName: student.data.lName, _id: student.data._id, email: student.data.email, role: student.data.role }
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

//handles login based on rules
exports.home = async function (req, res) {
  console.log("hi")
  // console.log(req.session.user)
  if (req.session.user) {
    if (req.session.user.role == "student") {
      res.render("studentDashboard")
      // res.send("hi")
    } else if (req.session.user.role == "mentor") {
      let student = new Student();
      console.log(req.session.user._id);
      let myMentees = await student.getMenteesByMentorId(req.session.user._id); //passed the id of logged in user
      res.render("mentor/mentor-myMentees", {
        myMentees: myMentees
      })
    } else if (req.session.user.role == "admin") {
      res.render("admin/admin-dashboard")

    } else {
      res.send("?")
    }
  } else {
    res.render("lockscreen")
  }
}


//Student Exists?
exports.doesEmailExist = async function (req, res) {
  // throw new Error("This is a dummy exception for testing");
  console.log(Student.doesEmailExist(req.body.email));
  let emailBool = await Student.doesEmailExist(req.body.email);
  new JsonResponse(req, res).jsonSuccess(
    emailBool,
    new Messages().SUCCESSFULLY_RECEIVED
  );
};



exports.getById = async function (req, res) {
  let student = new Student()
  let studentDoc = await student.getById(req.params.id)
  new JsonResponse(req, res).jsonSuccess(studentDoc, new Messages().SUCCESSFULLY_RECEIVED)

}

exports.getByEmail = async function (req, res) {
  let student = new Student()
  let studentDoc = await student.findByEmail(req.params.email)
  console.log(studentDoc)
  new JsonResponse(req, res).jsonSuccess(studentDoc, new Messages().SUCCESSFULLY_RECEIVED)
}

exports.getAllStudents = async function (req, res) {
  let student = new Student()
  let students = await student.getAllStudents()
  new JsonResponse(req, res).jsonSuccess(students, new Messages().SUCCESSFULLY_RECEIVED)
  return students
}

exports.deleteById = async function (req, res) {
  let student = new Student();
  await student.deleteById()
  new JsonResponse(req, res).jsonSuccess(true, new Messages().SUCCESSFULLY_DELETED)
}

//page related routes

exports.displaySignUpPage = async function (req, res) {
  let mentor = new Mentor()
  let mentors = await mentor.getAllMentors();
  res.render('signUp', {
    mentors: mentors
  })
}

exports.displayApplyInternshipPage = async function (req, res) {
  let jobpost = new JobPost()
  let internships = await jobpost.getAllJobPosts() //later set this up to only find the applicable internships (based on graduation year, deadline, etc.)

  res.render('student-ApplyInternships', {
    internships: internships
  })
}

exports.displayAppliedInternshipPage = async function (req, res) {
  let internshipApplications = new InternshipApplications()
  internshipApplications = await internshipApplications.getAppliedInternshipByStudentId(req.params.id)
  res.render('student-AppliedInternships', {internshipApplications: internshipApplications})
}

exports.displayStudentProfile = async function (req, res) {

  console.log(req.params.id);
  // let student = new Student();
  // let studentinternships = new StudentInternships();
  res.render('./student-profilepage');
}
