const mongoose = require("mongoose");
const db = require("./index.js");

const itemSchema = new mongoose.Schema({
  name:String,
  imageUrl: String,
  category:String,
  description: String, 
  price:Number,
  quantity: Number,
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;