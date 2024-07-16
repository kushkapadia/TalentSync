
const Dummy = require('../models/DummyModel')


exports.test = async function(req, res){
 let dummy = new Dummy();
await dummy.test(); 
   res.send("Working??")
   }