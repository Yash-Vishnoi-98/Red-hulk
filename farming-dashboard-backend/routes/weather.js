const express = require("express");
const axios = require("axios");
require("dotenv").config();

const router = express.Router();
const WEATHER_API_KEY = process.env.WEATHER_API_KEY; // Load API key from .env

router.get("/", async (req, res) => {
    const { region } = req.query;

    if (!region) {
        return res.status(400).json({ error: "Region is required" });
    }

    try {
        console.log("Fetching weather data for", region);
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${region}&appid=${WEATHER_API_KEY}&units=metric`
        );

        res.json({
            temp: response.data.main.temp,
            condition: response.data.weather[0].description,
        });
    } catch (error) {
        console.error("Error fetching weather data:", error.response?.data || error.message);

        if (error.response) {
            // Handle specific OpenWeather API errors
            if (error.response.status === 404) {
                return res.status(404).json({ error: "Region not found" });
            }
            if (error.response.status === 401) {
                return res.status(401).json({ error: "Invalid API Key" });
            }
        }

        res.status(500).json({ error: "Failed to fetch weather data" });
    }
});

module.exports = router;