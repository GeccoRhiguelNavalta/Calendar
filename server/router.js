'use strict';

//get router from express
const router = require('express').Router();

//bring in control functions
const {retrieveEvent, addEvent} = require('./control/control');

//direct requests end points
router.get('/event', retrieveEvent);
router.post('/event', addEvent);

//export router for server link
module.exports = router;
