const express = require('express');
const db = require('../config/db');
const router = express.Router();

router.post('/', (req, res) => {
    const { user_id, crop, region, season } = req.body;
    const sql = "INSERT INTO user_preferences (user_id, crop, region, season) VALUES (?, ?, ?, ?)";
    db.query(sql, [user_id, crop, region, season], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Preference added!", id: result.insertId });
    });
});

router.get('/', (req, res) => {
    const sql = "SELECT * FROM user_preferences";
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

router.get('/:user_id', (req, res) => {
    const { user_id } = req.params;
    const sql = "SELECT * FROM user_preferences WHERE user_id = ?";
    db.query(sql, [user_id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { crop, region, season } = req.body;
    const sql = "UPDATE user_preferences SET crop = ?, region = ?, season = ? WHERE id = ?";
    db.query(sql, [crop, region, season, id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Preference updated!" });
    });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const sql = "DELETE FROM user_preferences WHERE id = ?";
    db.query(sql, [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Preference deleted!" });
    });
});

module.exports = router;
