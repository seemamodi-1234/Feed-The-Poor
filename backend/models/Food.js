const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FoodSchema = new Schema(
    {   
        //primarykey->{date,resturantname}
        date:{
            type: Date,
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