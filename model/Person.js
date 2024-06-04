
const { uniq, uniqueId } = require('lodash');
const mongoose = require('mongoose')

// define the person schema

const PersonSchema = mongoose.Schema(
   {
    name : {
        type : String,
        required : true,
    },
    age :{
        type : String,
        required : true,
    } , 
    work :{
        type :String,
        enum :['chef' , 'waiter' ,'manager' ],
        required : true
    },
    mobile :{
        type : String,
        required : true,
        unique : true,
    },
    email: { 
        type: String, 
        unique: true,
        
    } ,
    address :{
        type : String,
    },
    salary :{
        type : String,
    }
   }
)
 // now create model
 //Onceyou have defined a model, you can create, read, update, and delete
 //documents in the corresponding MongoDB collection

 const Person = mongoose.model('Person' , PersonSchema)
module.exports = Person;
