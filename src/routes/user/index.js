const { Router } = require('express');
const { UserIndex } = require('../../modules');
const router = Router();

router.get('/', UserIndex.index)


module.exports = router;