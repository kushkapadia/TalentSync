 
const Messages = require("../constants/Messages");
  const JsonResponse = require("../helper/JsonResponse");
  const TryCatch = require("../helper/TryCatch");
  const InternshipApplication = require("../models/InternshipApplication");
const jwt = require("jsonwebtoken");

exports.createInternshipApplication = async function(req, res){
  let internshipapplication = new InternshipApplication(req.body)
 let internshipapplicationDoc = await internshipapplication.createInternshipApplication();
 new JsonResponse(req, res).jsonSuccess(internshipapplicationDoc, "Created")
}

exports.getById = async function (req, res) {
  let internshipapplication = new InternshipApplication ()
let internshipapplicationDoc = await internshipapplication.getById(req.params.id)
new JsonResponse(req, res).jsonSuccess(internshipapplicationDoc, new Messages().SUCCESSFULLY_RECEIVED)

}


exports.getAllInternshipApplications = async function (req, res) {
  let internshipapplication = new InternshipApplication ()
let internshipapplications = await internshipapplication.getAllInternshipApplications()
new JsonResponse(req, res).jsonSuccess(internshipapplications, new Messages().SUCCESSFULLY_RECEIVED)
return internshipapplications
}

exports.deleteById = async function (req, res) {
  let internshipapplication = new InternshipApplication ();
await internshipapplication.deleteById()
new JsonResponse(req, res).jsonSuccess(true, new Messages().SUCCESSFULLY_DELETED)
}
    