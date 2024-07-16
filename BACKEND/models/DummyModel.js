const studentsCollection = require('../db').db().collection("students")
// const validator = require('validator')
// const md5 = require('md5')
// const bcrypt = require("bcryptjs")

let Dummy = function(data){
    this.data = data
    this.errors = []
}

Dummy.prototype.test = async function(){
    console.log("In model");
    await studentsCollection.insertOne({name:"kush kapadia"})
}



module.exports = Dummy
