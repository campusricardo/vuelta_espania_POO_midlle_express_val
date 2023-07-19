const Premio = require('../models/models_mongo/premio.js');
const bcryptjs = require('bcryptjs');


const getPremios = async (req, res)=>{

    const premios = await Premio.find();

    res.json(premios);

}

const postPremios = async (req, res)=>{
    const {nombre, categoria, ganador} = req.body;
    
    const premio = new Premio({nombre, categoria, ganador});
    const existsNombre = await Premio.findOne({nombre});


    if (existsNombre) {
        return res.status(400).json({
            msg: "Person already registered"
        });
    }

    const salt = bcryptjs.genSaltSync();
    premio.ganador = bcryptjs.hashSync(ganador, salt);
   await premio.save();
   res.json({
    "message": "post api",
    premio
   })
}

const deletePremios = async (req, res)=>{
    
    try {
        await Premio.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error: "Premio no existe"});
    }

};

const putPremios =  (req, res)=>{
    res.json({
        "message" :"put api"
    })
};

const patchPremios = async (req, res)=>{
    
    try {
        const premio = await Premio.findOne({_id: req.params.id});

        if (req.body.nombre) {
            premio.nombre = req.body.nombre;
        }
        if (req.body.categoria){
            premio.categoria = req.body.categoria;
        }
        if (req.body.ganador) {
            premio.ganador = req.body.ganador;
        }

        await premio.save();
        res.send(premio);
    } catch (error) {
        res.status(404);
        res.send({error: "Premio no existe"})
    }

}

const getOnePremio = async (req, res) => {
    try {
        const premio = await Premio.findOne({_id: req.params.id});
        await premio.save();
        res.send(premio);
    } catch (error) {
        res.status(404);
        res.send({error: "Premio no encontrada"});
    }
}


module.exports = {
    getPremios,
    postPremios,
    deletePremios,
    putPremios,
    patchPremios,
    getOnePremio
}