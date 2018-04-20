var express = require("express");

var app = express();

var db = require('./db');


global.__root   = __dirname + '/'; 

// var UserController = require('./user/userController')
// app.use('/users',UserController)

app.post('/api', function (req, res) {
    res.status(200).send('API works.');
  });

var AuthController = require(__root+'auth/AuthController');
app.use('/api/auth', AuthController);

var ProductController = require(__root+'product/ProductController')
app.use('/api', ProductController);

app.use(express.static(__dirname + "/public"));

app.get("*",(req,res)=>{
  res.sendfile("./index.html");
})
module.exports =app;