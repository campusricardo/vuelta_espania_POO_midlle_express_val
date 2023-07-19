const {Router} = require('express');
const {check} = require('express-validator');
const {validateDocuments} = require('../middlewares/validate.documents.js');
const {getEquipos,postEquipos,deleteEquipos,putEquipos,patchEquipos, getOneEquipo} = require('../controllers/equipo.controllers.js');
const router = Router();

router.get("/equipo", getEquipos);

router.post("/equipo/add",[
    check('nombre', 'El nombre no es valido').not().isEmpty(),
    check('pais', 'El pais no es valido').not().isEmpty(),
    check('can_ciclistas', 'No es valida esa cantidad de ciclistas').not().isEmpty(), validateDocuments
], postEquipos);

router.delete("/equipo/del/:id", deleteEquipos);

router.patch("/equipo/upd/:id", patchEquipos);

router.get("/equipo/get/:id", getOneEquipo);

router.put("/equipo", putEquipos);



module.exports = router;