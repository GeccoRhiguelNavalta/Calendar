"use strict";

//link db and get schema(ORM)
const Event = require("./db");

//'retrieveList' function for control
const getEvent = () => {
  return Event.find();
};
//'postEvent' function for control
const postEvent = (newItem) => {
  Event.create(newItem);
};

//export functions for control
module.exports = { getEvent, postEvent };
