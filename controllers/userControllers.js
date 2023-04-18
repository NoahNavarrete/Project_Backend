const {Bajaj} = require("../models/Bajaj")
const axios = require("axios")

class Controller {

    async ver (req, res) {
        const bajajs = await Bajaj.find();
        res.status(200).json(bajajs)
    }
    async buscarPorId (req, res) {
        const bajaj = await Bajaj.findById(req.params.id)
        res.status(200).json(bajaj)
    }
    async buscarPorModelo (req, res) {
        const bajaj = await Bajaj.findOne({modelo: req.params.modelo})
        res.status(200).json(bajaj)
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

    async axiosGet (req, res) {
        try {
            const {data, status} = await axios.get("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
            res.json({data, status})
            
        } catch (error) {
            res.json({data: error.response.data, status: error.response.status})
        }
    }
}

module.exports = new Controller