const express = require("express");
require("dotenv/config"); // Load environment variables from .env file

const { router } = require("./routes/index.js");
const server = express();

server.use(express.json()); // JSON bodies

server.use(router);

module.exports = { server };
