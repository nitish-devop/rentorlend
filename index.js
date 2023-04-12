const dotenv = require('dotenv');
dotenv.config({path : './config/config.env'});

const express = require('express');
const app = express();
const db = require('./config/mongoose');




const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


// setup express static files
app.use(express.static('./assets'));


// template engine 
app.set('view engine','ejs');
app.set('views','./views');

// express-ejs-layouts
app.use(require('express-ejs-layouts'))

// extract styles and scripts from pages to layout.ejs
app.set('layout extractStyles',true);
// app.set('layout extractScripts',true);





app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(cookieParser());



// load express router 
app.use('/',require('./routes/index'));





const server = app.listen(process.env.PORT, function(err) {
    if(err)
        console.log(`Error in listening to server : ${err}`);
    console.log(`Server is runnig on port ${process.env.PORT}`);
})

