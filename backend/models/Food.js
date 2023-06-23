const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//const moment = require('moment');

const FoodSchema = new Schema(
    {   
        key:{
            type:String
        },
        foodType:{
            type:String
        },
        date:{
            type: String,
            //default: moment.tz(new Date(), "Asia/Kolkata")
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
        like:{
            type:Number
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