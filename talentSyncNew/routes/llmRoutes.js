const express = require('express');
const router = express.Router();
const AuthHelper = require('../helper/JWTAuthHelper');
const TryCatch = require('../helper/TryCatch');
const Messages = require('../constants/Message');
const LlmHelperOllama = require('../helper/LlmHelperOllama');



//imports here

//code here

//LlmUsingOllama --start

router.post("/ask-llm", AuthHelper.verifyToken, new TryCatch(LlmHelperOllama.llmModel).tryCatchGlobe())

//LlmUsingOllama --end

module.exports = router;