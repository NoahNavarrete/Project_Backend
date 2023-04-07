const express = require("express")
const router = express.Router()
const controller = require("../controllers/userControllers")


router.get("/ver",controller.ver)


module.exports = router