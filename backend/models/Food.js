const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//const moment = require('moment');

const FoodSchema = new Schema(
    {   
        key:{
            type:String
        },
        date:{
            type: Date,
            //default: moment.tz(new Date(), "Asia/Kolkata")
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
    },
    {
      timestamps: true,
    }
  );
  
  const Food = mongoose.model("Food", FoodSchema);
  module.exports = Food;