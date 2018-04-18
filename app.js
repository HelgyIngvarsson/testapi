var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var jsonParser = bodyParser.json();

app.get("/api/products", function(req, res){});
app.get("/api/product/:id", function(req, res){
    var id = req.params.id;
});
app.post("/api/product/new",jsonParser, function (req, res) {
    if(!req.body) return res.sendStatus(400);
})
var port = process.env.PORT
app.listen(port,function(){});