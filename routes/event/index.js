const router = require('express').Router();
const create = require("./create");
const getAll = require("./get-all")
const update = require("./update")
const getOne = require("./get-one")
const buy = require("./buy")
const checkin = require("./checkin")
const deleteRoute = require("./delete")
const isAuthenticated = require('../../middleware/isAuthenticated');

router.post('/create', isAuthenticated,create);
router.get("/get-all",isAuthenticated,getAll)
router.put("/update/:eventId",isAuthenticated,update)
router.get("/get-one/:eventId",isAuthenticated,getOne)
router.post("/buy",isAuthenticated,buy)
router.post("/checkin",isAuthenticated,checkin)

router.delete("/delete/:eventId",isAuthenticated,deleteRoute)
module.exports = router;
