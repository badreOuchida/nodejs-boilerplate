const mongoose = require("mongoose");
require("dotenv").config();

// var env
const MONGO_URI = process.env.MONGO_URI;

// clear warning
mongoose.set("strictQuery", true);

// verify connection and errors
mongoose.connection.once("open", (err) => {
  console.log("Successfuly connected");
});
mongoose.connection.once("error", (e) => {
  console.log("connection error");
  console.log(e);
});

// connection function
async function mongoConnect() {
  try {
    await mongoose.connect(MONGO_URI);
  } catch (e) {
    console.log("connection error");
    console.error(e);
  }
}

// disconnect function
async function mongoDisconnect() {
  try {
    await mongoose.disconnect();
  } catch (e) {
    console.log("Disconnect error");
    console.error(e);
  }
}

module.exports = { mongoConnect, mongoDisconnect };
