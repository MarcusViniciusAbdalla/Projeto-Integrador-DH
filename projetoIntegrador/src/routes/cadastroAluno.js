const express = require('express');
const router = express.Router();
const upload = require('../../multer');


const MohaveController = require('../controllers/MohaveController')
router.get('/', MohaveController.index);
router.get('/cadastro', MohaveController.cadastro);
router.post('/cadastro', upload.single('servico-img'), MohaveController.cadastro);


module.exports = router;
