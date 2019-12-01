"use strict";
exports.__esModule = true;
var express = require("express");
var cors = require("cors");
var app = express();
var PORT = process.env.PORT || 8080;
var API_URL = "http://localhost:3000";
//options for cors midddleware
var options = {
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    origin: API_URL,
    preflightContinue: false
};
//use cors middleware
app.use(cors(options));
app.get('/', function (req, res) {
    res.send('hi');
});
app.listen(PORT, function () {
    console.log('server started!');
});
