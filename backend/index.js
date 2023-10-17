const express = require("express");
const app = express();
require("dotenv").config();
const current = require("./routes/current.js");
const cors = require("cors");
const path = require("path");

const PORT = process.env.PORT;

app.use(cors({
    origin: "https://winterseeker.vercel.app/",
    methods: ["GET", "POST"],
    credentials: true,
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/current-weather", current);

app.get("/", (req, res) => {
    res.send(`PORT ${PORT} CONNECTED`);
});


app.listen(PORT);