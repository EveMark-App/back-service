const cloudinary = require('cloudinary').v2;
const isAuthenticated = require('../middleware/isAuthenticated');
var express = require('express');
var router = express.Router();


router.post('/', async (req, res) => {
    try {
        console.log("hii")
        const fileStr = req.body.data;
        const uploadResponse = await cloudinary.uploader.upload(fileStr);
        console.log("large ??")
        console.log(uploadResponse);
        res.json(uploadResponse);
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
});

module.exports = router;