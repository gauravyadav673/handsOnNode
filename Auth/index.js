const express = require('express');
const hbs = require('hbs');
var app=express();
app.set('view engine','hbs');

const passport= require('passport');
app.use(passport.initialize());
app.use(passport.session());

// Passport Settings
passport.serializeUser(function(user,done) {
  done(null, user);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

//Mongoose Code Goes Here
const mongoose = require('mongoose');
mongoose.connect('mongodb://namit:namit7724@ds257564.mlab.com:57564/tshop');
const Schema = mongoose.Schema;
const UserDetail = new Schema({
      username:{
        unique:true,
        type:String
      },
      name:{
        type:String
      },
      email:{
        unique:true,
        type:String
      },
      password:{
        type:String
      }
    });
const UserDetails = mongoose.model('userInfo', UserDetail);

//create New User
var createUser=function(user){
    var User=new UserDetails(user);
    User.save().then((user)=>{
      console.log(user+" Registered Successfully");
      return (user+" Registered Successfully");
    },(e)=>{
      console.log(e);
      return e;
    });
}


/* PASSPORT LOCAL AUTHENTICATION */

const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
      UserDetails.findOne({
        username: username
      }, function(err, user) {
        if (err) {
          return done(err);
        }

        if (!user) {
          return done(null, false);
        }

        if (user.password != password) {
          return done(null, false);
        }
        return done(null, user);
      });
  }
));


module.exports={
  app,
  createUser
};
