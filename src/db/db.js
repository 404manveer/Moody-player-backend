const mongoose = require("mongoose");

let isConnected = false; // track connection

async function connectDB() {
  if (isConnected) return;

  try {
    await mongoose.connect(process.env.Mongoosedb_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    throw err;
  }
}

module.exports = connectDB;
