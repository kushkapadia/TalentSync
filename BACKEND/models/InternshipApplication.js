
                const bcrypt = require("bcryptjs");
                const Messages = require("../constants/Messages");
                const TryCatch = require("../helper/TryCatch");
                const { ObjectId } = require('mongodb');
                const jobpostsCollection = require("../db").db().collection("jobpost");
                
                let JobPost = function (data) {
                  this.data = data;
                  this.errors = [];
                };
                
                JobPost.prototype.cleanUp = function () {
                  // get rid of any bogus properties
                  this.data = {
                      
                jobId: this.data.jobId,
jobTitle: this.data.jobTitle,
companyName: this.data.companyName,
jobLocation: this.data.jobLocation,
jobType: this.data.jobType,
jobDescription: this.data.jobDescription,
responsibilities: this.data.responsibilities,
qualifications: this.data.qualifications,
skillsRequired: this.data.skillsRequired,
experienceRequired: this.data.experienceRequired,
educationRequired: this.data.educationRequired,
salaryRange: this.data.salaryRange,
benefits: this.data.benefits,
applicationDeadline: this.data.applicationDeadline,
contactPerson: this.data.contactPerson,
contactEmail: this.data.contactEmail,
contactPhone: this.data.contactPhone,
applicationLink: this.data.applicationLink,
eligibility: this.data.eligibility,
remoteWork: this.data.remoteWork,
requiredLanguages: this.data.requiredLanguages,
travelRequirement: this.data.travelRequirement,
workSchedule: this.data.workSchedule,
companyWebsite: this.data.companyWebsite,
companyLogo: this.data.companyLogo,
postedDate: this.data.postedDate,
updatedDate: this.data.updatedDate,
applicationInstructions: this.data.applicationInstructions,
taskTobeZCompleted: this.data.taskTobeZCompleted,
TaskDeadline: this.data.TaskDeadline,
taskTitle: this.data.taskTitle,
TaskDesc: this.data.TaskDesc,
TaskSubmissioLink: this.data.TaskSubmissioLink,
queryMailId: this.data.queryMailId,
extraNotes: this.data.extraNotes,

                //predfined start
                    createdAt: new Date(),
                //predefined end
                  };
                };

                JobPost.prototype.createJobPost = async function(){
                  this.cleanUp()
                 const jobpostDoc = await jobpostsCollection.insertOne(this.data);
                  return jobpostDoc
                }
                              
                JobPost.prototype.getById = async function (id){
                  let jobpostDoc = await jobpostsCollection.findOne({_id: new ObjectId(id)})
                  return jobpostDoc
                }
                
                JobPost.prototype.getAllJobPosts = async function (){
                  let jobpostDoc = await jobpostsCollection.find({}).toArray()
                  return jobpostDoc
                }
                
                JobPost.prototype.deleteById = async function (id){
                 await jobpostsCollection.deleteOne({_id: new ObjectId(id)})
                  return 
                }
                
                module.exports = JobPost;             
            
                const bcrypt = require("bcryptjs");
                const Messages = require("../constants/Messages");
                const TryCatch = require("../helper/TryCatch");
                const { ObjectId } = require('mongodb');
                const internshipapplicationsCollection = require("../db").db().collection("internshipapplication");
                
                let InternshipApplication = function (data) {
                  this.data = data;
                  this.errors = [];
                };
                
                InternshipApplication.prototype.cleanUp = function () {
                  // get rid of any bogus properties
                  this.data = {
                      
                jobId: this.data.jobId,
jobTitle: this.data.jobTitle,
companyName: this.data.companyName,
jobLocation: this.data.jobLocation,
jobType: this.data.jobType,
jobDescription: this.data.jobDescription,
responsibilities: this.data.responsibilities,
qualifications: this.data.qualifications,
skillsRequired: this.data.skillsRequired,
experienceRequired: this.data.experienceRequired,
educationRequired: this.data.educationRequired,
salaryRange: this.data.salaryRange,
benefits: this.data.benefits,
applicationDeadline: this.data.applicationDeadline,
contactPerson: this.data.contactPerson,
contactEmail: this.data.contactEmail,
contactPhone: this.data.contactPhone,
applicationLink: this.data.applicationLink,
eligibility: this.data.eligibility,
remoteWork: this.data.remoteWork,
requiredLanguages: this.data.requiredLanguages,
travelRequirement: this.data.travelRequirement,
workSchedule: this.data.workSchedule,
companyWebsite: this.data.companyWebsite,
companyLogo: this.data.companyLogo,
postedDate: this.data.postedDate,
updatedDate: this.data.updatedDate,
applicationInstructions: this.data.applicationInstructions,
taskTobeZCompleted: this.data.taskTobeZCompleted,
TaskDeadline: this.data.TaskDeadline,
taskTitle: this.data.taskTitle,
TaskDesc: this.data.TaskDesc,
TaskSubmissioLink: this.data.TaskSubmissioLink,
queryMailId: this.data.queryMailId,
extraNotes: this.data.extraNotes,
jobId: this.data.jobId,
studentId: this.data.studentId,
applicationStatus: this.data.applicationStatus,
resumeLink: this.data.resumeLink,
coverLetter: this.data.coverLetter,
notes: this.data.notes,
interviewScheduled: this.data.interviewScheduled,
interviewDate: this.data.interviewDate,
feedback: this.data.feedback,
rating: this.data.rating,
certificate: this.data.certificate,

                //predfined start
                    createdAt: new Date(),
                //predefined end
                  };
                };

                InternshipApplication.prototype.createInternshipApplication = async function(){
                  this.cleanUp()
                 const internshipapplicationDoc = await internshipapplicationsCollection.insertOne(this.data);
                  return internshipapplicationDoc
                }
                              
                InternshipApplication.prototype.getById = async function (id){
                  let internshipapplicationDoc = await internshipapplicationsCollection.findOne({_id: new ObjectId(id)})
                  return internshipapplicationDoc
                }
                
                InternshipApplication.prototype.getAllInternshipApplications = async function (){
                  let internshipapplicationDoc = await internshipapplicationsCollection.find({}).toArray()
                  return internshipapplicationDoc
                }
                
                InternshipApplication.prototype.deleteById = async function (id){
                 await internshipapplicationsCollection.deleteOne({_id: new ObjectId(id)})
                  return 
                }
                
                module.exports = InternshipApplication;             
            