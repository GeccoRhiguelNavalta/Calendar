'use strict';

//get express
const express = require('express');

//get cors
const cors = require('cors');

//initiate instance of express
const app = express();

//declare port
const PORT = 3001;

//initiate cors middleware
app.use(cors());

//initiate and json middleware
app.use(express.json());

//link router
const router = require('./router');

//initiate router
app.use(router);

//connect server
app.listen(PORT, () => {
  console.log(`server connected at http://localhost:${PORT}`);
});
