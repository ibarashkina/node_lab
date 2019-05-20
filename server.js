"use strict";
const express = require("express");
const app = express();

const {bestQuotes} = require("./quotes");
// const {facts} = require("./facts");

app.get("/*",(req,res) => {
    res.status(200).send(bestQuotes[Math.floor(Math.random()*bestQuotes.length)]);
})

app.listen(3000, () => console.log("server up and running on port: 3000"));