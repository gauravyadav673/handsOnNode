//Npm Modules
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
const passport = require('passport');
var mongoose = require('mongoose');
const session = require('express-session');

//Self Made Requires
const routes = require('./routes');
const authentication = require('./Auth');
const settings = require('./settings.js');

//settings app.js
const app = express();
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({extended:true}));

//handle sessions
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

//passport
app.use(passport.initialize());
app.use(passport.session());


//Request Handlers
app.get('/',routes);
app.get('/signup',routes);
app.post('/signup',routes);

//Listener
app.listen(settings.port,()=> console.log('App listening on port ' + settings.port));
