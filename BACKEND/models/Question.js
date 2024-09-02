
                const bcrypt = require("bcryptjs");
                const Messages = require("../constants/Messages");
                const TryCatch = require("../helper/TryCatch");
                const { ObjectId } = require('mongodb');
                const questionsCollection = require("../db").db().collection("question");
                
                let Question = function (data) {
                  this.data = data;
                  this.errors = [];
                };
                
                Question.prototype.cleanUp = function () {
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
                    role: "question",
                    createdAt: new Date(),
                //predefined end
                answers: this.data.answers,
questionAuthor: this.data.questionAuthor,
flag: this.data.flag,
isDelete: this.data.isDelete,

                  };
                };
                
                Question.prototype.login = async function () {
                  let attemptedUser = await questionsCollection.findOne({ email: this.data.email });
                  this.cleanUp();
                  if (
                    attemptedUser &&
                    bcrypt.compareSync(this.data.password, attemptedUser.password)
                  ) {
                    this.data = attemptedUser;
                    return true;
                  } else {
                    return false;
                  }
                };
                
                Question.prototype.register =async function  () {
                    this.cleanUp();
                 
                      let salt = bcrypt.genSaltSync(10);
                      this.data.password = bcrypt.hashSync(this.data.password, salt);
                      await questionsCollection.insertOne(this.data);
                      return true
                    
                };
                
                Question.prototype.findByEmail = async function (email) {
                  let questionDoc = await questionsCollection.findOne({ email: email })
                  return questionDoc
                     
                };
                
                Question.prototype.doesEmailExist = async function (email) {
                 
                    let question = await questionsCollection.findOne({ email: email });
                    if (question) {
                      return true;
                    } else {
                      return false;
                    }
                  }
                
                Question.prototype.getById = async function (id){
                  let questionDoc = await questionsCollection.findOne({_id: new ObjectId(id)})
                  return questionDoc
                }
                
                Question.prototype.getAllQuestions = async function (){
                  let questionDoc = await questionsCollection.find({}).toArray()
                  return questionDoc
                }
                
                Question.prototype.deleteById = async function (id){
                 await questionsCollection.deleteOne({_id: new ObjectId(id)})
                  return 
                }
                
                module.exports = Question;             
            