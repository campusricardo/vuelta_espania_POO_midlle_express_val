const mongoose = require('mongoose');

const ciclistaSchema = mongoose.Schema({

    nombre: {
        type: String,
        required: [true, 'name is required'],
        unique: true
    },

    edad: {
        type: Number,
        required: [true, 'age is required'],
    },
    peso: {
        type: Number,
        required: [true, 'weight is required'],
    },
    equipo: {
        type: String,
        required: [true, 'weight is required'],
    },
    googleSignIn: {
        type: Boolean,
        default: false
    }

},
{
    timestamps: true,
}); 


const Ciclista = mongoose.model("Ciclista", ciclistaSchema);


module.exports = Ciclista;