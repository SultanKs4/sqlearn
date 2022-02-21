const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const mysql = require("mysql2/promise");

const dotenv = require("dotenv");
dotenv.config();

const router = require("./config/routes");
const app = express();

const sequelize = require("./config/database");
const helmet = require("helmet");

mysql
    .createConnection({
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        host: process.env.DB_HOST,
    })
    .then((connection) => {
        connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME};`).then(() => {
            sequelize
                .authenticate()
                .then(() => {
                    console.log("Sync has been established successfully.");
                })
                .catch((err) => console.error("Unable to connect to the database:", err));
        });
    });

require("./api/modelAssociation");

app.use(express.json());
app.use(cors());
app.use(logger("tiny"));
app.use(helmet());

app.use("/static", express.static("static"));
app.use("/images", express.static("uploads/images"));

app.get("/", (req, res) => {
    res.send("Hello");
});

app.get("/api/current_timestamps", (req, res) => {
    res.json(new Date().toLocaleString());
});

app.use(router);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`App is listening at http://localhost:${PORT}`));
