const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const bajajSchema = new Schema({
    marca:{
        type: String,
        required: true
    },
    modelo:{
        type: String,
        required: true
    },
    cc:{
        type: String,
        required: true
    },
    color:{
        type: String,
        required: true
    },
    img:{
        type: String,
        required: true
    },
    precio:{
        type: Number,
        required: true
    },
    stock:{
        type: Boolean,
        required: true
    },
    descripcion:{
        type: String
    }


})

const Bajaj = mongoose.model("Bajaj", bajajSchema)

module.exports = {Bajaj}