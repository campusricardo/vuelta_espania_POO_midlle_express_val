const {Router} = require('express');
const {getEtapas,postEtapas,deleteEtapas,putEtapas,patchEtapas, getOneEtapa} = require('../controllers/etapa.controllers.js');
const router = Router();

router.get("/etapa", getEtapas);

router.post("/etapa/add", postEtapas);

router.delete("/etapa/del/:id", deleteEtapas);

router.patch("/etapa/upd/:id", patchEtapas);

router.get("/etapa/get/:id", getOneEtapa);

router.put("/etapa", putEtapas);



module.exports = router;