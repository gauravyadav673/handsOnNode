var express = require('express')
var app = express();
const hbs = require('hbs');
const passport= require('passport');
const auth=require('../Auth');

app.set('view engine', 'hbs');
app.use(passport.initialize());
app.use(passport.session());

app.get('/',(req,res)=>{
  res.json({name:"namit"});
});

app.get('/signup',(req,res)=>{
  res.render("./Authentication/signup.hbs");
});

app.post('/signup',(req,res)=>{
  var response=auth.createUser(req.body);
  console.log(response);
  res.end(response);
});


app.post('/',passport.authenticate('local', { failureRedirect: '/error' }),
  function(req, res) {
    res.redirect('/success?username='+req.user.username);
  });


module.exports=app;
