const mongoose = require('mongoose');

const equipoSchema = mongoose.Schema({

    nombre: {
        type: String,
        required: true,
        trim: true
    },

    pais: {
        type: String,
        required: true,
        trim: true
    },
    can_ciclistas: {
        type: Number,
        required: true,
        trim: true
    }
},
{
    timestamps: true,
}); 


const Equipo = mongoose.model("Equipo", equipoSchema);


module.exports = Equipo;