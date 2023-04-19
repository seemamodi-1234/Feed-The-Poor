const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resturantSchema = new Schema(
  {
    name: {
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
    hash_passwword: {
      type: String,
      required: true
    },
    profilePicture: {type: String}
  },
  {
    timestamps: true,
  }
);

const Resturant = mongoose.model("Resturant", resturantSchema);
module.exports = Resturant;