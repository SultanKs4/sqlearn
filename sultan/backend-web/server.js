const dotenv = require("dotenv");
dotenv.config();
const app = require("./app");

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`App is listening at http://localhost:${PORT}`));
