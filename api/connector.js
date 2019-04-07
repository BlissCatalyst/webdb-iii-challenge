const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const configRoutes = require("../routes/routes.js");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

configRoutes(server);

module.exports = server;
