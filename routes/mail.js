const isAuthenticated = require('../middleware/isAuthenticated');
var express = require('express');
var router = express.Router();


router.post('/', async (req, res) => {
    try {
        req.body
        res.status(200).json(uploadResponse);
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
});

module.exports = router;