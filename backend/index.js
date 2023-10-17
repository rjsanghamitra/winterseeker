const express = require("express");
const app = express();
require("dotenv").config();
const current = require("./routes/current.js");
const cors = require("cors");
const path = require("path");

const PORT = process.env.PORT;

app.use(
  cors({
    origin: "https://winterseeker.vercel.app",
    methods: ["GET"],
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/current-weather", current);
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://winterseeker.vercel.app");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/", (req, res) => {
  res.send(`PORT ${PORT} CONNECTED`);
});

app.listen(PORT);
