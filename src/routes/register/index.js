const { Router } = require('express');
const { RegisterIndex } = require('../../modules');
const router = Router();

router.get('/', RegisterIndex.index);
router.post('/', RegisterIndex.store);
router.get('/:id', RegisterIndex.show);
router.put('/:id', RegisterIndex.update);
router.delete('/:id', RegisterIndex.destroy);

module.exports = router;