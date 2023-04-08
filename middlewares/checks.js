const {check} = require("express-validator")

const checks = [
    check("marca")
        .not().isEmpty().withMessage("El campo marca es requerido para guardar la moto")
        .isString().withMessage("El campo marca debe ser un string"),
    check("modelo")
        .not().isEmpty().withMessage("El campo modelo es requerido para guardar la moto")
        .isString().withMessage("El campo modelo debe ser un string"),
    check("cc")
        .not().isEmpty().withMessage("El campo cc es requerido para guardar la moto")
        .isNumeric().withMessage("El campo cc debe ser un numero"),
    check("color")
        .not().isEmpty().withMessage("El campo color es requerido para guardar la moto")
        .isString().withMessage("El campo color debe ser un string"),
    check("img")
        .not().isEmpty().withMessage("El campo imagen es requerido para guardar la moto")
        .isString().withMessage("El campo imagen debe ser un string"),
    check("precio")
        .not().isEmpty().withMessage("El campo precio es requerido para guardar la moto")
        .isNumeric().withMessage("El campo precio debe ser un numero"),
    check("stock")
        .not().isEmpty().withMessage("El campo stock es requerido para guardar la moto")
        .isBoolean().withMessage("El campo stock debe ser un boleano"),
    check("descripcion")
        .not().isEmpty().withMessage("El campo descripcion es requerido para guardar la moto")
        .isString().withMessage("El campo descripcion debe ser un string"),


]

module.exports = checks