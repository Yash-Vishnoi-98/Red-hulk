const express = require('express');
const router = express.Router();

router.get('/:crop/:season', (req, res) => {
    const { crop, season } = req.params;
    const suggestions = {
        wheat: { winter: "Water carefully and avoid over-irrigation.", summer: "Ensure proper shade and irrigation." },
        rice: { monsoon: "Monitor pests and use organic pesticides.", summer: "Use flood-resistant varieties." }
    };

    res.json(suggestions[crop]?.[season] || "No specific suggestions found.");
});

module.exports = router;