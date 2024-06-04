const express = require('express')
const db = require('./db')
const Person = require('./model/Person')
const Menu = require('./model/MenuItem')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())


//import router

const Personrouter = require('./Router/PersonRouter')

app.use('/Person' , Personrouter)

const MenuRouter = require('./Router/MenuRouter');
app.use('/Menu' , MenuRouter);

require('dotenv').config()
const Port = process.env.Port || 3000;
app.listen( Port, () =>{
    console.log("listning on port 3000")
})
