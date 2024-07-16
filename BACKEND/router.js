const express= require('express')
const router = express.Router()

let dummyController = require('./controllers/dummyController')

router.get('/', dummyController.test);

router.get("*", function(req, res){
    res.send("404")
})


module.exports = router;
