const router = require('express').Router();
const create = require("./create");
const getAll = require("./get-all")
const update = require("./update")
const getOne = require("./get-one")
const buy = require("./buy")

const isAuthenticated = require('../../middleware/isAuthenticated');

router.post('/create', isAuthenticated,create);
router.get("/get-all",getAll)
router.put("/update/:eventId",update)
router.get("/get-one/:eventId",getOne)
router.post("/buy/:eventId",buy)
router.post("/checkin/:eventId",buy)

router.delete("/delete/:eventId")
module.exports = router;
