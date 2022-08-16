const { Router } = require('express');
const { AuthIndex } = require('../../modules');
const router = Router();

router.post('/signIn', AuthIndex.signIn);
router.post('/signUp', AuthIndex.signUp);

module.exports = router;