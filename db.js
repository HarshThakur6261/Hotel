let mongoose  = require('mongoose')
require('dotenv').config()

//const Local_URL = 'mongodb://127.0.0.1:27017/Hotels' // Hotels it is the name of the database
const Global_URL = process.env.Global_URL


 mongoose.connect(Global_URL , {
 
});
const db = mongoose.connection;

db.on('connected', () =>{
    console.log("Database connected")
})

module.exports ={
    db
}
