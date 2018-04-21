var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var VerifyToken = require(__root + 'auth/VerifyToken');

// var jsonParser = bodyParser.json();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var Product = require("./product")
var User = require('../user/user');

router.get("/products",(req,res)=>{
    Product.find({},(err,products)=>{
        if(err) return res.status(500).send("problem with products");
        res.status(200).send(products);
    })
});
router.get("/product/:id",(req,res)=>{
    Product.findById(req.params.id, (err,product)=>{
        if(err) return res.status(500).send("problem with finding product");
        if(!product) return res.status(404).send("Not found");
        res.status(200).send(product)
    })
});
router.post("/product/new",VerifyToken,(req,res)=>{
    User.findById(req.userId, { password: 0 },(err,user)=>{
        if (err) return res.status(500).send("Problem with user search")
        if (!user) return res.status(404).send("User not found")
        Product.create({
            name:req.body.name,
            price:req.body.price,
            description:req.body.description,
            createdBy:user
        },(err,product)=>{
            if (err) return res.status(500).send("Problem with adding product")
            return res.status(200).send(product)
        })
    })

});

module.exports = router;
