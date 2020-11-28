const express = require('express');
const cors = require('cors');

const cookieParser= require('cookie-parser')

// this is where the secret key is stored and accessed
require('dotenv').config({path:__dirname + '/../.env'});
// -----------------------------------------------------

console.log(process.env.SECRET_KEY)


const app= express();
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// origin has to be from where client is making requests to server
app.use(cors({
    credentials:true,
    origin: 'http://localhost:3000' 
}));
// -------------------------------------------------------------

require('./config/mongoose.config');
require('./routes/Project.routes')(app);
require('./routes/Users.routes')(app);

app.listen(8000, ()=>{
    console.log("Listening at port 8000")
})





