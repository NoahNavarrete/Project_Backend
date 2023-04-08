const {Bajaj} = require("../models/Bajaj")
class Controller {

    async ver (req, res) {
        const bajajs = await Bajaj.find();
        res.status(200).json(bajajs)
    }

    async crear (req, res) {
        try {
            const bajajGuardar = new Bajaj(req.body)
            await bajajGuardar.save()
            res.status(201).json(bajajGuardar)
        } catch (error) {
            res.status(501).json({msg: "No se pudo guardar la moto"})
            
        }
    }

    async editar (req, res) {
        await Bajaj.findByIdAndUpdate(req.params.id, req.body)
        res.status(202).json({msg:"producto actualizado"})
    }

    async eliminar (req, res) {
        await Bajaj.findByIdAndDelete(req.params.id)
        res.json({msg:"La moto " + req.params.id + " se elimino"})
    }
}

module.exports = new Controller