const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const pricesRoutes = require("./routes/prices");
const weatherRoutes = require("./routes/weather");
const cropsRoutes = require("./routes/crops");
const userPreferencesRoutes = require("./routes/userPreferences");

app.use("/prices", pricesRoutes);
app.use("/weather", weatherRoutes);
app.use("/crops", cropsRoutes);
app.use("/user-preferences", userPreferencesRoutes);

// Default route
app.get("/", (req, res) => {
    res.send("Welcome to the Personalized Farming Dashboard API 🌾");
});

// Global error handling
app.use((err, req, res, next) => {
    console.error("Server Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
});

// Start server
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
