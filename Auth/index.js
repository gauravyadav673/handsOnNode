const express = require('express');
const hbs = require('hbs');
app.set('view engine','hbs');
app=express();

app.get('/signup',(req,res)=>{
  res.render('signup');
});
