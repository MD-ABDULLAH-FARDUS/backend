const express = require("express");
const router = express.Router()

router.get("/", (req, res) => {
    res.send("Home Route")
})
router.get("/register", (req, res) => {
    res.send("Register Route")
})
router.get("/login", (req, res) => {
    res.send("Login Route")
})

module.exports = router