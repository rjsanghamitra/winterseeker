const express = require("express");
const router = express.Router();
const https = require("https");
const axios = require("axios");
require("dotenv").config();

router.get("/:location", async (req, res) => {
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${req.params.location}&aqi=yes`;
    // key is the api key to use to api, q is the query parameter which has the location in the form of city name, latitude/longitude etc., and aqi is for air quality index.
    
    try {
        const response = await axios.get(apiUrl);
        res.status(200).json(response.data);
    } catch(error) {
        res.status(404).json({error: "Location doesn't exist."});
    }
})

module.exports = router;