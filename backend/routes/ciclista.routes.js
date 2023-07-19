const {Router} = require('express');
const {check} = require('express-validator');
const {validateDocuments} = require('../middlewares/validate.documents.js');
const { getCiclistas,postCiclistas,deleteCiclistas,putCiclistas,patchCiclistas, getOneCiclista } = require('../controllers/ciclista.controllers.js');
const router = Router();

router.get("/ciclista", getCiclistas);

router.post("/ciclista/add",[
    check('nombre', 'Nombre no es valido').not().isEmpty(),
    check('edad', 'La edad no puede ser mayor a 100 anios').isLength({max: 2}),
    check('peso', 'El peso no puede ser mayor a 100 kilos').isLength({max: 2}), validateDocuments
],postCiclistas);

router.delete("/ciclista/del/:id", deleteCiclistas);

router.patch("/ciclista/upd/:id", patchCiclistas);

router.get("/ciclista/get/:id", getOneCiclista);

router.put("/ciclista", putCiclistas);



module.exports = router;