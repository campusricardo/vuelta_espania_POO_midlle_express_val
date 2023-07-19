const {Router} = require('express');
const {getEtapas,postEtapas,deleteEtapas,putEtapas,patchEtapas, getOneEtapa} = require('../controllers/etapa.controllers.js');
const { check } = require('express-validator');
const { validateDocuments } = require('../middlewares/validate.documents.js');
const router = Router();

router.get("/etapa", getEtapas);

router.post("/etapa/add",[
    check('nombre').not().isEmpty(),
    check('duracionM').isLength({min: 1}),
    check('longitudK').isLength({min: 1}),
    check('tmrM').isLength({min: 1}),
    validateDocuments

], postEtapas);

router.delete("/etapa/del/:id", deleteEtapas);

router.patch("/etapa/upd/:id", patchEtapas);

router.get("/etapa/get/:id", getOneEtapa);

router.put("/etapa", putEtapas);



module.exports = router;