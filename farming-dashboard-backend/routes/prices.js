const express = require("express");
const axios = require("axios");
const router = express.Router();

const MANDI_PRICE_API =
    "https://api.data.gov.in/resource/35985678-0d79-46b4-9ed6-6f13308a1d24?api-key=579b464db66ec23bdd0000013c2648cb75a84d2657ef47531c6a7b09&format=json&limit=20";

router.get("/", async (req, res) => {
    const { crop, region } = req.query; // User-selected crop & region

    try {
        const response = await axios.get(MANDI_PRICE_API);
        const allData = response.data.records;

        // Filter data based on user selection
        const filteredData = allData.filter(
            (item) =>
                item.commodity.toLowerCase() === crop.toLowerCase() &&
                item.district.toLowerCase() === region.toLowerCase()
        );

        if (filteredData.length > 0) {
            res.json({
                crop: filteredData[0].commodity,
                mandi: filteredData[0].market,
                price: `₹${filteredData[0].modal_price} per quintal`,
            });
        } else {
            res.json({ message: "No data found for selected crop & region" });
        }
    } catch (error) {
        console.error("Error fetching mandi prices:", error);
        res.status(500).json({ error: "Failed to fetch mandi prices" });
    }
});

module.exports = router;