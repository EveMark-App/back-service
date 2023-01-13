const isAuthenticated = require('../middleware/isAuthenticated');
var express = require('express');
var router = express.Router();


router.post('/', isAuthenticated, (req, res) => {
    

        res.status(200).json({msg:"hello"});
  
});

module.exports = router;