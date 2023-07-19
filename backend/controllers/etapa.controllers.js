const Etapa = require('../models/models_mongo/etapa.js');


const getEtapas = async (req, res)=>{

    const etapas = await Etapa.find();
    res.json(etapas);

}

const postEtapas = async (req, res)=>{
    const {nombre, duracionM, longitudK, tmrM} = req.body;

    const etapa = new Etapa({nombre, duracionM, longitudK, tmrM});
    const existsNombre = await Etapa.findOne({nombre});

    if (existsNombre) {
        return res.status(400).json({
            msg: "Person already registered"
        });
    }

   await etapa.save();
   res.json({
    "message": "post api",
    etapa
   })
}

const deleteEtapas = async (req, res)=>{
   
    try {
        await Etapa.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error: "Etapa no existe"});
    }

};

const patchEtapas = async (req, res)=>{

    try {
        const etapa = await Etapa.findOne({_id: req.params.id});

        if (req.body.nombre) {
            etapa.nombre = req.body.nombre;
        }
        if (req.body.duracionM){
            etapa.duracionM = req.body.duracionM;
        }
        if (req.body.longitudK) {
            etapa.longitudK = req.body.longitudK;
        }
        if (req.body.tmrM) {
            etapa.tmrM = req.body.tmrM;
        }


        await etapa.save();
        res.send(etapa);
    } catch (error) {
        res.status(404);
        res.send({error: "Etapa no existe"})
    }
}

const getOneEtapa = async (req, res) => {
    try {
        const etapa = await Etapa.findOne({_id: req.params.id});
        await etapa.save();
        res.send(etapa);
    } catch (error) {
        res.status(404);
        res.send({error: "Etapa no encontrada"});
    }
}

const putEtapas =  (req, res)=>{
    res.json({
        "message" :"put api"
    })
};

module.exports = {
    getEtapas,
    postEtapas,
    deleteEtapas,
    putEtapas,
    patchEtapas,
    getOneEtapa
}