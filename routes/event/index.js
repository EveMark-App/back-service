const router = require('express').Router();
const create = require("./create");
const getAll = require("./get-all")
const update = require("./update")
const getOne = require("./get-one")
const isAuthenticated = require('../../middleware/isAuthenticated');

router.post('/create',isAuthenticated, create);
router.get("/get-all",isAuthenticated,getAll)
router.put("/update/:eventId",update)
router.get("/get-one/:eventId",getOne)

router.delete("/delete/:eventId")
module.exports = router;
