const dotenv = require("dotenv");
dotenv.config();
const app = require("./app");
const sequelize = require("./config/database");

sequelize
    .authenticate()
    .then(async () => {
        await sequelize.sync({ alter: true });
        console.log("Connection has been established successfully.");
    })
    .catch((err) => {
        console.error("Unable to connect to the database:", err);
    });

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`App is listening at http://localhost:${PORT}`));
