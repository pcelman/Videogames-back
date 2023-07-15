
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./routes/index.js");
const cors = require("cors");

require("./db.js");

const server = express();

server.name = "API";

server.use(cors({
  // origin: 'http://127.0.0.1:5173',
  origin: "https://my-videogame.vercel.app",
}));



server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use("/", routes);

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://my-videogame.vercel.app"
);
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

server.listen(3002, () => {
  console.log(`Server is running on port 3002`);
});

module.exports = server;