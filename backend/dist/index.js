"use strict";require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const fs = require("fs");

const app = express();

const server = require("http").Server(app);

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

app.use(
  cors({
    origin: "https://fiap-cloud-git-master.relirk.vercel.app",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(require("./routes"));

server.listen(process.env.PORT || 3000);
