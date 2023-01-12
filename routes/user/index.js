var router = require('express').Router();

const isAuthenticated = require('../../middleware/isAuthenticated');
const create = require("./create")
const login = require("./login")
const logout = require("./logout")
const checkToken = require("./check-token")
const getMyEvents = require("./get-my-events")
const getCreatedEvents = require("./get-created-events")

router.post('/create', create);
router.post('/login', login);
router.post("/logout",isAuthenticated,logout)
router.post('/check-token', isAuthenticated,checkToken );
router.get('/get-my-events',getMyEvents);
router.get("/get-created-events",getCreatedEvents)

module.exports = router;
