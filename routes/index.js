var express = require('express')
var app = express()
const hbs = require('hbs');
app.set('view engine', 'hbs');

app.get('/',(req,res)=>{
  res.json({name:"namit"});
});

app.get('/signup',(req,res)=>{
  res.render("./Authentication/signup.hbs");
})
module.exports=app;
