const mongoose = require('mongoose');

const etapaSchema = mongoose.Schema({

    nombre: {
        type: String,
        required: true,
        trim: true
    },

    duracionM: {
        type: Number,
        required: true,
        trim: true
    },
    longitudK: {
        type: Number,
        required: true,
        trim: true
    },
    tmrM: {
        type: Number,
        required: true,
        trim: true
    }
},
{
    timestamps: true,
}); 


const Etapa = mongoose.model("Etapa", etapaSchema);


module.exports = Etapa;