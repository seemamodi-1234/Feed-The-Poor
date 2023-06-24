const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require('moment-timezone');

const FoodSchema = new Schema(
    {   
        key:{
            type:String
        },
        foodType:{
            type:String,
            enum:["Veg" , "Non-veg"]
        },
        date:{
            type: String,
            default: moment.tz(new Date(), "Asia/Kolkata")
        },
        resturantUsername:{
            type: String,
        },
        resturantName: {
            type: String
        },
        pickUpTime: {
            type: Date
        },
        photoGallery: [{
            link: String,
            date: Date,
            comment: String
        }],
        likes: {
            type: Array,
            default: [],
        },
        comment:{
            type:Number
        }
    },
    {
      timestamps: true,
    }
  );
  
  const Food = mongoose.model("Food", FoodSchema);
  module.exports = Food;