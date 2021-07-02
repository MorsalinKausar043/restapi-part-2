const mongoose = require("mongoose");
const validator = require('validator') ;

const dataSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        uppercase : true,
        minlength : [3 , "not avilable"],
        trim : true
    },
    email :{
        type : String,
        required : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('invalid email')
            }
        },
        unique : true
    },
    number : {
        type : Number,
        unique : true,
        minlength : [10, "unavilable number"] ,
        unique : true,
        maxlength : 20
    },
    address : {
        type : String,
        lowercase : true,
    },
    date : {
        type : Date,
        default : Date.now
    }
});

const StudentList = new mongoose.model("StudentList" , dataSchema);

module.exports = StudentList ;