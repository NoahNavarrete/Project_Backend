const express = require("express")
const router = express.Router()
const controller = require("../controllers/userControllers")
const {validar} = require("../middlewares/validarId")
const check = require("../middlewares/checks")
const {validarChecks} = require("../middlewares/validarChecks")


router.get("/ver", controller.ver)
router.get("/axios",controller.axiosGet)
router.get("/ver/:id", validar, controller.buscarPorId)
router.get("/buscar/:modelo", controller.buscarPorModelo)
router.post("/crear",check, validarChecks, controller.crear)
router.put("/editar/:id",validar, check, validarChecks, controller.editar)
router.delete("/eliminar/:id", validar, controller.eliminar)

module.exports = router