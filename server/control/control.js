'use strict';

// import model functions to control
const { getEvent, postEvent } = require('../model/model');

//create 'retrtieve event' function for router
const retrieveEvent = async (request, response) => {
  try {
    const event = await getEvent();
    response.status(200);
    response.send(event);
  } catch (error) {
    console.log('error :', error);
    response.sendStatus(500);
  }
};

//create 'add event' function for router
const addEvent = async (request, response) => {
  try {
    await postEvent(request.body);
    response.status(201);
    response.send('added new item');
  } catch (error) {
    console.log('error :', error);
    response.sendStatus(400);
  }
};


//export functions for router
module.exports = { retrieveEvent, addEvent };
