const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
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
      certification:{
        type: String,
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
      userType:{
        type:String,
        default:"User"
      },
      profilePicture: {type: String}
    },
    {
      timestamps: true,
    }
  );
  
  const User = mongoose.model("User", UserSchema);
  module.exports = User;