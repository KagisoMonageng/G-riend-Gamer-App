const express = require("express");
var cors = require("cors");
require("dotenv").config();
const app = express();


var corsOptions = {
  origin: "*",
};

const account = require("./routes/account");
const games = require("./routes/games");

const port = 8080;

app.use(express.json());
app.use(cors(corsOptions));
app.use("/", account);
app.use("/games", games);

app.listen(port, () => {
  console.log("Server running on port 8080");
});
