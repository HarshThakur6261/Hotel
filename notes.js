/* make a folder 
   do npm init
   install nodemon - help to regular monitor the file i change occur automatically run the file

*/


// To import any file  syntax :- let variable_name = require('./filetobeimported_name.js')
var i = require('./server.js')
// by importing file we cannot access all member variable of impoerted file if the impoerted file is not export it variable
let a = 10; 
function add(a , b){
console.log(a+b)
}
// to export these two 
module.exports = {
    a,
    add
}
// loadash : this libaray is used to deal with data to perfrom certain operation on it
 var _ = require('lodash')

let b = [1 ,2 ,5 ,1 ,3 ,1,2]
let data = _.uniq(b);
console.log(data)

// express



