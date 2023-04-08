const express = require("express")
const router = express.Router()
const controller = require("../controllers/userControllers")


router.get("/ver", controller.ver)
router.post("/crear", controller.crear)
router.put("/editar/:id", controller.editar)
router.delete("/eliminar/:id", controller.eliminar)

module.exports = router