const express = require("express");
var cors = require("cors");
require("dotenv").config();
const app = express();


/* var corsOptions = {
  origin: "https://g-riend-gamer-app-tye2.vercel.app/",
  Access-Control-Request-Method: POST
Access-Control-Request-Headers: Authorization, Content-Type
}; */
const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
}

const account = require("./routes/account");
const games = require("./routes/games");

const port = 8080;

app.use(express.json());
app.use(cors(allowCors));


app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

app.use("/account", account);
app.use("/games", games);

app.listen(port, () => {
  console.log("Server running on port 8080");
});
