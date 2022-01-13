//Importation d'express
const express = require('express');

//Création d'un routeur
const router = express.Router();

//Importation du controller
const sauceCtrl = require('../controllers/sauce');

//Importation de l'authentification
const auth = require('../middleware/auth');

//Importation de multer
const multer = require('../middleware/multer');

//CRUD
router.post('/', auth, multer, sauceCtrl.createSauce); 
router.put('/:id', auth, multer, sauceCtrl.modifySauce); 
router.delete('/:id', auth, sauceCtrl.deleteSauce);
router.get('/:id', auth, sauceCtrl.getOneSauce); 
router.get('/', auth, sauceCtrl.getAllSauces);
router.post('/:id/like', auth, sauceCtrl.likeDislikeSauce);

//Exportation du routeur
module.exports = router;