const { Router } = require('express');
const { UserIndex } = require('../../modules');
const router = Router();

router.get('/', UserIndex.index);
router.get('/', UserIndex.store);
router.get('/:id', UserIndex.show);
router.get('/:id', UserIndex.update);
router.get('/:id', UserIndex.destroy);

module.exports = router;