const mongoose = require('mongoose');
mongoose.set('strictQuery', false)
mongoose.connect('mongodb://localhost:27017/CARS')
  .then(() => console.log(" db connected"))
  .catch((err) =>{console.log(err)});


  // ADD your Schema here!
  const CarSchema= new mongoose.Schema({
    name:String,
    description:String,
    price:Number,
    img:String
    

  })
  // ADD the Model compiled from the above Schema
  const Car =  mongoose.model('Car',CarSchema)

  // ADD Functions to interact with the Schema

// Don't forget to export your functions!
module.exports = Car