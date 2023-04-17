const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resturantSchema = new Schema(
    {
      
    },
    {
      timestamps: true,
    }
  );
  
  const Resturant = mongoose.model("Resturant", resturantSchema);
  module.exports = Resturant;