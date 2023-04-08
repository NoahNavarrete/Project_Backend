const {Bajaj} = require("../models/Bajaj");

const validar = async (req, res, next) =>{
    try {
        const bajaj = await Bajaj.findById(req.params.id)
        if (bajaj !== null) {
            next();
        } else {
            res.status(500).json({msg: "Id invalido"})
        }
        
    } catch (error) {
        res.status(500).json(error)
        
    }
} 

module.exports = {validar}