const {Router} = require('express');
const {getEquipos,postEquipos,deleteEquipos,putEquipos,patchEquipos, getOneEquipo} = require('../controllers/equipo.controllers.js');
const router = Router();

router.get("/equipo", getEquipos);

router.post("/equipo/add", postEquipos);

router.delete("/equipo/del/:id", deleteEquipos);

router.patch("/equipo/upd/:id", patchEquipos);

router.get("/equipo/get/:id", getOneEquipo);

router.put("/equipo", putEquipos);



module.exports = router;