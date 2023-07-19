const {Router} = require('express');
const {getPremios,postPremios,deletePremios,putPremios,patchPremios, getOnePremio} = require('../controllers/premio.controllers.js');
const router = Router();

router.get("/premio", getPremios);

router.post("/premio/add", postPremios);

router.delete("/premio/del/:id", deletePremios);

router.patch("/premio/upd/:id", patchPremios);

router.get("/premio/get/:id", getOnePremio);

router.put("/premio", putPremios);



module.exports = router;