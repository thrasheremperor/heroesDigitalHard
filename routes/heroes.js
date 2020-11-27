const express=require('express');
const router=express.Router();
const mainController=require('../controllers/heroesController');

router.get('/heroes',mainController.heroes);
router.get('/heroes/detalles/:id',mainController.heroesDetalles);
router.get('/heroes/bio/:id/:ok?',mainController.heroesBio);

module.exports=router;