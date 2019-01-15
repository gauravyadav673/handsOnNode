var express = require('express')
var app = express()
const hbs = require('hbs');
app.set('view engine', 'hbs');

app.get('/',(req,res)=>{
  res.json({name:"namit"});
});

module.exports=app;
