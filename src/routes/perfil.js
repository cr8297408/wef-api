const express = require('express');
const user = require('../models/perfil.js');
const { perfilController } = require('../modules/perfil');
const router = express();


router.get('/perfil', perfilController);

module.exports = router;
