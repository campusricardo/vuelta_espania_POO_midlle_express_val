const mongoose = require('mongoose');

const equipoSchema = mongoose.Schema({

    nombre: {
        type: String,
        required: [true, 'name is required'],
        unique: true
    },

    pais: {
        type: String,
        required: [true, 'Country is required'],
    },
    can_ciclistas: {
        type: Number,
        required: [true, 'The amount of cyclist is required'],
    },
    googleSignIn: {
        type: Boolean,
        default: false
    }

},
{
    timestamps: true,
}); 


const Equipo = mongoose.model("Equipo", equipoSchema);


module.exports = Equipo;