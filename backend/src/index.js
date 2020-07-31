require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const server = require("http").Server(app);

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(require("./routes"));

server.listen(process.env.PORT || 3000);
