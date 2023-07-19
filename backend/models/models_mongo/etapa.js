const mongoose = require('mongoose');

const etapaSchema = mongoose.Schema({

    nombre: {
        type: String,
        required: [true, 'Name is required'],
        unique: true
    },

    duracionM: {
        type: Number,
        required: [true, 'The duration in minutes is required']
    },
    longitudK: {
        type: Number,
        required: [true, 'The length must be required']
    },
    tmrM: {
        type: Number,
        required: [true, 'Best time is required']
    },
    googleSignIn: {
        type: Boolean,
        default: false
    }
},
{
    timestamps: true,
}); 


const Etapa = mongoose.model("Etapa", etapaSchema);

module.exports = Etapa;