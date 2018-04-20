var mongoose = require('mongoose');  
// var User = require('../user/user');
var ProductSchema = new mongoose.Schema({  
  name: String,
  price: Number,
  description: String,
  createdBy: Object
});
mongoose.model('Product', ProductSchema);
module.exports = mongoose.model('Product');