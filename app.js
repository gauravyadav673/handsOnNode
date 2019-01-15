//Npm Modules
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
const passport = require('passport');
var mongoose = require('mongoose');

//Self Made Requires
routes = require('./routes');
const settings = require('./settings.js');

//settings app.js
const app = express();
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({extended:true}));


//Request Handlers
app.get('/',routes);

//Listener
app.listen(settings.port , () => console.log('App listening on port ' + settings.port));
