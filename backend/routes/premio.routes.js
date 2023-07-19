const {Router} = require('express');
const {getPremios,postPremios,deletePremios,putPremios,patchPremios, getOnePremio} = require('../controllers/premio.controllers.js');
const {check} = require('express-validator');
const { validateDocuments } = require('../middlewares/validate.documents.js');
const router = Router();

router.get("/premio", getPremios);

router.post("/premio/add",[
    check('nombre').not().isEmpty(),
    check('categoria').not().isEmpty(),
    check('ganador').not().isEmpty(),
    validateDocuments
],postPremios);

router.delete("/premio/del/:id", deletePremios);

router.patch("/premio/upd/:id", patchPremios);

router.get("/premio/get/:id", getOnePremio);

router.put("/premio", putPremios);



module.exports = router;