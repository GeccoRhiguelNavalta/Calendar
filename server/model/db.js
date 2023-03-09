"use strict";

//get mongoose ORM
const mongoose = require("mongoose");

//stop logging to console
mongoose.set("strictQuery", false);

//make schema
const eventSchema = new mongoose.Schema({
  title: String,
  date: Date,
  venue: String,
});

//connect to server mongoDB IIFE
(async function Connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Calendar");
    console.log("connected to MongoDB");
  } catch (error) {
    console.error("DB error: ", error);
  }
})();

//make model using this schema and create a collection named List
//which automatically pluralises to Lists
const Event = mongoose.model("Event", eventSchema);

//export Usr model for user-model file
module.exports = Event;
