const mongoose = require("mongoose");
const bcrypt=require('bcrypt');
const Schema = mongoose.Schema;

const resturantSchema = new Schema(
  {
    firstName: {
      type: String
    },
    middleName: {
      type: String
    },
    lastName: {
      type: String
    },
    fullName: {
      type: String
    },
    resturantName:{
      type:String
    },
    resturantType:{
        type: String,
        enum:['pureveg','nonveg','both'],
    },
    username: {
      type: String,
      unique: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true
    },
    area: {
      type: String
    },
    district: {
      type: String
    },
    pincode: {
      type: Number
    },
    city: {
      type: String
    },
    country: {
      type: String
    },
    address: {
      type: String
    },
    landmark: {
      type: String
    },
    contactNumber: {
      type: Number
    },
    photoGallery: [{
      link: String,
      date: Date,
      comment: String
    }],
    location: {
      type: String
    },
    hash_password: {
      type: String,
      required: true
    },
    profilePicture: {type: String}
  },
  {
    timestamps: true,
  }
);

resturantSchema.methods ={
  authenticate:async function(password){
      return await bcrypt.compare(password,this.hash_password);
      if(err)console.log('hashing error');
  }
}

const Resturant = mongoose.model("Resturant", resturantSchema);
module.exports = Resturant;