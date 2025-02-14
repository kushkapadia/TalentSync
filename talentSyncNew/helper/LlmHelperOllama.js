// const { ChatOllama } = require("@langchain/ollama")
// const { ChatPromptTemplate } = require("@langchain/core/prompts")
// const { SystemMessage, HumanMessage, AIMessage } = require("@langchain/core/messages")
// const JsonResponse = require("./JsonResponse")
// const Messages = require("../constants/Message")
// const axios = require("axios")
// const conversationHistories = new Map()

// const getOrCreateHistory = sessionId => {
//   if (!conversationHistories.has(sessionId)) {
//     // Initialize conversation history with the system message if it doesn't exist
//       // conversationHistories.set(sessionId, [new SystemMessage("You are a friend of anyone who talks to you! Your name is Servi")]) //Input The system prompt here.
//       conversationHistories.set(sessionId, [new SystemMessage("You are a Job description, text extractor (Strictly give  the output in json format). Break the jd and break into the following fields. Provide N/A if not found. The fields are: ⁠jobTitle, ⁠companyName,⁠jobLocation,⁠jobType⁠jobDescriptionresponsibilities,⁠qualifications,⁠skillsRequired,⁠experienceRequired,⁠educationRequired,⁠salaryRange,⁠benefits,⁠applicationDeadline,⁠contactPerson,⁠contactEmail,⁠contactPhone,⁠applicationLink,⁠eligibility,⁠remoteWork,⁠requiredLanguages,⁠travelRequirement,⁠workSchedule,⁠companyWebsite,⁠companyLogo,⁠postedDate,⁠updatedDate,⁠applicationInstructions,⁠taskToBeCompleted,⁠TaskDeadline,⁠taskTitle,⁠TaskDesc,⁠TaskSubmissionLink,⁠queryMailId,⁠extraNotes")])
    
//     }
//   return conversationHistories.get(sessionId)
// }

// exports.llmModel = async function (req, res) {
//   const chatModel = new ChatOllama({
//     baseUrl: "http://localhost:11434", // Default value
//     model: "llama3.1" //Change the name of the model to the one you want to use.
//   })
//   console.log(req.apiUser._id)
//   const sessionId = req.apiUser._id // Using a header for session ID;
//   const conversationHistory = getOrCreateHistory(sessionId)

//   const sendMessage = async input => {
//     // Add user input to conversation history
//     conversationHistory.push(new HumanMessage(input))

//     // Create the prompt with the current conversation history
//     const prompt = ChatPromptTemplate.fromMessages(conversationHistory)

//     // Call the model with the updated prompt
//     const response = await prompt.pipe(chatModel).invoke({})
//     // Add model's response to the conversation history
//     conversationHistory.push(new AIMessage(response.content))
//     // Return the response content
//     return response.content
//   }

//   // Extract the user input from the request body
//   console.log(req.body.input)
//   const userInput = req.body.input

//   // Send the user input to the model and get the response
//   const modelResponse = await sendMessage(userInput)
//   // res.status(200).json({ response: modelResponse })

//   new JsonResponse(req, res).jsonSuccess(modelResponse, new Messages().SUCCESSFULLY_GENERATED)
// }

// const { ChatOllama } = require("@langchain/ollama");
// const { ChatPromptTemplate } = require("@langchain/core/prompts");
// const { SystemMessage, HumanMessage } = require("@langchain/core/messages");
// const JsonResponse = require("./JsonResponse");
// const Messages = require("../constants/Message");

// exports.llmModel = async function (req, res) {
//   const chatModel = new ChatOllama({
//     baseUrl: "http://localhost:11434", // Default value
//     model: "llama3.1", // Change the model name as needed
//   });

//   // console.log(req.apiUser._id);

//   // Extract the user input from the request body
//   console.log(req.body.input);
//   const userInput = req.body.input;

//   // Define system message (acting as an instruction for the model)
//   const systemMessage = new SystemMessage(
//     "You are a Job description text extractor (Strictly give the output in JSON format, always specify json word so that i can extract using regex). Break the JD into the following fields. Provide N/A if not found. The fields are: jobTitle, companyName, jobLocation, jobType, jobDescription, responsibilities, qualifications, skillsRequired, experienceRequired, educationRequired, salaryRange, benefits, applicationDeadline, contactPerson, contactEmail, contactPhone, applicationLink, eligibility, remoteWork, requiredLanguages, travelRequirement, workSchedule, companyWebsite, companyLogo, postedDate, updatedDate, applicationInstructions, taskToBeCompleted, TaskDeadline, taskTitle, TaskDesc, TaskSubmissionLink, queryMailId, extraNotes."
//   );

//   // Create the prompt with the system message and user input
//   const prompt = ChatPromptTemplate.fromMessages([systemMessage, new HumanMessage(userInput)]);

//   try {
//     // Call the model with the generated prompt
//     const response = await prompt.pipe(chatModel).invoke({});
    
//     // Return the model's response
//     new JsonResponse(req, res).jsonSuccess(response.content, new Messages().SUCCESSFULLY_GENERATED);
//   } catch (error) {
//     console.error("LLM Error:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

const { ChatOllama } = require("@langchain/ollama");
const { ChatPromptTemplate } = require("@langchain/core/prompts");
const { SystemMessage, HumanMessage } = require("@langchain/core/messages");
const JsonResponse = require("./JsonResponse");
const Messages = require("../constants/Message");

exports.llmModel = async function (req, res) {
  const chatModel = new ChatOllama({
    baseUrl: "http://localhost:11434", // Ensure Ollama is running
    model: "llama3.1", // Use appropriate model
  });

  const userInput = req.body.input;
  console.log("User input:", userInput);
  // System message instructing the LLM
  const systemMessage = new SystemMessage(
    `You are a Job Description text extractor.
    STRICTLY return only valid JSON output. Do NOT include extra text.
    Output format (return "N/A" if not found):
    {
      "jobTitle": "",
      "companyName": "",
      "jobLocation": "",
      "jobType": "",
      "jobDescription": "",
      "responsibilities": "",
      "qualifications": "",
      "skillsRequired": "",
      "experienceRequired": "",
      "educationRequired": "",
      "salaryRange": "",
      "benefits": "",
      "applicationDeadline": "",
      "contactPerson": "",
      "contactEmail": "",
      "contactPhone": "",
      "applicationLink": "",
      "eligibility": "",
      "remoteWork": "",
      "requiredLanguages": "",
      "travelRequirement": "",
      "workSchedule": "",
      "companyWebsite": "",
      "companyLogo": "",
      "postedDate": "",
      "updatedDate": "",
      "applicationInstructions": "",
      "taskToBeCompleted": "",
      "TaskDeadline": "",
      "taskTitle": "",
      "TaskDesc": "",
      "TaskSubmissionLink": "",
      "queryMailId": "",
      "extraNotes": ""
    }`
  );

  const prompt = ChatPromptTemplate.fromMessages([systemMessage, new HumanMessage(userInput)]);

  try {
    // Call the LLM model
    const response = await prompt.pipe(chatModel).invoke({});
    
    // Ensure response is JSON
    let jsonResponse;
    try {
      jsonResponse = JSON.parse(response.content);
    } catch (parseError) {
      console.error("Invalid JSON received:", response.content);
      return res.status(500).json({ error: "Failed to parse LLM response as JSON" });
    }

    // Return the extracted structured JSON
    new JsonResponse(req, res).jsonSuccess(jsonResponse, new Messages().SUCCESSFULLY_GENERATED);
  } catch (error) {
    console.error("LLM Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
