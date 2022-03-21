const express = require("express");
const logger = require("morgan");

const dotenv = require("dotenv");
dotenv.config();

const router = require("./config/routes");
const app = express();

app.use(logger("tiny"));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello");
});

app.use(router);

module.exports = app;
