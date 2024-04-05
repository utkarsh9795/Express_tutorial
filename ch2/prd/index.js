"use strict";

// set up babel with express js

var express = require('express');
// import express from 'express'    // when we use es6
var app = express();
var port = 3000;
app.get('/', function (req, res) {
  res.send('Hello program');
});
app.listen(port, function () {
  console.log("Example app listening at http://localhost:".concat(port));
});