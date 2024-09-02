 
    const Messages = require("../constants/Messages");
const JsonResponse = require("../helper/JsonResponse");
const TryCatch = require("../helper/TryCatch");
const Question = require("../models/Question");
const jwt = require("jsonwebtoken");


// how long a token lasts before expiring
const tokenLasts = "365d";


//LOGIN
exports.apiLogin = async function (req, res) {
  let question = new Question(req.body);

  let result = await question.login();
  if (result) {
    let data = {
      token: jwt.sign(
        { _id: question.data._id, name: question.data.name, email: question.data.email },
        process.env.JWTSECRET,
        { expiresIn: tokenLasts }
      ),
      id: question.data._id,
      name: question.data.name,
      role: "question",
    };

    new JsonResponse(req, res).jsonSuccess(data, "Login success");
  } else {
    res.locals.data = {
      isValid: false,
      loginFailed: true,
    };
    res.locals.message = new Messages().INVALID_CREDENTIALS;
    new JsonResponse(req, res).jsonError();
  }
};

//REGISTER
exports.apiRegister = async function (req, res) {
  let question = new Question(req.body);
  console.log(req.body);

  let result = await question.register();
  if (result) {
    let data = {
      token: jwt.sign(
        { _id: question.data._id, name: question.data.fName, email: question.data.email },
        process.env.JWTSECRET,
        { expiresIn: tokenLasts }
      ),
      id: question.data._id,
      name: question.data.name,
      role: "question",
    };
    new JsonResponse(req, res).jsonSuccess(data, "Register success");
  } else {
    res.locals.data = {
      isVaild: false,
      authorizationFailed: true,
    };
    res.locals.message = regErrors;
    new JsonResponse(req, res).jsonError();
  }
};

//Question Exists?
exports.doesEmailExist = async function (req, res) {
  // throw new Error("This is a dummy exception for testing");
  console.log(Question.doesEmailExist(req.body.email));
  let emailBool = await Question.doesEmailExist(req.body.email);
  new JsonResponse(req, res).jsonSuccess(
    emailBool,
    new Messages().SUCCESSFULLY_RECEIVED
  );
};



exports.getById = async function(req, res){
  let question = new Question()
  let questionDoc = await question.getById(req.params.id)
  new JsonResponse(req, res).jsonSuccess(questionDoc, new Messages().SUCCESSFULLY_RECEIVED)

}

exports.getByEmail = async function(req, res){
  let question = new Question()
  let questionDoc = await question.findByEmail(req.params.email)
  console.log(questionDoc)
  new JsonResponse(req, res).jsonSuccess(questionDoc, new Messages().SUCCESSFULLY_RECEIVED)
}

exports.getAllQuestions = async function(req, res){
  let question = new Question()
  let questions = await question.getAllQuestions()
  new JsonResponse(req, res).jsonSuccess(questions, new Messages().SUCCESSFULLY_RECEIVED)
  return questions
}

exports.deleteById= async function(req, res){
 let question = new Question();
 await question.deleteById()
 new JsonResponse(req, res).jsonSuccess(true, new Messages().SUCCESSFULLY_DELETED)
}
    