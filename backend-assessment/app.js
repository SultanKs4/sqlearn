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

// app.post("/select/:dbname", (req, res) => {
//     const { dbname } = req.params
//     const { query } = req.body

//     const { success, message } = getSimilarity.getFeatureVector(query)

//     const responseObj = {}

//     responseObj.similarityCheck = success
//     responseObj.parsingMessage = (success) ? "Parsing success" : message.hash.text

//     if (!getConnection(dbname)) {
//         createConnectionDB(dbname)
//     }

//     getConnection(dbname).query(`${query}`, function (err, result) {
//         if (err) {
//             responseObj.runtimeCheck = false
//             return res.json({
//                 ...responseObj,
//                 result: null,
//                 queryMessage: err.sqlMessage
//             });
//         }

//         responseObj.runtimeCheck = true
//         return res.json({
//             ...responseObj,
//             result,
//             queryMessage: "Query run successfully"
//         })
//     })
// })

app.use(router);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => console.log(`App is listening at http://localhost:${PORT}`));
