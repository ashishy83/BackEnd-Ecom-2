const mongoose = require("mongoose");
const config = require("../config");

const connectDB = async () => {
  try {
    const uri = config.MONGO_URI;
    await mongoose.connect(uri);
    console.log("App is connected to MOngoose DB!!");
  } catch (error) {
    console.log("Error connecting to Mongoose DB ==> ",error);
  }
};

module.exports =  connectDB;