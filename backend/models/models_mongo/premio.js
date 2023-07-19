const mongoose = require('mongoose');

const premioSchema = mongoose.Schema({

    nombre: {
        type: String,
        required: [true, 'Name is required'],
        unique: true
    },

    categoria: {
        type: String,
        required: [true, 'Category is required']
    },
    ganador: {
        type: String,
        required: [true, 'The winner is required']

    },
    googleSignIn: {
        type: Boolean,
        default: false
    }
},
{
    timestamps: true,
}); 


const Premio = mongoose.model("Premio", premioSchema);


module.exports = Premio;