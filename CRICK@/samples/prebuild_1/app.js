var express = require("express");
var bodparse = require("body-parser");
var path = require("path");
var expressValidator = require('express-validator');

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));



app.get("/", function(req, res){
  res.render('index');
});

app.get("/login", function(req, res){
  res.render('login');
});

app.get("/register", function(req, res){
  res.render('register');
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Server Started on port 3000...");
});
