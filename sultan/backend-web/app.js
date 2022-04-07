const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const router = require("./config/routes");
const helmet = require("helmet");

require("./api/modelAssociation");

app.use(express.json());
app.use(cors());
app.use(logger("tiny"));
app.use(helmet({ crossOriginEmbedderPolicy: false }));

app.use("/static", express.static("static"));
app.use("/images", express.static("uploads/images"));

app.get("/", (req, res) => {
    res.send("Hello");
});

app.get("/api/current_timestamps", (req, res) => {
    res.json(new Date().toLocaleString());
});

app.use(router);

module.exports = app;
