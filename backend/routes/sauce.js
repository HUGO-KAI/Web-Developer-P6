const express = require('express');
const router = express.Router();
const limiter = require('../middleware/rateLimit');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const sauceCtrl = require('../controllers/sauce');

//Définir les routes des requêtes concernant les sauces
router.get('/', auth , sauceCtrl.getAllSauce);
router.post('/', auth , multer , sauceCtrl.createSauce);
router.get('/:id', auth , sauceCtrl.getOneSauce);
router.put('/:id', auth , multer , sauceCtrl.modifySauce);
router.delete('/:id', auth , sauceCtrl.deleteSauce);
router.post ('/:id/like', auth , sauceCtrl.like);

module.exports = router;