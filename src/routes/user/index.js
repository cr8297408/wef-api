const { Router } = require('express');
const { UserIndex } = require('../../modules');
const router = Router();

router.get('/', UserIndex.index);
router.post('/', UserIndex.store);
router.get('/:id', UserIndex.show);
router.put('/:id', UserIndex.update);
router.delete('/:id', UserIndex.destroy);

module.exports = router;