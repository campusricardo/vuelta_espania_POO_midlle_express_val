const Ciclista = require('../models/models_mongo/ciclista.js');
const bcryptjs = require('bcryptjs');

const getCiclistas = async (req, res)=>{
    const ciclistas = await Ciclista.find();

    res.json(ciclistas);
}

const postCiclistas = async (req, res)=>{
    const {nombre, edad, peso, equipo} = req.body;
    const ciclista = new Ciclista({nombre, edad, peso, equipo});
    const existsNombre = await Ciclista.findOne({nombre});

    if (existsNombre) {
        return res.status(400).json({
            msg: "Person already registered"
        });
    }

    const salt = bcryptjs.genSaltSync();
    ciclista.equipo = bcryptjs.hashSync(equipo, salt);
   await ciclista.save();
   res.josn({
    "message": "post api",
    ciclista
   })
}

const deleteCiclistas = async (req, res)=>{

    try {
        await Ciclista.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error: "Ciclista no existe"});
    }
};



const patchCiclistas = async (req, res)=>{
    try {
        const ciclista = await Ciclista.findOne({_id: req.params.id});
        if (req.body.nombre) {
            ciclista.nombre = req.body.nombre;

        }
        if (req.body.edad){
            ciclista.edad = req.body.edad;
        }
        if (req.body.peso) {
            ciclista.peso = req.body.peso;
        }
        if (req.body.equipo) {
            ciclista.equipo = req.body.equipo;
        }
        await ciclista.save();
        res.send(ciclista);
    } catch (error) {
        res.status(404);
        res.send({error: "Ciclista no existe"})
    }
}

const putCiclistas =  (req, res)=>{
    res.json({
        "message" :"put api"
    })
};

const getOneCiclista = async (req, res) => {
    try {
        const ciclista = await Ciclista.findOne({_id: req.params.id});
        await ciclista.save();
        res.send(ciclista);
    } catch (error) {
        res.status(404);
        res.send({error: "Ciclista no encontrada"});
    }
}

module.exports = {
    getCiclistas,
    postCiclistas,
    deleteCiclistas,
    putCiclistas,
    patchCiclistas,
    getOneCiclista
}